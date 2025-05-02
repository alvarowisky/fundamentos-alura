//Parametros ou argumentos
// Retorno

function exibirInfosNomeEstudante(nome, nota) {
    return `O nome é ${nome} e a nota é ${nota}`;
}

console.log(exibirInfosNomeEstudante('Caroline', 10));
console.log(exibirInfosNomeEstudante('Ana', 7));

//hoisting
// O hoisting é um comportamento do JavaScript onde as declarações de variáveis e funções são movidas para o topo do seu escopo antes da execução do código. Isso significa que você pode chamar uma função antes de declará-la no código, e ela ainda funcionará corretamente.