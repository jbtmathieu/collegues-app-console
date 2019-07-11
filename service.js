var request = require('request');
var { start } = require('./presentation.js');

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
    //start();
}

function rechercherColleguesParMatriculePromise(matricule) {

    return new Promise( (resolve, reject) => {
    request('https://collegues-api-jpa.herokuapp.com/collegues?matricule='+matricule, { json: true }, (err, res, body) =>{
        const tableauColleguesTrouves = body;
        //callback(tableauColleguesTrouves);
        if(err) {
            reject(`Collegue non trouvé : ${err}`); // en cas d'erreur
        } else {
            resolve(tableauColleguesTrouves); // en cas de succès
        }
    });

});

}

function creerCollegue(matricule, callback) {
    request('https://collegues-api-jpa.herokuapp.com/collegues?'+'', { json: true }, function(err, res, body) {
        var tableauColleguesTrouves = body;
        callback(tableauColleguesTrouves);
    });
}

exports.searchByName= rechercherColleguesParNom;
exports.searchByMatricule= rechercherColleguesParMatricule;
exports.searchByMatriculeP= rechercherColleguesParMatriculePromise;
exports.createCollab= creerCollegue;