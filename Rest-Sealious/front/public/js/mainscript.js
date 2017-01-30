window.onload = iflogged;
function iflogged(){
    if(document.cookie)
    {
        document.getElementById("loglink").innerHTML = "<a href=\"javascript:wyloguj()\" id=\"logout\"> Wyloguj</a>";
        if(document.cookie == "username=admin")
        {
            var iDiv = document.createElement('li');
            iDiv.id='adminPanel';
            iDiv.innerHTML = "<a href=\"add-book.html\" id=\"logout\"> Dodaj Książkę</a>";
            $("#bs-example-navbar-collapse-1 > ul").append(iDiv);
        }
    }

}

function wyloguj(){
    document.cookie += "; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    window.location = "../index.html";
    alert("Nastąpiło wylogowanie");
}
