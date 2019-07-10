var request = require('request');

function rechercherColleguesParNom(nomRecherche, callback) {
    request('https://collegues-api-jpa.herokuapp.com/collegues?name='+nomRecherche, { json: true }, function(err, res, body) {
     /*   if (!error && res.statusCode == 200) {
            result = JSON.stringify(JSON.parse(body));          
            return callback(result, false);
        } */
        var tableauColleguesTrouves = body; 
        callback(tableauColleguesTrouves);
    });
}

function rechercherColleguesParMatricule(matricule, callback) {
    request('https://collegues-api-jpa.herokuapp.com/collegues?matricule='+matricule, { json: true }, function(err, res, body) {
        var tableauColleguesTrouves = body;
        callback(tableauColleguesTrouves);
    });
}

function creerCollegue(matricule, callback) {
    request('https://collegues-api-jpa.herokuapp.com/collegues?matricule='+matricule, { json: true }, function(err, res, body) {
        var tableauColleguesTrouves = body;
        callback(tableauColleguesTrouves);
    });
}

exports.searchByName= rechercherColleguesParNom;
exports.searchByMatricule= rechercherColleguesParMatricule;
exports.createCollab= creerCollegue;