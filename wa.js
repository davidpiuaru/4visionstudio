/* ============================================================
   WHATSAPP — SINGURUL LOC UNDE SE EDITEAZĂ NUMĂRUL
   Format internațional, fără + și fără spații.
   ============================================================ */
const WA_NUMBER = "40749064910";

function waUrl(text){
  return `https://wa.me/${WA_NUMBER}` + (text ? `?text=${encodeURIComponent(text)}` : '');
}

document.addEventListener('DOMContentLoaded', () => {
  /* ---------- orice link cu clasa .wa-link duce pe WhatsApp ---------- */
  document.querySelectorAll('.wa-link').forEach(a => {
    a.href = waUrl(a.dataset.waText || '');
    a.target = '_blank';
    a.rel = 'noopener';
  });

  /* ---------- buton flotant, prezent pe toate paginile ---------- */
  const fab = document.createElement('a');
  fab.className = 'wa-fab';
  fab.href = waUrl('Bună! Am o întrebare despre 4visions Studio:');
  fab.target = '_blank';
  fab.rel = 'noopener';
  fab.setAttribute('aria-label', 'Scrie-ne pe WhatsApp');
  fab.innerHTML = `
    <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3C8.8 3 3 8.8 3 16c0 2.3.6 4.5 1.7 6.4L3 29l6.8-1.8c1.9 1 4 1.6 6.2 1.6 7.2 0 13-5.8 13-13S23.2 3 16 3zm0 23.6c-2 0-3.9-.5-5.6-1.5l-.4-.2-4 1.1 1.1-3.9-.3-.4c-1.1-1.7-1.6-3.7-1.6-5.7C5.2 10 10 5.2 16 5.2S26.8 10 26.8 16 22 26.6 16 26.6zm5.9-7.9c-.3-.2-1.9-.9-2.2-1s-.5-.2-.7.2c-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.8s1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.8 5.1.8.3 1.4.5 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.6.3-.8.3-1.4.2-1.6-.1-.1-.3-.2-.6-.3z"/></svg>
    <span>Ai o întrebare?</span>`;
  document.body.appendChild(fab);
});
