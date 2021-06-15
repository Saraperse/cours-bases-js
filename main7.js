


var joueur1 = {
    nom: "Toto",
    age: 45,
    estUnHomme: true
}


var joueur2 = {
    nom: "Matt",
    age: 46,
    estUnHomme: true

}

var joueur3 = {
    nom: "Tata",
    age: 18,
    estUnHomme: false

}

var lesJoueurs = [joueur1, joueur2, joueur3];



afficherLeJoueurLePlusAge(lesJoueurs[2]);

function afficherLeJoueurLePlusAge(){
    var joueurlePlusAge = lesJoueurs[0];
    for ( var i = 1; i < lesJoueurs.length; i++){
        if (joueurlePlusAge.age < lesJoueurs[i].age){
            joueurlePlusAge = lesJoueurs[i];
        }

    }
    console.log("Le joueur le plus age est " + joueurlePlusAge.nom);
}
