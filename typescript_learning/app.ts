//desafio 1
interface Funcionario {
    codigo: number | boolean,
    nome: string
}
let Fernanda: {codigo : number, nome: string} = {
    codigo: 32312,
    nome: 'Fernanda'
}
let Ana : Funcionario = {
    codigo: 32314,
    nome: 'Ana'
};
let Joao : Funcionario = {
    codigo: false,
    nome: 'Joao'
};
//desafio 2
enum Profissao {
    Professor,
    Policial
}
//pessoa é um tipo de tipagem
type Pessoa = {
    nome: string,
    idade: number,
    profissao: Profissao
}
//pessoa1 é o tipo de variavel(no caso objeto) Pessoa, e logo recebe o objeto com uma enum, lista de constantes de profissoes
let Roberta: Pessoa = {
    nome: 'Roberta',
    idade: 21,
    profissao: Profissao.Professor
};
let Fernando: Pessoa = {
    nome: 'maria',
    idade: 22,
    profissao: Profissao.Policial
};

//desafio 3

let botaoAtualizar = document.getElementById('atualizar-saldo')!;
let botaoLimpar = document.getElementById('limpar-saldo')!;
let calc = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');
let saldoTotal = 0;

limparSaldo();

function somarAoSaldo(soma:number) {
    if (campoSaldo) {
        saldoTotal += soma
        campoSaldo.innerHTML = saldoTotal.toString();
        calc.value = "";
    }
}

function limparSaldo() : void {
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
