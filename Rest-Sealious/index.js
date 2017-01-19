const Sealious = require("sealious");

var App = new Sealious.App();

require("./lib/field-types/role.js")(App);
require("./lib/access-strategy/roles.js")(App);
require("./lib/collections/users.js")(App);
require("./routes.js")(App);

App.createCollection({
    name: "books",
    fields: [
        {name: "title", type: "text", required: true},
        {name: "author", type: "text", required: true},
        {name: "description", type: "html", required: false},
        {name: "table_of_contents", type: "html", required: false},
        {name: "cover", type: "file", required: false},
        {name: "price", type: "float", required: true},
        {name: "is_available", type: "boolean", required: true},
        {name: "ebook", type: "file"},
        {name: "audiobook", type: "file"},
    ],
    access_strategy: {
        default: ["roles", ["admin"]],
        retrieve: "public",
        delete: "noone"
    }
});

App.createCollection({
    name: "order",
    fields: [
        {name: "book", type: "single_reference", required: true},
        {name: "price", type: "float", required: true},
        {name: "finalized", type: "boolean", required: true},
    ],
    access_strategy: {
        create: "logged_in",
        default: "owner"
    }
});

App.start().then(function(){
    App.run_action(
        new App.Sealious.SuperContext(),
        ["collections", "users"],
        "create",
        {username: "admin", password: "admin", role: "admin"}
    )
        .catch(function(error){
            console.error(error);
        });
});
