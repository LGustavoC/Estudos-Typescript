// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 23;
const avaliacao: number = 4.5;

//String
const nome: string = 'Gustavo';

// Array
const idades: number[] = [23, 45, 98];
const idades2: Array<number> = [56, 23, 78, 96];

// Tuple
let jogadores: [string, string, string];
jogadores = ['Guga', 'Alguem', 'Outro Alguem'];

// Enum
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

// Any
const retornoDaAPI: any[] = [123, 'Guga', false];
const retornoDaAPI2: any = {
    // ......
};

// Void
function printarNaTela(msg: string): void {
    console.log(msg);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

// Object
function criar(objeto: object) {
    // ...
}
criar({
    propriedade: 1
})
// criar('Guga') // Dá erro

// Never
function loopInfinito(): never {
    while (true) { }
}

function erro(mensagem: string): never {
    throw new Error(mensagem);
}

function falha() {
    return erro('Algo falhou');
}

// Union Types
const nota: string | number = 5;
function exibirNota(nota: number | string) {
    console.log(`A nota é ${nota}`);
}

exibirNota('10');
exibirNota(10);

// Alias
type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}
//type Funcionarios = Array<Funcionario>;
const funcionarios: Funcionario[] = [{
    nome: 'Guga',
    sobrenome: 'Cristo',
    dataNascimento: new Date()
}, {
    nome: 'Fulano',
    sobrenome: 'Onaluf',
    dataNascimento: new Date()
}];

function tratarFuncionarios(funcionarios: Funcionario[]) {
    for (let funcionario of funcionarios) {
        console.log(`Nome do funcionário: ${funcionario.nome}`);
    }
}
let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string;
}

const contato: Contato = {
    nome: 'Guga',
    telefone1: '12345678'
}

// Type Assertion
const minhaIdade: any = 20;
(minhaIdade as number).toString();
//(<number>minhaIdade).toString();

// const input = document.getElementById('numero1') as HTMLInputElement;
const input = <HTMLInputElement>document.getElementById('numero1');
console.log(input.value);