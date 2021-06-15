//appel objet dans une fonction



AfficherLesGenres();

function AfficherLesGenres(){
    AfficherUnGenre(joueur2); 
    // AfficherUnGenre(joueur1); 
    
}

function AfficherUnGenre(j){
    if(j.estUnHomme){
        console.log( "le joueur est un homme");
     }else {
         console.log( "le joueur est une femme");  
     }
}



// function AfficherLeGenreJ1() {
//     if(joueur1.estUnHomme){
//        console.log( "le joueur est un homme");
//     }else {
//         console.log( "le joueur est une femme");  
//     }
// }


// function AfficherLeGenreJ2() {
//     if(joueur2.estUnHomme){
//        console.log( "le joueur est un homme");
//     }else {
//         console.log( "le joueur est une femme");  
//     }

// }