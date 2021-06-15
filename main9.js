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

var lesJoueurs = [joueur1, joueur2, joueur3, joueur4];





ajoutJoueur();


function ajoutJoueur() {
    var joueur5 = {
        nom: "Nadia",
        age: 18,
        estUnHommme: false
    }
    lesJoueurs.push(joueur5);
}