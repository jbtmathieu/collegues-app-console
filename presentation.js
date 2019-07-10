var service = require('./service.js');


function start(){
    var readline = require('readline');

    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    var sortie = false;

    function menu(){
    console.log ('1. Rechercher un collègue par nom');
    console.log ('2. Créer un collègue');
    console.log ('3. Modifier l\'email');
    console.log ('4. modifier la photo');
    console.log ('5. Rechercher un collègue par matricule');
    console.log('99. Sortir');
    rl.question('Votre choix : ', function(saisie) {
        console.log(`Vous avez saisi : ${saisie}`);
        console.log(saisie);
        switch (saisie) {
            case '1':
                //console.log('>> Recherche en cours du nom'+ saisie); 
                rl.question('Veuillez Entrer un nom pour la recherche : ', function(nom) {
                    service.searchByName(nom, function (collegues){
                        console.log(collegues);
                    });

                });
                rl.question('Taper une touche pour poursuivre.', function (){
                    break;
                });

            case '2':
                    //rl.question('Veuillez Entrer un nom pour la recherche : ', function(nom) {

                break;
            case '3':

                break;
            case '4':

                break;
                
            case '5':
                        rl.question('Veuillez Entrer un matricule : ', function(matricule) {
                            service.searchByMatricule(matricule, function (collegues){
                                //console.log(collegues);
                                console.log('Affichage complet :');
                                console.log(collegues);

                                console.log('-------------------');
                                console.log('Iteration les attributs dans une boucle :');
                                for (var property in collegues){
                                    
                                    console.log(property+' : '+collegues[property]);
                                } 

                                //collegues.forEach(function() {
                                  //  for (var property in collegues){
                                        //console.log(property.nom);
                                        //console.log(collegues.matricule);
                                        //console.log(property);
                                   // } 
                       //     }); 
                            });
                        });
                    break;
                
            case '99': 
                sortie = true;
                rl.close();
// attention, une fois l'interface fermée, la saisie n'est plus possible
                break;
            default:
                console.log('Choix Incorrect.');
                menu();

            }
        });
    }

    menu();
}   

exports.start = start;

