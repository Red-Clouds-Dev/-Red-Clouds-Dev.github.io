document.getElementById('themeToggleBtn').addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
  const isDarkTheme = document.body.classList.contains('dark-theme');
  localStorage.setItem('darkTheme', isDarkTheme);
});

// Check for stored theme preference on page load
document.addEventListener('DOMContentLoaded', function() {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  if (isDarkTheme) {
    document.body.classList.add('dark-theme');
  }
});