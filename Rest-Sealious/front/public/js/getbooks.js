function getbooks() {
    $.get("http://localhost:1337/api/v1/collections/books",
           function(data, responseCode){
               var text = document.createTextNode("Books shown, ");
               iDiv.appendChild(text);
               document.body.appendChild(iDiv);
           })
        .fail(function (idklol){
            $("#response").remove();
            var iDiv = document.createElement('p');
            iDiv.id = 'response';
            iDiv.className = 'bg-danger';
            console.log(idklol)
            var text = document.createTextNode("Error: No books to show." );
            iDiv.appendChild(text);
            document.body.appendChild(iDiv);
        })
}
