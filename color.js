function change_color() {
    //Maximum 6 digit Hexadecimal digit is 16777215
    var randomColor = Math.floor(Math.random()*16777216).toString(16);
    document.getElementById("only_div").style.backgroundColor = "#" + randomColor;
}
