const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('[data-category]');
filters.forEach(function(button) {
  button.addEventListener('click', function() {
    const selected = button.dataset.filter;
    filters.forEach(function(item) {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    let count = 0;
    projects.forEach(function(project) {
      const visible = selected === 'all' || project.dataset.category === selected;
      project.hidden = !visible;
      if (visible) { count += 1; }
    });
    document.getElementById('filter-status').textContent = count + ' projects shown.';
  });
});
