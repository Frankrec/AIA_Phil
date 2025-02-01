// Write your JavaScript code.
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var content = document.getElementById('content');
    var sidebarLeft = window.getComputedStyle(sidebar).getPropertyValue('left');

    if (sidebarLeft === '0px') {
        sidebar.style.left = '-270px';
        content.style.marginLeft = '0';
    } else {
        sidebar.style.left = '0';
        content.style.marginLeft = '270px';
    }
}