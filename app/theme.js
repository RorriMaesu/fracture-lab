export function mountThemeSettings(){
 const root=document.documentElement,toggle=document.querySelector('#dark-toggle'),meta=document.querySelector('meta[name="theme-color"]');
 const apply=dark=>{root.dataset.theme=dark?'dark':'light';toggle.checked=dark;meta.content=dark?'#101b18':'#f7f5ed';};
 apply(root.dataset.theme==='dark');
 toggle.addEventListener('change',()=>{apply(toggle.checked);try{localStorage.setItem('fl-theme',root.dataset.theme);}catch{}});
 window.addEventListener('storage',event=>{if(event.key==='fl-theme'||event.key===null)apply(event.newValue==='dark');});
}
