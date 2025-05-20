const soma = function (a, b){
   return a + b;
}
console.log(soma(3, -8));
const pessoa = {
    nome: "Lara",
    idade: 18,
    saudar: function(){
        return `Oi meu nome e ${this.nome} e eu tenho ${this.idade} de idade`
    }
}
console.log(pessoa.nome)
console.log(pessoa.saudar())