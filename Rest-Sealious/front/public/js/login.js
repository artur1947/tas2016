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
        .fail(function (arg){
            $("#response").remove();
            var iDiv = document.createElement('p');
            iDiv.id = 'response';
            iDiv.className = 'bg-danger';
            var text = document.createTextNode("Error: wrong credentials." );
            iDiv.appendChild(text);
            document.body.appendChild(iDiv);
        });
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
        .fail(function (arg){
            $("#response").remove();
            var iDiv = document.createElement('p');
            iDiv.id = 'response';
            iDiv.className = 'bg-danger';
            var text = document.createTextNode("Error: username already taken" );
            iDiv.appendChild(text);
            document.body.appendChild(iDiv);
            $("#username").val('');
            $("#password").val('');
        });
}
