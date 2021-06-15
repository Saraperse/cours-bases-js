//constante


var nomDuJoueur1 = "toto";
var ageDuJoueur1 = 28;
var estUnHommeJoueur1 = true;

var nomDuJoueur2 = "tata";
var ageDuJoueur2 = 25;
var estUnHommeJoueur2 = false;
const SEP= "£"




afficherStar(SEP);

console.log("Nome du joueur 1 : " +  nomDuJoueur1 );
console.log("age du joueur 1 : " + ageDuJoueur1  );
if (estUnHommeJoueur1 === true){
    console.log("le joueur 1 est un homme" ); 
}else {
    console.log("Le joueur 1 est une femme");


}

afficherStar(SEP);


console.log("Nome du joueur 2 : " +  nomDuJoueur2 );
console.log("age du joueur 2 : " + ageDuJoueur2  );
if (estUnHommeJoueur2 === true){
    console.log("le joueur 2 est un homme" ); 
}else {
    console.log("le joueur 2 est une femme");
};

afficherStar(SEP);
function afficherStar(separateur){
    var star = "";
    for(var i = 0; i <= 22; i= i+1){
        star = star + separateur;
       
    } console.log(star);
   
}