document.getElementById('themeToggleBtn').addEventListener('click', function() {
  
  document.body.classList.toggle('dark-theme');

  
  const isDarkTheme = document.body.classList.contains('dark-theme');

 
  localStorage.setItem('darkTheme', isDarkTheme);

 
  updateButtonText(isDarkTheme);
});


document.addEventListener('DOMContentLoaded', function() {
 
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';

 
  if (isDarkTheme) {
    document.body.classList.add('dark-theme');
  }

  
  updateButtonText(isDarkTheme);
});


function updateButtonText(isDarkTheme) {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  themeToggleBtn.innerText = isDarkTheme ? 'Light Theme' : 'Dark Theme';
}