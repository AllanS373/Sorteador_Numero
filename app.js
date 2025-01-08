function sortear () {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let resultado = document.getElementById('resultado');
    //Lista de números sorteados.
    let sorteados = []; 
    let numero;
    if (de >= ate) {
        resultado.innerHTML = `<label class="texto__paragrafo">'Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!'</label>`;
        document.getElementById('de').value = '';
        return;
    } else if(quantidade > ((ate - de) + 1)) {
        resultado.innerHTML = `<label class="texto__paragrafo">'Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!'</label>`;
        document.getElementById('quantidade').value = '';
    }else{
    //Loop para gerar a quantidade de números informados.
        for (i = 0; i < quantidade; i++){
            numero = gerarNumerosSorteados(de, ate);

            while (sorteados.includes(numero)) {
                numero = gerarNumerosSorteados(de, ate);
            }
            sorteados.push(numero);
        }
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
        alterarStatusBotao();
    }
}

//Função para gerar números aletórios dentro dos parâmetros informados.
function gerarNumerosSorteados(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
   alterarStatusBotao();
}