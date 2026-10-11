const collator=new Intl.Collator('en',{numeric:true,sensitivity:'base'});
export function canonicalModelName(name){return name.split('/').at(-1).includes(':')?name:name+':latest';}
export function modelAvailability(model,details={},error=''){
 if(/cloud/i.test(model.name||'')||model.remote_host||details.remote_host)return{availability:'cloud',reason:'Runs through a cloud service. This tutor uses local models.'};
 if(error)return{availability:'error',reason:error};
 if(Array.isArray(details.capabilities)&&!details.capabilities.includes('completion'))return{availability:'unsupported',reason:details.capabilities.includes('embedding')?'An embedding model, used for search rather than conversation.':'Ollama does not report text generation for this model.'};
 return{availability:'ready',reason:''};
}
export function diskSize(bytes){if(!Number.isFinite(bytes)||bytes<=0)return'Size unavailable';return bytes>=1e9?(bytes/1e9).toFixed(1)+' GB':Math.round(bytes/1e6)+' MB';}
export function matchesModel(model,query){const compact=text=>text.toLowerCase().replace(/[\s._:/-]+/g,'');return compact([model.name,model.details?.parameter_size,model.details?.quantization_level,...model.capabilities||[]].join(' ')).includes(compact(query));}
export function sortModels(models,sort='name'){return[...models].sort((a,b)=>{const name=collator.compare(a.name,b.name);if(sort==='smallest')return((a.size||Infinity)-(b.size||Infinity))||name;if(sort==='largest')return((b.size||0)-(a.size||0))||name;if(sort==='recent')return((Date.parse(b.modified_at)||0)-(Date.parse(a.modified_at)||0))||name;return name;});}
