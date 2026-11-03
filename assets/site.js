const search = document.querySelector('#publication-search');
const filter = document.querySelector('#publication-type');
const yearFilter = document.querySelector('#publication-year');
function filterPublications() {
  const q = (search?.value || '').toLowerCase().trim();
  const type = filter?.value || 'All';
  const year = yearFilter?.value || 'All';
  let visible = 0;
  document.querySelectorAll('.publication').forEach(row => {
    const match = row.textContent.toLowerCase().includes(q) && (type === 'All' || row.dataset.type === type) && (year === 'All' || row.dataset.year === year);
    row.hidden = !match;
    visible += Number(match);
  });
  const status = document.querySelector('#publication-count');
  if (status) status.textContent = `${visible} record${visible === 1 ? '' : 's'}`;
  const empty = document.querySelector('#publication-empty');
  if (empty) empty.hidden = visible !== 0;
}
[search, filter, yearFilter].forEach(el => el?.addEventListener('input', filterPublications));
filterPublications();
