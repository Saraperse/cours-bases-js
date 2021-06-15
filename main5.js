//return et calcul
var readline = require('readline-sync');



var joueur1 = {
    nom: "Toto",
    age: 16,
    estUnHomme: true
}


var joueur2 = {
    nom: "Matt",
    age: 26,
    estUnHomme: true

}

var joueur3 = {
    nom: "Tata",
    age: 18,
    estUnHomme: false

}



var joueur4 = {
    nom: "Papi",
    age: 18,
    estUnHomme: true

}

var lesJoueurs = [joueur1, joueur2, joueur3];
lesJoueurs.push(joueur4);



const SEP = "*"


console.log("------------------------------");


function calculMoyenneAge(){
    var addition = 0;
    for(i=0; i < lesJoueurs.length; i++){
        addition += lesJoueurs[i].age;
    }
    var moyenne = addition / lesJoueurs.length
    console.log("moyenne d'age des joueurs est de " + moyenne)
}





function afficherLesJoueurs(){

    for(i=0; i < lesJoueurs.length; i++){
        afficherUnjoueur(lesJoueurs[i]);
    }
    console.log("-----------------------------");
  }

function afficherUnjoueur(j){
   console.log("Nome du joueur  : " + j.nom);
    console.log("age du joueur  : " + j.age);
    // afficherUnGenre(j.estUnHomme);  
}


function afficherLeJoueurLePlusAge(){
    var lePlusAge = lesJoueurs[0];
    for ( var i = 1; i < lesJoueurs.length; i++){
        if (lePlusAge.age < lesJoueurs[i].age){
            lePlusAge = lesJoueurs[i];
        }

    }
    console.log("Le joueur le plus age est " + lePlusAge.nom);
}





// function afficherUnGenre(j){
//     if(j.estUnHomme){
//         console.log( "le joueur est un homme");
//      }else {
//          console.log( "le joueur est une femme");  
//      }
// }






do {
    afficherMenu();
    var choixMenu = saisieQuestionInt("Quel est votre choix ? ");

    switch (choixMenu) {

        case 1:
            afficherLesJoueurs();
            afficherStar(SEP)
            break;
        case 2:
            afficherLeJoueurLePlusAge();
            afficherStar(SEP);          

            break;
        case 3:
            afficherCalcul(lesJoueurs[1], lesJoueurs[0]);
            afficherStar(SEP);
            break;
            case 4:
                console.log("------------------")
                calculMoyenneAge();
            afficherStar(SEP);
            break;
        case 9:
            console.log("A bientot");
            break;
        default:
            console.log("cas non traité ! ");

    }

} while (choixMenu !== 9);

saisieQuestionInt();

function saisieQuestionInt(question) {
    return parseInt(readline.questionInt(question));


}


function afficherStar(separateur) {
    var star = "";
    for (var i = 0; i <= 22; i = i + 1) {
        star = star + separateur;

    }
    console.log(star);

}



function comparerAgeDesDeuxJoueur(premierJoueur, deuxiemeJoueur) {
    if (premierJoueur.age > deuxiemeJoueur.age) {
        console.log("le joueur le plus age est " + premierJoueur.nom);
    } else if (deuxiemeJoueur.age > premierJoueur.age) {
        console.log("le joueur le plus age est " + deuxiemeJoueur.nom);
    } else {
        console.log("Les joueurs ont le meme age");
    }
};


function calculDiffAge(premierJoueur, deuxiemeJoueur) {
    var diffAge = premierJoueur.age - deuxiemeJoueur.age;
    if (diffAge < 0) {
        diffAge = -diffAge;
    }

    return diffAge;
}

function afficherCalcul(premierJoueur,deuxiemeJoueur) {
    var p = calculDiffAge(premierJoueur, deuxiemeJoueur);
    console.log("La difference d'age entre les deux joueurs est de  " + p + " ans");
}


function afficherMenu() {
    var txtMenu = "";
    txtMenu += "1.afficher les joueurs\n";
    txtMenu += "2.afficher les deux joueurs\n";
    txtMenu += "3.calculer la difference d'age\n";
    txtMenu += "4.calculer la moyenne d'age des joueurs\n";
    txtMenu += "9.quitter";
    console.log(txtMenu);
}