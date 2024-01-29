var http = require("http");
var url = require("url");
var querystring = require("querystring");

var server = http.createServer(function (req, res) {
  var page = url.parse(req.url).pathname;
  console.log(page);

  res.writeHead(200, { "Content-Type": "text/html" });

  res.write(
    "<!DOCTYPE html>" +
      "<html>" +
      "<head>" +
      '<meta charset="utf-8" />' +
      "<title>Ma page Node.js !</title>" +
      "</head>" +
      "<body>" +
      "<p>Voici un paragraphe <strong>HTML</strong> !</p>"
  );

  var params = url.parse(req.url, true).query;

  if ("id" in params && "login" in params) {
    res.write(
      "Votre id est " + params["id"] + " et votre login est " + params["login"]
    );
  } else {
    res.write("Veuiller saisir un id et un login");
  }




  if (page == "/") {
    res.write("<p>Vous êtes à l'accueil</p>");
  } else if (page == "/contact") {
    res.write("<p>Vous êtes dans la page de contact</p>");
  } else if (page == "/Affichage/1/user") {
    res.write("<p>Afficher le user 1</p>");
  } else {
    res.write("<p>Erreur 404</p>");
  }
  

  res.write("</body>" + "</html>");

  res.end();
});

server.listen(8081);
