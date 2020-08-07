console.log(Math.ceil(6.1))//return 7

const obj1= {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2'
console.log(obj1.nome)//return Bola

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('exec...')
    }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec()