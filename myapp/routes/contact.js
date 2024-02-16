var express = require('express');
var Contactrouter = express.Router();
var Contact = require('../mongodb/models/contact');

/* GET home page. */
Contactrouter.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = Contactrouter;
// Créer le nouveau fichier des routes associées au modèle contact sous « routes/contacts.js » et l’ajouter dans app.js 10.On a besoin de mettre à jour le fichier contacts.js pour ajouter (via POST) et de lire (via GET) les données(data) à partir de la collection Mongo. 9.1. Ajouter la requête GET avec le path (/contacts/) pour afficher la liste de tous les contacts 

Contactrouter.get('/get', function(req, res, next) {
  Contact.find(
    (err , contacts) => {
        res.render(
            'form.twig',
            {title: 'Contact List', cont: contacts
        }
        );
        }
    );
    });

Contactrouter.post('/post', function(req, res, next) {
    new Contact(
        {
            FullName: req.body.FullName,
            Phone: req.body.Phone
        }
    )
    .save((err, newcontact) => {
        if(err)
        console.log('error');
        else{
            console.log(newcontact);
            res.json(" : Contact added successfully")
        }
    });
    });