// -- Déclarer un tableau numérique
var Prenoms = ["Hugo", "David", "Farid", "Justine", "Khalid"];

// -- Aperçu dans la console
console.log(Prenoms);

// -- Si je veux connaître le nombre d'éléments (prénoms) ddans mon tableau
let nombreElementsDansMonTableau = Prenoms.length;
console.log(nombreElementsDansMonTableau);

// -- Pour récupérer une valeur dans le tableau numérique j'utilise son indice. (index)
console.log( Prenoms[1] ) ; // Davis
console.log( Prenoms[2] ) ; // Farid
console.log( Prenoms[3] ) ; // Justine

let i = 2;
console.log ( Prenoms[i] ) ; // Farid

// -- Pour i = 0 (Au départ i vaut 0) ; tant que i < (est strictement inférieur) à nombreElementsDansMonTableau (Prenoms.length) ; alors i++,  (j'incrémente i de 1)
for (let i = 0 ; i< nombreElementsDansMonTableau ; i++ ) {

    // -- Tous ce qui est situé à l'intérieur des accolades, sera dans la boucle.
    console.log( 'Ici, i = ' + i);
    console.log ( Prenoms[i] );
    console.log ('---');
} // Fin de la boucle for


/**/ 

/*   Astuce pour afficher le tableau bcp plus vite (en faisant lire par la fin du tableau et remontant)
 * 
 * for ( let i = nombreElementsDansMonTableau ; i-- ;) { } 
 * */




// -- Voyons maintenant, comment procéder avec des objets

const Contact = {
    // Indice : VALEUR
    prenom : "Hugo",
    nom : "LIEGEARD",
    tel : "0707070707"
};

// Aperçu dans la console
console.log( Contact );

// Pour récupérer les valeurs d'un objet, j'utilise le "." suivi de l'INDICE
console.log( 'Prénom : ' + Contact.prenom );
console.log( 'Nom : ' + Contact.nom );
console.log( 'Numéro de téléphone : ' + Contact.tel );
// Autre posibilité 
console.log( 'Numéro de téléphone : ' + Contact['tel'] );



const Contacts = [
    "Zita",
    "Hugo",
    {
        // Indice : VALEUR
        prenom : "Ivan",
        nom : "BRAGA",
        tel : "8080808080",
        age : 18
    },
    {
        // Indice : VALEUR
        prenom : "Bruno",
        nom : "COUGNY",
        tel : "0102030405",
        age : 47
    }
];

// -- Afficher dans la console
console.clear();
console.log(Contacts);


// -- Comment accéder aux valeurs de mon objet, dans le tableau numérique.

    // -- 1. D'abord, je récupère mon objet
    console.log( Contacts[2] ); 

    // -- 2. Pour accéder aux valeurs de mon objet
    console.log( "Prenom : " + Contacts[2].prenom);
    console.log( "Nom : " + Contacts[2].nom);
    console.log( "Age : " + Contacts[2].age);

    // En résumé j'accède à la valeur de l'indice "prenom" de l'objet situé à l'index 2 de mon tableau numérique "Contacts".



// Comment parcourir un tableau avec des objets.
    // -- Partons du tableau suivant :

    console.clear();

    const Etudiants = 
    [
        {prenom: "Hugo", nom: "LIEGEARD", competence: "Fullstack"},
        {prenom: "David", nom: "GUERRA", competence: "Front"},
        {prenom: "Kamel", nom: "KAMAN", competence: "Back"},
        {prenom: "Zita", nom: "NGUYEN", competence: "Fullstack"},
        {prenom: "Thomas", nom: "CHEYLAS", competence: "Front"},
        {prenom: "Asam", nom: "Ahmad", competence: "Front"},
    ];

    // -- Aperçu dans la console
    console.log(Etudiants);

    // Si je veux connaître le nombre d'étudiants
    const nombreEtudiants = Etudiants.length;
    console.log("Nombre d'étudiants = " + nombreEtudiants);

    /* ------------------------------------------------------
    |       ~ ~ ~ ~    💀  EXERCICE 😜     ~ ~ ~ ~          |
    |                                                        |
    |  Affichez dans la page HTML à l'aide de jQuery la      | 
    |  liste (ul>li) des Etudiants et leur classe.           | 
    |_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _  */


    $(document).ready(function () {
        $(document.body).append('<ul class="list-group">')
        for (i = 0; i < nombreEtudiants; i++) {
            $(document.body).append('<li class="list-group-item text-center">' + " <div class=' btn-secondary'> Prénom : </div> " + Etudiants[i].prenom + '<br>' +"<div class=' btn-dark'> Nom : </div> " + Etudiants[i].nom + '<br>' + " <div class=' btn-secondary'>  Compétence : </div> " + '<i>' + Etudiants[i].competence + '</i>'  + '</li><br>')
        }
        $(document.body).append('</ul>')
    });


    // Correction

    $(function() {
        // ici, Jquerry est prêt à travailler !
        // Création d'une balise ul li
        const ul = $('<ul class="list-group">');

        for (let i = 0 ; i < nombreEtudiants ; i++) {

            // Je récupère l'étudiant en cours dans ma boucle
            let Etudiant = Etudiants[i];

            // Voyons ce que ça donne
            console.log( Etudiant);

            $(`
                <li>
                    <strong> ${Etudiant.prenom} ${Etudiant.nom} </strong>
                    : ${Etudiant.competence}
                </li>
                
            `).appendTo ( ul );
        } // Fin de la For

        ul.appendTo($ ('body'));
    }
    );




    


    
    

    







