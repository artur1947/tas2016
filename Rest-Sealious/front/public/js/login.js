function zaloguj() {
    var log = document.getElementById("username").value;
    var pas = document.getElementById("password").value;
    $.post("http://localhost:1337/api/v1/sessions", {username:log, password:pas},
           function(data, responseCode){
               window.location.href ="index.html";
               document.cookie = "username="+log+";";
               var iDiv = document.createElement('p');
               iDiv.id = 'response';
               iDiv.className = 'bg-success';
               var text = document.createTextNode("Login successful, " + log);
               iDiv.appendChild(text);
               document.body.appendChild(iDiv);
           })
        .fail(function (idklol){
            $("#response").remove();
            var iDiv = document.createElement('p');
            iDiv.id = 'response';
            iDiv.className = 'bg-danger';
            console.log(idklol)
            var text = document.createTextNode("Error: wrong credentials." );
            iDiv.appendChild(text);
            document.body.appendChild(iDiv);
        })
    //post("http://localhost:1337/api/v1/sessions",{username:log, password:pas});
}

function register() {
    var log = document.getElementById("username").value;
    var pas = document.getElementById("password").value;
    $.post("http://localhost:1337/api/v1/users", {username:log, password:pas, role:"client"},
           function(data, responseCode){
               $("#response").remove();
               var iDiv = document.createElement('p');
               iDiv.id = 'response';
               iDiv.className = 'bg-success';
               var text = document.createTextNode("Successfully created user " + log);
               iDiv.appendChild(text);
               document.body.appendChild(iDiv);
               console.log(data);
               console.log(responseCode);
               $("#username").val('');
               $("#password").val('');
           })
        .fail(function (idklol){
            $("#response").remove();
            var iDiv = document.createElement('p');
            iDiv.id = 'response';
            iDiv.className = 'bg-danger';
            console.log(idklol);
            var text = document.createTextNode("Error: username already taken" );
            iDiv.appendChild(text);
            document.body.appendChild(iDiv);
            $("#username").val('');
            $("#password").val('');
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
