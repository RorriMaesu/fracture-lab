export const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const pct=n=>Math.round(n*100)+'%';
export const date=s=>new Date(s).toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'});
export function toast(message){const el=document.getElementById('toast');el.textContent=message;el.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>el.classList.remove('show'),3500);}
export function icon(name){const paths={arrow:'M5 19 19 5M5 5h14v14',book:'M3 4h7l2 2 2-2h7v15h-7l-2 2-2-2H3ZM12 6v15',check:'m5 12 4 4 10-10',refresh:'M20 7v5h-5M4 17v-5h5M6 6a8 8 0 0 1 13 2M18 18a8 8 0 0 1-13-2',spark:'m12 3 3 6 6 3-6 3-3 6-3-6-6-3 6-3Z'};return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[name]||paths.arrow}"/></svg>`;}

