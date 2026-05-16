function toggleSidebar(force) {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const shouldOpen = force !== undefined ? force : !sidebar.classList.contains('open');
  sidebar.classList.toggle('open', shouldOpen);
  overlay.classList.toggle('open', shouldOpen);
  document.getElementById('menuToggle').textContent = shouldOpen ? '✕' : '☰';
}
