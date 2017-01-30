window.onload=ifadmin;
function ifadmin(){
    if(document.cookie && document.cookie=="username=admin")
    {
        document.getElementById("loglink").innerHTML = "<a href=\"javascript:wyloguj()\" id=\"logout\"> Wyloguj</a>";
    }
    else
    {
        console.log(document.cookie);
        window.location.replace("https://thebest404pageever.com/");
    }

}
