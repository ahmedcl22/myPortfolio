var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector('.sidebar');
var continaer = document.querySelector('.container');
menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    continaer.classList.toggle("large-container");
}
