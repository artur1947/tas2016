window.onload = iflogged;
function iflogged(){
    if(document.cookie)
        document.getElementById("loglink").innerHTML = "<a href=\"javascript:wyloguj()\" id=\"logout\"> Wyloguj</a>";
}

function wyloguj(){
    document.cookie += "; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    window.location = "index.html";
    alert("Nastąpiło wylogowanie");
}
