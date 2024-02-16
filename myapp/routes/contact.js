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

Contactrouter.get('/add', function(req,res,next){
    res.render('add_contact.twig',{title: "Add Contact"});
})

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

    Contactrouter.get('/:id', function(req, res, next) {
        Contact.findById(req.params.id, (err, contact) => {
            if (err) console.log("error message :  " + err);
            else {
                console.log(contact);
                res.render('contact_detail.twig', { title: "Contact Detail", contact: contact });
            }
        });
    });

    Contactrouter.delete('/:id', function(req, res, next) {
        Contact.findByIdAndRemove(req.params.id, (err, contact) => {
            if (err) console.log("error message :  " + err);
            else {
                console.log("Contact removed:", contact);
                res.json("Contact removed");
            }
        });
    });

    Contactrouter.put('/:id', function(req, res, next) {
        Contact.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, contact) => {
            if (err) console.log("error message :  " + err);
            else {
                console.log("Updated contact:", contact);
                res.json("Contact updated");
            }
        });
    });
    
    
    