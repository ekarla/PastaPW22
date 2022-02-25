var adicionar;
(function someFn(){
    var secret = 0; 
    adicionar = function(valor){
        secret += valor;
        return secret;
    }
}());

adicionar(1);
console.log('Primeira chamada', adicionar(3));
console.log('Segunda chamada', adicionar(1));
console.log('Terceira chamada', adicionar(5));