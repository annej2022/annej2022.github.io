function promptFunction() {
    var Text = prompt("What is your favourite Sims 4 DLC?", "");
if (Text != null) {
    if (Text != "") {
        document.getElementById("TextString").innerHTML = "Your favourite DLC is " + Text + "! Awesome!";
    } else {
        document.getElementById("TextString").innerHTML = "You didn't share your favourite!!";
    }}
else {
        document.getElementById("TextString").innerHTML = "";
    }
}