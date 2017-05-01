function help1() {
    document.getElementById("tooltip").innerHTML = "You can enter one word (e. g. break), one phrase (e. g. go out) or a question (e. g. What's the weather like?). If the question doesn't fit to 1 line, grab the left bottom corner of the text fiel and widen it.";
}

function helplocalstorage() {
    document.getElementById("tooltip").innerHTML = "The save button will save set of questions you have entered to your browser&quot;s local storage. In the drop-down list, you can see all sets you've saved.";
}
function helpprint() {
    document.getElementById("tooltip").innerHTML = "If this option selected, version for printing will be opened in new tab. (If &quot;Ctrl + P&quot; / &quot;Cmd + P&quot; doesn't work as in my browser, try right-click and select Print."
}