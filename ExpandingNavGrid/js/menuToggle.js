function toggleMenu() {
    var y = document.getElementById("primaryNav");
    if (y.className === "closed") {
        y.className = "open";
    } else {
        y.className = "closed";
    } // end if
} // end function

var x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;