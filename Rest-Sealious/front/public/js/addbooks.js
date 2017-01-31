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

function add_book() {
    var price = $("#price").val();
    var genre = $("#genre").val();
    var description = $("#description").val();
    var table = $("#table_of_contents").val();
    var available = $("#available").val();
    var author = $("#author").val();
    var title = $("#title").val();
    if(price === "" || author === "" || title === "" || available == ""
      || !(available == "T" || available == "N"))
    {
        alert("Podaj wszystkie potrzebne dane!!!");
        return;
    }
    if(isNaN(parseFloat(price))) {
        alert("Cena musi być liczbą!")
        return;
    }
    else {
        price = parseFloat(price);
    }
    if(available == "T") {
        available = "True";
    }
    else {
        available = "False";
    }
    var dataJson = {
        "price" : price,
        "genre" : genre,
        "description" : description,
        "table" : table,
        "is_available" : available,
        "author" : author,
        "title" : title,
    };
    $.each(dataJson, function(k,v){
        if(v === ""){
            delete dataJson[k];
        }
    });
    $.post("http://localhost:1337/api/v1/collections/books", dataJson,
           function(data, responseCode){
               $("#response").remove();
               var iDiv = document.createElement('p');
               iDiv.id = 'response';
               iDiv.className = 'bg-success';
               var text = document.createTextNode("Dodano książkę!");
               iDiv.appendChild(text);
               document.body.appendChild(iDiv);
           })
        .fail(function (arg){
            $("#response").remove();
            var iDiv = document.createElement('p');
            iDiv.id = 'response';
            iDiv.className = 'bg-danger';
            var text = document.createTextNode("Błąd dodawania książki: " + arg['responseJSON']['message']);
            iDiv.appendChild(text);
            document.body.appendChild(iDiv);
        });

}
