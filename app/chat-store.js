import{esc}from'./ui.js';
const key='fl-conversations-v1';
export function cleanConversations(value){
 if(!Array.isArray(value))return[];
 return value.slice(0,12).filter(c=>c&&typeof c.id==='string'&&typeof c.title==='string'&&Array.isArray(c.messages)).map(c=>({id:c.id.slice(0,80),title:c.title.slice(0,80),updated:Number(c.updated)||Date.now(),messages:c.messages.slice(-80).filter(m=>m&&['user','assistant'].includes(m.role)&&typeof m.content==='string').map(m=>({role:m.role,content:m.content.slice(0,50000),model:typeof m.model==='string'?m.model.slice(0,150):'',status:m.status==='pending'?'stopped':['complete','stopped','error'].includes(m.status)?m.status:'complete',error:typeof m.error==='string'?m.error.slice(0,500):''})),draft:typeof c.draft==='string'?c.draft.slice(0,6000):''}));
}
export const chats={items:[],active:'',persistent:true,
 load(){try{const saved=JSON.parse(localStorage.getItem(key)||'{}');this.items=cleanConversations(saved.items);this.active=this.items.some(c=>c.id===saved.active)?saved.active:this.items[0]?.id||'';}catch{}if(!this.active)this.create();},
 current(){return this.items.find(c=>c.id===this.active);},
 create(){const c={id:crypto.randomUUID(),title:'New conversation',updated:Date.now(),messages:[],draft:''};this.items.unshift(c);this.items=this.items.slice(0,12);this.active=c.id;this.save();return c;},
 save(){try{localStorage.setItem(key,JSON.stringify({active:this.active,items:this.items}));this.persistent=true;}catch{this.persistent=false;}},
 remove(id){this.items=this.items.filter(c=>c.id!==id);if(this.active===id)this.active=this.items[0]?.id||'';if(!this.active)this.create();this.save();}
};
chats.load();
// Escape before adding a small, deliberately HTML-free Markdown vocabulary.
function inline(text){return esc(text).replace(/`([^`\n]+)`/g,'<code>$1</code>').replace(/\*\*([^*\n]+)\*\*/g,'<strong>$1</strong>').replace(/\*([^*\n]+)\*/g,'<em>$1</em>');}
export function markdown(text){
 const lines=text.split('\n');let html='',list='',code=false,codeLines=[];
 const close=()=>{if(list){html+=`</${list}>`;list='';}};
 for(const line of lines){
  if(/^\s*```/.test(line)){close();if(code){html+='<pre><code>'+esc(codeLines.join('\n'))+'</code></pre>';codeLines=[];}code=!code;continue;}
  if(code){codeLines.push(line);continue;}
  const bullet=line.match(/^\s*([-*]|\d+\.)\s+(.+)/);
  if(bullet){const type=/\d/.test(bullet[1])?'ol':'ul';if(list!==type){close();html+=`<${type}>`;list=type;}html+='<li>'+inline(bullet[2])+'</li>';continue;}
  close();if(!line.trim())continue;
  if(/^#{1,6}\s/.test(line))html+='<h3>'+inline(line.replace(/^#{1,6}\s+/,''))+'</h3>';
  else if(/^>\s/.test(line))html+='<blockquote>'+inline(line.replace(/^>\s/,''))+'</blockquote>';
  else html+='<p>'+inline(line)+'</p>';
 }
 close();if(code)html+='<pre><code>'+esc(codeLines.join('\n'))+'</code></pre>';return html;
}
