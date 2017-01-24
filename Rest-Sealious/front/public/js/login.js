function zaloguj() {
    var log = document.getElementById("username").value;
    var pas = document.getElementById("password").value;
    post("http://localhost:1337/api/v1/sessions",{username:log, password:pas});
    window.location ="index.html";
    document.cookie = "username="+log+";";
}

function register() {
    var log = document.getElementById("username").value;
    var pas = document.getElementById("password").value;
    // post("http://localhost:1337/api/v1/users",
    // {username:log, password:pas, role:"client"});
    $.post("http://localhost:1337/api/v1/users", {username:log, password:pas, role:"client"},
           function(data, responseCode){
               $("div").remove(".response");
               var iDiv = document.createElement('div');
               iDiv.id = 'response';
               iDiv.className = 'response';
               var text = document.createTextNode("Successfully created user " + log);
               iDiv.appendChild(text);
               document.body.appendChild(iDiv);
               console.log(data);
               console.log(responseCode);
           })
        .fail(function (idklol){
            $("div").remove(".response");
            var iDiv = document.createElement('div');
            iDiv.id = 'response';
            iDiv.className = 'response';
            var text = document.createTextNode("Error " + idklol);
            iDiv.appendChild(text);
            document.body.appendChild(iDiv);
        })
}

function post(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
        }
    }
    document.body.appendChild(form);
    form.submit();

}
