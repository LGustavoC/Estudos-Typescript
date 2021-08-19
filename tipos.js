"use strict";
// Boolean
var contaPaga = false;
// Number
var idade = 23;
var avaliacao = 4.5;
//String
var nome = 'Gustavo';
// Array
var idades = [23, 45, 98];
var idades2 = [56, 23, 78, 96];
// Tuple
var jogadores;
jogadores = ['Guga', 'Alguem', 'Outro Alguem'];
// Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
// Any
var retornoDaAPI = [123, 'Guga', false];
var retornoDaAPI2 = {
// ......
};
// Void
function printarNaTela(msg) {
    console.log(msg);
}
// Null e Undefined
var u = undefined;
var n = null;
// Object
function criar(objeto) {
    // ...
}
criar({
    propriedade: 1
});
// criar('Guga') // Dá erro
// Never
function loopInfinito() {
    while (true) { }
}
function erro(mensagem) {
    throw new Error(mensagem);
}
function falha() {
    return erro('Algo falhou');
}
// Union Types
var nota = 5;
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
exibirNota('10');
exibirNota(10);
//type Funcionarios = Array<Funcionario>;
var funcionarios = [{
        nome: 'Guga',
        sobrenome: 'Cristo',
        dataNascimento: new Date()
    }, {
        nome: 'Fulano',
        sobrenome: 'Onaluf',
        dataNascimento: new Date()
    }];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log("Nome do funcion\u00E1rio: " + funcionario.nome);
    }
}
var altura = 1.6;
altura = null;
var contato = {
    nome: 'Guga',
    telefone1: '12345678'
};
// Type Assertion
var minhaIdade = 20;
minhaIdade.toString();
//(<number>minhaIdade).toString();
// const input = document.getElementById('numero1') as HTMLInputElement;
var input = document.getElementById('numero1');
console.log(input.value);
