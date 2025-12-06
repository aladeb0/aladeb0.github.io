// مودال + جلب وعرض ملف markdown (يجب رفع ملفات .md في مجلد rooms/)
  async function openModalWithFile(filePath){
    modal.style.display = 'flex';
    modalBody.innerHTML = 'جارٍ تحميل التقرير...';
    openFull.href = filePath;
    try{
      const res = await fetch(filePath);
      if(!res.ok) throw new Error('لم أستطع جلب الملف');
      const text = await res.text();
      // تحويل Markdown إلى HTML عبر marked (موجود في الصفحة)
      const html = marked.parse(text);
      modalBody.innerHTML = html;
    }catch(err){
      modalBody.innerHTML = <p class="muted">خطأ في تحميل الملف.</p>;
    }
  }
  modalClose.addEventListener('click', ()=> modal.style.display='none');
  modal.addEventListener('click', (e)=>{ if(e.target===modal) modal.style.display='none' });

  // حماية عرض HTML بسيطة
  function escapeHTML(s){
    return String(s||'').replace(/[&<>"']/g, function(m){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m];
    });
  }

  // === SVG helpers for social icons (يمكن استبدال SVG أو إضافة أيقونات أخرى) ===
  function githubSVG(){ return <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 .5C5.73.5.75 5.48.75 11.76c0 4.9 3.18 9.06 7.59 10.53.56.1.76-.24.76-.54 0-.27-.01-1-.02-1.97-3.09.67-3.74-1.49-3.74-1.49-.51-1.31-1.24-1.66-1.24-1.66-1.02-.7.08-.68.08-.68 1.12.08 1.71 1.16 1.71 1.16 1 . +"></path></svg>;}
  function linkedinSVG(){ return <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="20" height="18" rx="2"/></svg>;}
  function twitterSVG(){ return <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 5.92c-.64.28-1.32.47-2.04.56.73-.44 1.3-1.14 1.57-1.98-.69.41-1.46.7-2.28.86C18.7 4.65 17.62 4 16.38 4c-1.78 0-3.23 1.46-3.23 3.26 0 .26.03.51.09.75C9.69 8.86 6.28 7.1 4.2 4.13c-.29.5-.46 1.08-.46 1.7 0 1.17.59 2.2 1.49 2.81-.55-.02-1.07-.17-1.52-.42v.04c0 1.6 1.1 2.94 2.56 3.24-.27.07-.55.11-.84.11-.2 0-.39-.02-.58-.05.39 1.21 1.52 2.09 2.86 2.12-1.05.82-2.37 1.3-3.81 1.3-.25 0-.5-.01-.74-.04 1.37.9 2.99 1.43 4.73 1.43 5.67 0 8.78-4.8 8.78-8.96v-.41c.6-.44 1.12-1 . -"></path></svg>;}
  function telegramSVG(){ return <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 3L3 9l5 2 2 6 3-4 6 3z"/></svg>;}
});
