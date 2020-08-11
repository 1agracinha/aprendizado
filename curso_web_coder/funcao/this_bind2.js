function Pessoa(){
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}//Vai disparar essa funcao a cada 1000ms

new Pessoa

//Pode usar o bind ou criar uma constante para armazenar o this 
//no escopo desejado