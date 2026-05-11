(function(){ 
  function go(path){ window.location.href = path; } 
  const es = document.getElementById('lang-es'); 
  const en = document.getElementById('lang-en'); 
  const pt = document.getElementById('lang-pt'); 
 
  // try to map same page across languages 
  const map = { 
    '/es/about.html': {'en':'/en/about.html','pt':'/pt-br/sobre.html'}, 
    '/es/servicios.html': {'en':'/en/services.html','pt':'/pt-br/servicos.html'}, 
    '/es/recursos.html': {'en':'/en/resources.html','pt':'/pt-br/recursos.html'}, 
    '/es/contacto.html': {'en':'/en/contact.html','pt':'/pt-br/contato.html'}, 
    '/en/about.html': {'es':'/es/about.html','pt':'/pt-br/sobre.html'}, 
    '/en/services.html': {'es':'/es/servicios.html','pt':'/pt-br/servicos.html'}, 
    '/en/resources.html': {'es':'/es/recursos.html','pt':'/pt-br/recursos.html'}, 
    '/en/contact.html': {'es':'/es/contacto.html','pt':'/pt-br/contato.html'}, 
    '/pt-br/sobre.html': {'es':'/es/about.html','en':'/en/about.html'}, 
    '/pt-br/servicos.html': {'es':'/es/servicios.html','en':'/en/services.html'}, 
    '/pt-br/recursos.html': {'es':'/es/recursos.html','en':'/en/resources.html'}, 
    '/pt-br/contato.html': {'es':'/es/contacto.html','en':'/en/contact.html'} 
  }; 
 
  function switchTo(lang){ 
    const path = window.location.pathname; 
    if (map[path] && map[path][lang]) return go(map[path][lang]); 
    if (lang==='es') return go('/es/'); 
    if (lang==='en') return go('/en/'); 
    return go('/pt-br/'); 
  } 
 
  if (es) es.onclick = (e)=>{e.preventDefault(); switchTo('es');}; 
  if (en) en.onclick = (e)=>{e.preventDefault(); switchTo('en');}; 
  if (pt) pt.onclick = (e)=>{e.preventDefault(); switchTo('pt');}; 
})(); 
