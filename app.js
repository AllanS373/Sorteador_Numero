function AlterarTextoNaTela(idDiv, texto){
    var div = document.getElementById(idDiv);
    if (div){
        var label = div.getElementsByTagName('label')[0];
        if (label) {
            label.textContent = texto;
        } else {
            console.error(`Label não encontrada na div com id: ${idDiv}`);
        }
    }else {
        console.error(`Div não encontrada com id: ${idDiv}`);
    }
}

function mensagemInical() {
    AlterarTextoNaTela('resultado', 'Números sorteados:  nenhum até agora')
}
mensagemInical();

function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let sorteados = [];
    let numeroSorteado;
    let possiblidades = ((ate - de) + 1);
    if(isNaN(quantidade) || isNaN(de) || isNaN(ate) || quantidade <= 0){
        AlterarTextoNaTela('resultado','Você precisa informar valores no campo para prosseguir!');
        return;
    }else {
        if(de >= ate){
            AlterarTextoNaTela('resultado','O número do campo "Do número" não pode ser superior ou igual ao campo "Até o número". Verificar!');
            return;
        }else if(quantidade > possiblidades) {
            AlterarTextoNaTela('resultado',`A quantide de números sorteados não pode ser maior que a quantidade de possiblidades que são ${possiblidades}.`);
            return;
        }else {
            for (i = 0; i < quantidade; i++){
                numeroSorteado = gerarNumeroSorteado(de, ate);
                while (sorteados.includes(numeroSorteado)) {
                    numeroSorteado = gerarNumeroSorteado(de, ate);
                }
                sorteados.push(numeroSorteado);
            }
        }
        AlterarTextoNaTela('resultado', sorteados);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
}

function gerarNumeroSorteado(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function limparCampo() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
}

function reiniciar() {
    limparCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    mensagemInical();
}