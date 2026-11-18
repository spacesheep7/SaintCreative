(function(){
  // Aparición al hacer scroll
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target);}});},{threshold:.1});
    els.forEach(function(el){io.observe(el);});
  }else{els.forEach(function(el){el.classList.add('show');});}

  // Lightbox con navegación
  var lb=document.getElementById('lightbox'),img=document.getElementById('lb-img');
  var imgs=[].slice.call(document.querySelectorAll('.gallery img')),cur=0;
  function show(i){cur=(i+imgs.length)%imgs.length;img.src=imgs[cur].src;img.alt=imgs[cur].alt;}
  function open(i){show(i);lb.hidden=false;document.body.style.overflow='hidden';}
  function close(){lb.hidden=true;document.body.style.overflow='';}
  imgs.forEach(function(el,i){el.addEventListener('click',function(){open(i);});});
  lb.querySelector('.lb-close').onclick=close;
  lb.querySelector('.lb-prev').onclick=function(){show(cur-1);};
  lb.querySelector('.lb-next').onclick=function(){show(cur+1);};
  lb.addEventListener('click',function(e){if(e.target===lb)close();});
  document.addEventListener('keydown',function(e){
    if(lb.hidden)return;
    if(e.key==='Escape')close();
    if(e.key==='ArrowLeft')show(cur-1);
    if(e.key==='ArrowRight')show(cur+1);
  });
})();
