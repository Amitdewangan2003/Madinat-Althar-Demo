(function(){
  var root = document.documentElement;
  function applyTheme(t){
    root.setAttribute('data-theme', t);
    document.getElementById('btnLight').classList.toggle('active', t==='light');
    document.getElementById('btnDark').classList.toggle('active', t==='dark');
    try{ localStorage.setItem('ma-theme', t); }catch(e){}
  }
  var saved = 'light';
  try{ saved = localStorage.getItem('ma-theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'); }catch(e){}
  applyTheme(saved);
  document.getElementById('btnLight').addEventListener('click', function(){ applyTheme('light'); });
  document.getElementById('btnDark').addEventListener('click', function(){ applyTheme('dark'); });

  var burger = document.getElementById('burger');
  var nav = document.getElementById('siteNav');
  burger.addEventListener('click', function(){ nav.classList.toggle('open'); });
  nav.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', function(){ nav.classList.remove('open'); }); });

  var tabs = document.querySelectorAll('.tab');
  var tabData = [
    {title:'Active Order #A102-4852', route:'Jebel Ali Port → Riyadh Distribution Center', badge:'In Transit', side:"Every shipment, warehouse bin and customs status updates live as it moves across the network."},
    {title:'Shipment #GCC-7734', route:'Dubai Warehouse → Doha Port Terminal', badge:'Customs Cleared', side:'Track each container by GPS checkpoint with automatic alerts at every border crossing.'},
    {title:'Inventory Sync #WH-2291', route:'Dubai Bay 4 → Cross-Dock Staging', badge:'Reconciled', side:'Warehouse counts reconcile automatically against dispatch and incoming purchase orders.'}
  ];
  tabs.forEach(function(btn){
    btn.addEventListener('click', function(){
      tabs.forEach(function(b){ b.classList.remove('active'); });
      btn.classList.add('active');
      var d = tabData[btn.getAttribute('data-tab')];
      document.getElementById('orderTitle').textContent = d.title;
      document.getElementById('orderRoute').textContent = d.route;
      document.getElementById('orderBadge').textContent = d.badge;
      document.getElementById('sideCopy').textContent = d.side;
    });
  });

  var mpills = document.querySelectorAll('.mpill');
  mpills.forEach(function(p){
    p.addEventListener('click', function(){
      mpills.forEach(function(x){ x.classList.remove('active'); });
      p.classList.add('active');
    });
  });

  var form = document.getElementById('contactForm');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById('formNote').textContent = "Thanks — your message has been noted. We'll be in touch shortly.";
    form.reset();
  });
})();
