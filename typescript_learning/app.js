"use strict";
let Fernanda = {
    codigo: 32312,
    nome: 'Fernanda'
};
let Ana = {
    codigo: 32314,
    nome: 'Ana'
};
let Joao = {
    codigo: false,
    nome: 'Joao'
};
//desafio 2
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professor"] = 0] = "Professor";
    Profissao[Profissao["Policial"] = 1] = "Policial";
})(Profissao || (Profissao = {}));
//pessoa1 é o tipo de variavel(no caso objeto) Pessoa, e logo recebe o objeto com uma enum, lista de constantes de profissoes
let Roberta = {
    nome: 'Roberta',
    idade: 21,
    profissao: Profissao.Professor
};
let Fernando = {
    nome: 'maria',
    idade: 22,
    profissao: Profissao.Policial
};
//desafio 3
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let calc = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
let saldoTotal = 0;
limparSaldo();
function somarAoSaldo(soma) {
    if (campoSaldo) {
        saldoTotal += soma;
        campoSaldo.innerHTML = saldoTotal.toString();
        calc.value = "";
    }
}
function limparSaldo() {
    if (campoSaldo) {
        saldoTotal = 0;
        campoSaldo.innerHTML = ` ${saldoTotal.toString()} reais " `;
    }
}
botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(calc.value));
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
