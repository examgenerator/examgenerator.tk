window.onload = function list() {
    for (i = 0; i < localStorage.length; i++)
    {
        var opt = document.createElement('option');
        opt.innerHTML = localStorage.key(i);
        opt.value = localStorage.key(i);
        document.getElementById("loaded-select").appendChild(opt);
    }
}
function updatelist()
{
    document.getElementById("loaded-select").innerHTML = "";
    for (i = 0; i < localStorage.length; i++)
    {
        var opt = document.createElement('option');
        opt.innerHTML = localStorage.key(i);
        opt.value = localStorage.key(i);
        document.getElementById("loaded-select").appendChild(opt);
    }
}
function save() {
    var name = document.getElementById("setname").value;
    name = name.trim();
    if (name == "")
    {
        alert("You must set name!");
    }
    else
    {  
        localStorage.setItem(name, document.getElementById("input").value);
    }
}
function show() {
    var name = document.getElementById("loaded-select").value;
    document.getElementById("input").value = localStorage.getItem(name);
}
function del() {
    var name = document.getElementById("loaded-select").value;
    name = name.trim();
    if (name == "")
    {
        alert("No set of questions selected!")
    }
    else
    {
        localStorage.removeItem(name);
    }
}