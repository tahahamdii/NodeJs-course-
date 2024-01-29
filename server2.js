if (page == '/') {
    res.write('Vous êtes à l\'accueil');
}
else if (page == '/contact') {
    res.write('Vous êtes dans la page de contact');
}
else if (page == '/Affichage/1/user') {
    res.write('Afficher le user 1');
}
else if (page == '*')   {
    res.write('Erreur 404');
}

if ('id' in params && 'login' in params) {
    res.write('Votre id est ' + params['id'] + ' et votre login est ' + params['login']);
}
else {
    res.write('Veuiller saisir un id et un login');
}
