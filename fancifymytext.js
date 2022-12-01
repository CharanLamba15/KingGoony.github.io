function sayHello()
{
    alert("Hello, world!");
}

function getBigger()
{   
    sayHello();
    document.getElementById("input").style.fontSize = "24pt";
}

function getFancyShmancy()
{
    if(document.getElementById("fancy").checked == true)
    {
        sayHello();
        document.getElementById("betty").checked = false;
        document.getElementById("input").style.color = "blue";
        document.getElementById("input").style.fontWeight = "bold";
        document.getElementById("input").style.textDecoration = "underline";
    }
}

function getBoringBetty()
{
    if(document.getElementById("betty").checked == true)
    {
        sayHello();
        document.getElementById("fancy").checked = false;
        document.getElementById("input").style.color = "black";
        document.getElementById("input").style.fontWeight = "normal";
        document.getElementById("input").style.textDecoration = "none";
    }
}

function getMoo()
{
    var text = document.getElementById("input").value;
    text = text.toUpperCase();
    var splitText = text.split(".");
    for(var i = 0; i < splitText.length; i++)
    {
        splitText[i] += "-Moo"
    }  
    document.getElementById("input").value = splitText.join("");       
}