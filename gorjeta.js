function formatacaoValor(valor) { /* Função criada para adicionar "R$" antes do valor e deixar apenas duas casas decimais. */
    valor = valor.toFixed(2);
    return "R$" + valor
}

function gorjeta() {
    
    let conta = document.getElementById("suaConta").value;
    let porcentagemGorjeta = document.getElementById("campoGorjeta").value;
    let divisaoPessoas = document.getElementById("divisaoPessoas").value;
    
    document.getElementById("porcentagemGorjeta").textContent = porcentagemGorjeta + "%";
    document.getElementById("quantidadePessoas").textContent = divisaoPessoas;

    let valorGorjeta = conta * (porcentagemGorjeta / 100);
    let totalComGorjeta = Number(conta) + valorGorjeta;
    let cadaPessoa = totalComGorjeta / divisaoPessoas;
    let gorjetaPessoa = valorGorjeta / divisaoPessoas;
    
    document.getElementById("valorGorjeta").textContent = formatacaoValor(valorGorjeta);
    document.getElementById("totalComGorjeta").textContent = formatacaoValor(totalComGorjeta);
    document.getElementById("cadaPessoa").textContent = formatacaoValor(cadaPessoa);
    document.getElementById("gorjetaPessoa").textContent = formatacaoValor(gorjetaPessoa);
}