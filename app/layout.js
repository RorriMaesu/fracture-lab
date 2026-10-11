import{esc}from'./ui.js';
let atlasTab='patterns';
const selectedRecords=new Map();
function region(className,label){const el=document.createElement('section');el.className=className;el.setAttribute('aria-label',label);return el;}
function collect(parent,nodes){for(const node of nodes)if(node)parent.append(node);return parent;}
function tabs(root,items,initial){
 const buttons=[...root.querySelectorAll('[data-layout-tab]')];
 const choose=id=>{for(const b of buttons){const current=b.dataset.layoutTab===id;b.setAttribute('aria-selected',String(current));b.tabIndex=current?0:-1;root.querySelector('#'+b.getAttribute('aria-controls')).hidden=!current;}if(root.classList.contains('atlas-workspace'))atlasTab=id;};
 choose(initial);root.addEventListener('click',e=>{const b=e.target.closest('[data-layout-tab]');if(b)choose(b.dataset.layoutTab);});
 root.addEventListener('keydown',e=>{const b=e.target.closest('[data-layout-tab]');if(!b||!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();const i=buttons.indexOf(b),index=e.key==='Home'?0:e.key==='End'?buttons.length-1:(i+(e.key==='ArrowRight'?1:-1)+buttons.length)%buttons.length;choose(buttons[index].dataset.layoutTab);buttons[index].focus();});
}
function tabBar(items,label){return`<div class="workspace-tabs" role="tablist" aria-label="${label}">${items.map(([id,name])=>`<button role="tab" id="tab-${id}" data-layout-tab="${id}" aria-controls="panel-${id}" aria-selected="false">${name}</button>`).join('')}</div>`;}
function panel(el,id){el.id='panel-'+id;el.setAttribute('role','tabpanel');el.setAttribute('aria-labelledby','tab-'+id);return el;}
function atlasLayout(surface){
 surface.classList.add('atlas-workspace');const title=surface.querySelector('.page-top'),patterns=surface.querySelector('.atlas-grid'),repair=surface.querySelector('.healing-explorer'),anatomy=surface.querySelector('.anatomy-study'),source=patterns.nextElementSibling;
 const holder=region('atlas-panels','Anatomy atlas');const patternsPanel=panel(region('atlas-patterns','Fracture patterns'),'patterns');collect(patternsPanel,[patterns,source]);holder.append(patternsPanel,panel(repair,'repair'),panel(anatomy,'structure'));surface.append(title);title.insertAdjacentHTML('afterend',tabBar([['patterns','Fracture patterns'],['repair','Bone repair'],['structure','Bone structure']],'Atlas views'));surface.append(holder);tabs(surface,null,atlasTab);
}
function progressLayout(surface){
 surface.classList.add('progress-workspace');const title=surface.querySelector('.page-top'),stats=surface.querySelector('.stat-strip'),headings=[...surface.querySelectorAll('.section-heading')],map=surface.querySelector('.concept-grid'),backup=surface.querySelector('.backup-card'),history=[...surface.querySelectorAll('.history-row,.empty-state')];
 const grid=region('progress-panels','Learning details'),overview=region('progress-concepts','Concept coverage'),side=region('progress-sidebar','Sessions and backup');collect(overview,[headings[0],map]);const historyPanel=region('session-panel','Session history'),list=region('session-list','Completed sessions');list.tabIndex=0;collect(list,history);collect(historyPanel,[headings[1],list]);collect(side,[historyPanel,backup]);grid.append(overview,side);surface.append(title,stats,grid);
}
function recordLayout(surface,kind){
 const cards=[...surface.querySelectorAll(kind==='report'?'[data-review-question]':'.mistake-card')];if(!cards.length)return;
 const shell=region('record-workspace','Review workspace'),nav=region('record-navigation','Select an answer to review'),list=region('record-list','Recorded answers'),detail=region('record-detail','Selected answer details');detail.tabIndex=0;
 cards.forEach((card,i)=>{card.dataset.record=String(i);const question=card.querySelector('h2').textContent,meta=card.querySelector('.mistake-meta>span:last-child').textContent;const b=document.createElement('button');b.type='button';b.className='record-link';b.dataset.recordLink=String(i);b.innerHTML=`<span class="record-index">${i+1}</span><span><strong>${esc(question)}</strong><small>${esc(meta)}</small></span><span aria-hidden="true">↗</span>`;list.append(b);});
 let selected=Number(selectedRecords.get(kind)||0);if(kind==='report'&&!selectedRecords.has(kind)){const pending=cards.findIndex(c=>c.querySelector('[data-criterion]'));if(pending>=0)selected=pending;}
 const choose=i=>{if(!cards[i])return;selectedRecords.set(kind,i);cards.forEach((c,n)=>{c.hidden=n!==i;const b=list.querySelector(`[data-record-link="${n}"]`);b.classList.toggle('selected',n===i);if(n===i)b.setAttribute('aria-current','true');else b.removeAttribute('aria-current');});detail.scrollTop=0;};
 nav.innerHTML=`<div class="record-navigation-title"><span class="eyebrow">${kind==='report'?'SESSION ANSWERS':'STUDY CONNECTIONS'}</span><span id="record-count">${cards.length}</span></div>`;nav.append(list);collect(detail,cards);shell.append(nav,detail);surface.append(shell);choose(cards[selected]?selected:0);
 list.addEventListener('click',e=>{const b=e.target.closest('[data-record-link]');if(b)choose(Number(b.dataset.recordLink));});
 if(kind==='notebook'){surface.querySelector('#notebook-list')?.remove();const controls=surface.querySelector('.notebook-controls');surface.insertBefore(controls,shell);const empty=document.createElement('p');empty.className='record-no-results';empty.textContent='No matching concepts. Try another word.';empty.hidden=true;nav.append(empty);surface.querySelector('#notebook-search').addEventListener('input',e=>{const text=e.target.value.toLowerCase(),matched=[];for(const c of cards){const i=Number(c.dataset.record),match=c.dataset.search.includes(text);list.querySelector(`[data-record-link="${i}"]`).hidden=!match;if(match)matched.push(i);}empty.hidden=matched.length>0;surface.querySelector('#record-count').textContent=String(matched.length);if(matched.length)choose(matched.includes(Number(selectedRecords.get(kind)))?Number(selectedRecords.get(kind)):matched[0]);else cards.forEach(c=>c.hidden=true);});}
 else{const reflection=surface.querySelector('.content-card:not(.score-card)'),heading=surface.querySelector('.section-heading');heading.remove();surface.classList.add('report-workspace');const wrapper=region('report-panels','Review and reflection');wrapper.insertAdjacentHTML('beforeend',tabBar([['answers','Review answers'],['reflection','Reflection']],'Session report views'));wrapper.append(panel(shell,'answers'),panel(reflection,'reflection'));surface.append(wrapper);tabs(wrapper,null,'answers');}
}
export function mountLayout(main,route){
 document.body.dataset.route=route;
 if(route==='tutor')return;
 const surface=document.createElement('div');surface.className='page-surface '+route+'-surface';collect(surface,[...main.children]);main.append(surface);
 if(route==='atlas')atlasLayout(surface);
 if(route==='progress')progressLayout(surface);
 if(route==='notebook'||route==='report')recordLayout(surface,route);
 if(route==='about'){const grid=region('about-panels','Sources and privacy');collect(grid,[...surface.querySelectorAll('.content-card')]);surface.append(grid);const sourceList=surface.querySelector('.source-list');sourceList.tabIndex=0;sourceList.setAttribute('aria-label','Chapter 6 source links');}
 if(route==='quiz'){const panel=surface.querySelector('.question-panel');if(panel){const body=region('question-body','Question and feedback'),actions=panel.querySelector('.quiz-actions');collect(body,[...panel.children].filter(c=>c!==actions));panel.append(body,actions);body.tabIndex=0;}}
}
