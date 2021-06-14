// variables

var nomDuJoueur1 = "toto";
var ageDuJoueur1 = 28;
var estUnHommeJoueur1 = ;

var nomDuJoueur2 = "tata";
var ageDuJoueur2 = 25;
var estUnHommeJoueur2 = false;




//main


console.log("Nome du joueur 1 : " +  nomDuJoueur1 );
console.log("age du joueur 1 : " + ageDuJoueur1  );
if (estUnHommeJoueur1 === true){
    console.log("le joueur 1 est un homme" ); 
}else {
    console.log("Le joueur 1 est une femme");


};


console.log("--------------------------------")


console.log("Nome du joueur 2 : " +  nomDuJoueur2 );
console.log("age du joueur 2 : " + ageDuJoueur2  );
if (estUnHommeJoueur2 === true){
    console.log("le joueur 2 est un homme" ); 
}else {
    console.log("le joueur 2 est une femme");
};
console.log("-----------------------------")


// // %s 
// console.log("%s est le nome du joueur 2 . " , nomDuJoueur2 );


// // %d 
// console.log("%d est l'age du joueur 2 . ", ageDuJoueur2  );




// afficherLesJoueurs();
// afficherLesJoueurs();
// afficherLesJoueurs();
// function afficherLesJoueurs(){

  
//     console.log("Nome du joueur 1 : " +  nomDuJoueur1 );
// console.log("age du joueur 1 : " + ageDuJoueur1  );
// if (estUnHommeJoueur1){
//     console.log("le joueur 1 est un homme" ); 
// }else {
//     console.log("Le joueur 1 est une femme");


// };



// console.log("Nome du joueur 2 : " +  nomDuJoueur2 );
// console.log("age du joueur 2 : " + ageDuJoueur2  );
// if (estUnHommeJoueur2){
//     console.log("le joueur 2 est un homme" ); 
// }else {
//     console.log("le joueur 2 est une femme");
// };
// console.log("-----------------------------")
// }

// comparerAgeDesDeuxJoueur();

// function comparerAgeDesDeuxJoueur(){
//     if ( ageDuJoueur1 > ageDuJoueur2){
//         console.log("le joueur 1 est le plus age");
//     }else if (ageDuJoueur2 > ageDuJoueur1)
//     {
//         console.log("le joueur 2 est le plus age");
//     }else{ 
//         console.log("Les joueurs ont le meme age");
//     }
// };

// AfficherLeGenre();
// function AfficherLeGenre(){

//     if (estUnHommeJoueur1){
//         console.log("le joueur 1 est un homme" ); 
//     }else {
//         console.log("Le joueur 1 est une femme");
    
    
//     };
// }


console.log( estUnHommeJoueur1 ? "Le joueur est un homme" : "Le joueur est une femme");
