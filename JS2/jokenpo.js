var  jogo  =  {
    papel : 1 ,
    pedra : 2 ,
    tesoura : 3
    
}

function  mao_comp ( computador ) {
    if ( computador  ==  jogo . papel ) {
        consola . log ( "Computador jogou papel" , computador ) ;
    } 
    if ( computador  ==  jogo .pedra ) { _
        consola . log ( "Computador jogou pedra" , computador ) ;
    }
    if ( computador  ==  jogo . tesoura ) {
        consola . log ( "Computador jogou tesoura" , computador ) ;
    }
}

function  mao_jog ( jogador ) {
    if ( jogador  ==  jogo . papel ) {
        consola . log ( "Você jogou papel" , jogador ) ;
    } 
    if ( jogador  ==  jogo . pedra ) {
        consola . log ( "Você jogou pedra" , jogador ) ;
    }
    if ( jogador  ==  jogo . tesoura ) {
        consola . log ( "Você jogou tesoura" , jogador ) ;
    }
}

var  jogada  =  true
var  pontuacao  =  0

while ( jogada  ==  true ) {

    consola . log ( 'Escola sua jogada \n1 - papel \n2 - pedra \n3 - tesoura' ) ;
    var  jogador  =  parseInt ( prompt ( 'Sua jogada' ) )
    mao_jog ( jogador ) ;

    if ( isNaN ( jogador )  ||  ( jogador  <  1  ||  jogador  >  3 ) ) {
        consola . log ( 'Voce perdeu' ) ;
        jogada  =  false ;
    } else  {
        var  computador  =  Math . andar ( Math . random ( )  *  ( 3  -  1  +  1 )  +  1 ) ;  //Computadores
      
        mao_comp ( computador ) ;
        if ( computador  ===  jogador ) {
            consola . log ( "Empatou" ) ;
        }
        if ( computador  ==  jogo . papel  &&  jogador  ==  jogo . pedra ) {
            consola . log ( "Você perdeu! A sua avaliação foi" , pontuaçãocao ) ;
            jogada  =  false ;
            pontuação  =  0 ;
        }
        if ( computador  ==  jogo . pedra  &&  jogador  ==  jogo . tesoura ) {
            consola . log ( "Você perdeu! A sua avaliação foi" , pontuaçãocao ) ;
            jogada  =  false ;
            pontuação  =  0 ;
        }
        if ( computador  ==  jogo . tesoura  &&  jogador  ==  jogo . papel ) {
            consola . log ( "Você perdeu! A sua avaliação foi" , pontuaçãocao ) ;
            jogada  =  false ;
            pontuação  =  0 ;            
        }
        if ( jogador  ==  jogo . papel  &&  computador  ==  jogo . pedra ) {
            consola . log ( "Você Ganhou!" ) ;
            pontuação ++ ;
        }
        if ( jogador  ==  jogo . pedra  &&  computador  ==  jogo . tesoura ) {
            consola . log ( "Você Ganhou" ) ;
            pontuação ++ ;
        }
        if ( jogador  ==  jogo . tesoura  &&  computador  ==  jogo . papel ) {
            consola . log ( "Você Ganhou" ) ;
            pontuação ++ ;      
        }
    } 
}