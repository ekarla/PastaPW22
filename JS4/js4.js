class IntergeSet {
    constructor (conj,tam) {
    this.conj = conj;
    this.tam = tam;
    for(var i =0; i< tam;i++){
    conj.push(false);
}
    }
    insere(valor){
        this.conj.push(valor);
        console.log(this.conj);
    }
    exclui(indice){
        this.conj.splice(indice,1);
        console.log(this.conj);
    }
    uniao(conjunto){
        this.conj = conj;
        for(var i=0; i<conjunto.length;i++){
          conj.push(conjunto[i]);  
        }
        console.log(this.conj);
    }
}


var conj = []


conjunto1 = new IntergeSet(conj,3);
conjunto2 = new IntergeSet(conj,3);
conjunto1.insere(3);
conjunto2.insere(2);


 
