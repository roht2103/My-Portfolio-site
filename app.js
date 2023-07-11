const ham = document.querySelector('.ham');
const sidebar = document.querySelector('.sidebar');
ham.addEventListener('click', function(event) {
    event.stopPropagation();
    sidebar.classList.toggle('active');
});
document.addEventListener('click', function(event) {
    if (!sidebar.contains(event.target)) {
      sidebar.classList.remove('active');
    }
  });