function carro(velocidadeMax = 200, delta = 5){
    //atributo privado: pertence apenas ao escopo dessa funcao
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMax ){
            velocidadeAtual += delta
        }else{  
            velocidadeAtual = velocidadeMax
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual 
    }
}

const uno = new carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())//return 5

const ferrari = new carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())//return 20, pois só acelerou 2x