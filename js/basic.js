function generate() { //generate
    var numberOfQuestions;
    var text;
    var enteredString;
    var questionsEntered = new Array();
    var inputString;
    var input = new Array();
    document.getElementById("output").value = ""; //clear output
    inputString = document.getElementById("input").value; //create input string
    var inputuntrimmed = inputString.split("\n") //create input Array
    var index = 0;
    for (x in inputuntrimmed)
    {
        if (inputuntrimmed[x].trim() != "")
        {
            input[index] = inputuntrimmed[x];
            index += 1;
        }
    }
    numberOfQuestions = parseInt(document.getElementById("numberofquestions").value); //how many questions
    input.sort(function () {return 0.5 - Math.random()}) //randomize input Array
    for (var i = 0; i < numberOfQuestions; i++) //write out generated test
    {
        if (i > input.length - 1) 
        {
            document.getElementById("output").value += "It was not possible to write out more questions.";
            break;
        }
        else
        {
        text = input[i] + "\n";
        document.getElementById("output").value += text;
        }
    }
    if (document.getElementById("printver").checked == true)
    {
        var printwindow = window.open("");
        printwindow.document.write("<!DOCTYPE html><html><head><title>Generated exam (examgenerator.tk)</title><style>body{font:15px Arial;}</style></head></html>")
        for (var x = 0; x < numberOfQuestions; x++)
        {
            printwindow.document.write(input[x] + "<br>");
        }
        printwindow.document.writeln("<br>Created using examgenerator.tk");
    }
}
function enteredWords() { //entered words counter
    var enteredString = document.getElementById("input").value;
    var questionsEntered = new Array();
    questionsEntered = enteredString.split("\n");
    var length = questionsEntered.length;
    for (x in questionsEntered)
    {
        if (questionsEntered[x].trim() == "")
        {
            length -= 1;       
        }
    }
    txt = document.createTextNode(length);
    document.getElementById("entered").innerText = txt.textContent;
    if (questionsEntered[0] == '')
    {
        txt = document.createTextNode("0");
        document.getElementById("entered").innerText = txt.textContent;
    }
    }
function cleario() {
    document.getElementById("input").value = "";
    document.getElementById("output").value = "";
}
