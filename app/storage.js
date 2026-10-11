import{validateBackup}from'./engine.js';
let db=null,memory={schema:1,attempts:[],active:null},persisted=false;
export const storage={
async init(){try{db=await new Promise((resolve,reject)=>{const r=indexedDB.open('fracture-lab-v1',1);r.onupgradeneeded=()=>r.result.createObjectStore('kv');r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);r.onblocked=()=>reject(Error('Storage is open in another tab.'));});const stored=await this.get('learning');if(stored){validateBackup(stored);memory=stored;}persisted=true;}catch{try{const s=JSON.parse(localStorage.getItem('fracture-lab-fallback')||'null');if(s){validateBackup(s);memory=s;}persisted=true;}catch{}db=null;}return memory;},
get persistent(){return persisted;},
get state(){return memory;},
async get(key){if(!db)return null;return new Promise((resolve,reject)=>{const r=db.transaction('kv','readonly').objectStore('kv').get(key);r.onsuccess=()=>resolve(r.result);r.onerror=()=>reject(r.error);});},
async save(){if(db){try{await new Promise((resolve,reject)=>{const tx=db.transaction('kv','readwrite');tx.objectStore('kv').put(memory,'learning');tx.oncomplete=resolve;tx.onerror=()=>reject(tx.error);});persisted=true;return true;}catch{}}try{localStorage.setItem('fracture-lab-fallback',JSON.stringify(memory));persisted=true;return true;}catch{persisted=false;return false;}},
async complete(attempt){attempt.completed=new Date().toISOString();const i=memory.attempts.findIndex(a=>a.id===attempt.id);if(i>=0)memory.attempts[i]=attempt;else memory.attempts.push(attempt);memory.active=null;return this.save();},
async import(data){validateBackup(data);const existing=new Set(memory.attempts.map(a=>a.id));let count=0;for(const a of data.attempts)if(!existing.has(a.id)){memory.attempts.push(a);existing.add(a.id);count++;}await this.save();return count;},
export(){return{schema:1,exported:new Date().toISOString(),attempts:memory.attempts};},
async clear(){memory={schema:1,attempts:[],active:null};return this.save();}
};

