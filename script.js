
const items=window.PILULAS||[];const macro=['Educação','Cultura','Tecnologias','Saúde','Economia'];let active='Todas';
const $=s=>document.querySelector(s);$('#total').textContent=items.length;$('#totalHero').textContent=items.length;
const filters=$('#filters');['Todas',...macro].forEach(t=>{const b=document.createElement('button');b.className='filter'+(t==='Todas'?' active':'');b.textContent=t;b.onclick=()=>{active=t;document.querySelectorAll('.filter').forEach(x=>x.classList.toggle('active',x===b));render()};filters.appendChild(b)});
$('#search').addEventListener('input',render);
function esc(s){return String(s).replace(/[&<>"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[m]))}
function render(){const q=$('#search').value.trim().toLocaleLowerCase('pt-BR');const list=items.filter(x=>{const thematic=active==='Todas'||x.macrotemas.includes(active);const hay=[x.titulo,x.descricao,...x.macrotemas,...x.descritores].join(' ').toLocaleLowerCase('pt-BR');return thematic&&(!q||hay.includes(q))});$('#resultsInfo').textContent=`${list.length} ${list.length===1?'resultado':'resultados'}`;$('#cards').innerHTML=list.map(x=>`<article class="card"><div class="num">PÍLULA ${String(x.id).padStart(2,'0')}</div><h3>${esc(x.titulo)}</h3><div class="tags">${x.macrotemas.map(t=>`<span class="tag">${esc(t)}</span>`).join('')}</div><p class="desc">${esc(x.descricao)}</p><div class="card-meta">Bruno Olivatto · ${esc(x.duracao)}</div><audio controls preload="none" src="${encodeURI(x.arquivo)}">Seu navegador não suporta áudio HTML5.</audio></article>`).join('')}
render();
