var {searchByName, 
    searchByMatricule,
    searchByMatriculeP } = require('./service.js');


function start(){
    var readline = require('readline');

    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl.setPrompt("Menu>")
    rl.prompt();
    console.log ();

    var sortie = false;

    function menu(){
    console.log ('1. Rechercher un collègue par nom');
    console.log ('2. Créer un collègue');
    console.log ('3. Modifier l\'email');
    console.log ('4. modifier la photo');
    console.log ('5. Rechercher un collègue par matricule');
    console.log ('6. Rechercher un collègue par matricule');
    console.log('99. Sortir');
    rl.question('Votre choix : ', function(saisie) {
        //console.log(`Vous avez saisi : ${saisie}`);
       // console.log(saisie);
        switch (saisie) {
            case '1':
                //console.log('>> Recherche en cours du nom'+ saisie); 
                rl.question('Veuillez Entrer un nom pour la recherche : ', function(nom) {
                    searchByName(nom, function (collegues){
                        console.log(collegues);
                    });

                });
                rl.question('Taper une touche pour poursuivre.', function (){ 
                });
                break;
            case '2':
                    //rl.question('Veuillez Entrer un nom pour la recherche : ', function(nom) {

                break;
            case '3':

                break;
            case '4':

                break;
                
            case '5':
                        rl.question('Veuillez Entrer un matricule : ', (matricule) => {
                            searchByMatricule(matricule, (collegues) => {
                                //console.log(collegues);
                                console.log('Affichage complet :');
                                console.log(collegues);

                                console.log('-------------------');
                                console.log('Iteration des attributs dans une boucle :');
                                for (const property in collegues){
                                    
                                    console.log(`${property} : ${collegues[property]}`);
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

                case '6':    
                rl.question('Veuillez Entrer un matricule : ', (matricule) => {
                    let result = searchByMatriculeP(matricule);
                    result.then (collegues => {
                        console.log('Affichage complet :');
                        console.log(result);

                        console.log('-------------------');
                        console.log('Iteration des attributs dans une boucle :');

                        for (const property in collegues){
                            console.log(`${property} : ${collegues[property]}`)
                    };
                    })
                    .catch(err => console.log(err));
                });
                break;
            case '99': 
                sortie = true;
                rl.close();
// attention, une fois l'interface fermée, la saisie n'est plus possible
                break;
            default:
                console.log('Choix Incorrect.');

            }
        });
    }
    menu();
}   

exports.start = start;

