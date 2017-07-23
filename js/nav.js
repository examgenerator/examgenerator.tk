function navmenu() {
    var content = document.getElementById("navcontent");
    if (content.getAttribute("class") == "invisible")
    {
        content.removeAttribute("class");
    }
    else
    {
        content.setAttribute("class", "invisible");
    }
}