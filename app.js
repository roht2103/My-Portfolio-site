const ham = document.querySelector('.ham');
const sidebar = document.querySelector('.sidebar');
ham.addEventListener('click', function() {
    sidebar.classList.toggle('active');
});
