function generate() {
    var terms = new Array();
    terms = document.getElementById("terms").value.split("\n");
    var definitions = new Array();
    definitions = document.getElementById("definitions").value.split("\n");
    definitions.sort(function () {return 0.5 - Math.random()});
    var printwindow = window.open("");
    printwindow.document.write("<!DOCTYPE html><html><head><title>Generated exam (examgenerator.tk)</title><style>body, footer{font:15px Arial;} td{width: 200px;}</style></head><body><table>");
    for (var x in terms) 
    {
        printwindow.document.write("<tr><td>" + terms[x] + "</td><td>" + definitions[x] + "</td><tr>");
    }
    printwindow.document.write("</table></body><footer>Created using examgenerator.tk</footer></html>")
}