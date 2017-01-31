function printBook(book) {
    var bookJson = {
        "title" : book['title'],
        "author" : book['author'],
        "genre" : book ['genre'],
        "description" : book['description'],
        "table" : book['table'],
        "cover" : book['cover'],
        "price" : book['price'],
        "is_available" : book['available'],
        "ebook" : book['ebook'],
        "audiobook" : book['audiobook'],
    };
    $.each(bookJson, function(k,v) {
        if(v === undefined) {
            delete bookJson[k];
        }
    });
    var oneBook = document.createElement('div');
    var caption = document.createElement('div');
    var bookImg = document.createElement('img');

    bookImg.src = "http://www.gemologyproject.com/wiki/images/5/5f/Placeholder.jpg";
    oneBook.appendChild(bookImg);

    oneBook.className = "thumbnail";

    //Add the price
    var price = document.createElement('h4');
    price.className = "pull-right";
    price.innerText = bookJson['price'] + 'zł';
    caption.appendChild(price);

    //Add the title
    var title = document.createElement('h4');
    title.innerText = bookJson['title'];
    caption.appendChild(title);

    //Add the description
    var desc = document.createElement('p');
    desc.innerText = book['description'];
    if(desc.innerText == "undefined") {
        desc.innerText = "<brak opisu>";
    }
    desc.appendChild(document.createElement('br'));
    desc.innerText += "Author: ";
    desc.appendChild(document.createElement('br'));
    desc.innerText += bookJson['author'];
    caption.appendChild(desc);

    //Add the book properly
    var theBook = document.createElement('div');
    theBook.className="col-sm-4 col-lg-4 col-md-4";
    oneBook.appendChild(caption);
    theBook.appendChild(oneBook);
    $("#wszystkieKsiazki").append(theBook);

}

function getbooks() {
    $.get("http://localhost:1337/api/v1/collections/books",
           function(data, responseCode){
               $.each(data, function(k, v) {
                   printBook(v['body']);
               });
               $("#wszystkieKsiazki > script").remove();
           })
        .fail(function (idklol){
            $("#response").remove();
            var iDiv = document.createElement('p');
            iDiv.id = 'response';
            iDiv.className = 'bg-danger';
            console.log(idklol)
            var text = document.createTextNode("Server error: " + idklol);
            iDiv.appendChild(text);
            document.body.appendChild(iDiv);
        })
}
