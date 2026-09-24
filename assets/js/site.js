(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('nav');
  if (toggle && nav) toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
  });

  const search = document.getElementById('search');
  const cards = [...document.querySelectorAll('.searchable')];
  const filters = [...document.querySelectorAll('.filter')];
  const info = document.getElementById('resultsInfo');
  if (!search || !cards.length) return;
  let current = 'todos';
  const norm = s => (s || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
  const apply = () => {
    const q = norm(search.value.trim());
    let shown = 0;
    cards.forEach(card => {
      const hay = norm(card.dataset.search);
      const temas = norm(card.dataset.temas);
      const okQ = !q || hay.includes(q);
      const okT = current === 'todos' || temas.split('|').includes(norm(current));
      const show = okQ && okT;
      card.hidden = !show;
      if (show) shown++;
    });
    if (info) info.textContent = `${shown} ${shown === 1 ? 'item encontrado' : 'itens encontrados'}`;
  };
  search.addEventListener('input', apply);
  filters.forEach(btn => btn.addEventListener('click', () => {
    filters.forEach(b => b.classList.remove('active'));
    btn.classList.add('active'); current = btn.dataset.filter; apply();
  }));
  apply();
})();
