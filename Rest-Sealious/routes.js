module.exports = function(App){
    const www_server = App.ChipManager.get_chip("channel", "www-server");

    www_server.custom_raw_route({
        method: ["GET", "POST"],
        path: "/{path*}",
        handler: function(request, reply){
            if (request.url.pathname=="/") {
	        reply.file("../front2/public/index.html");
            } else if (request.url.pathname=="/admin" || request.url.pathname=="/admin/") {
	        reply.file("./public/admin/index.html");
            } else {
	        reply.file("./public/"+request.url.pathname);
            }
        }
    });
};
