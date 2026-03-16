function gorjeta() {
    
    let conta = document.getElementById("suaConta").value;
    let porcentagemGorjeta = document.getElementById("campoGorjeta").value;
    let divisaoPessoas =   document.getElementById("divisaoPessoas").value;

    document.getElementById("porcentagemGorjeta").textContent = porcentagemGorjeta + "%";
    document.getElementById("quantidadePessoas").textContent = divisaoPessoas;

    let valorGorjeta = conta * (porcentagemGorjeta / 100);
    let totalComGorjeta = Number(conta) + valorGorjeta;
    let cadaPessoa = totalComGorjeta / divisaoPessoas;

    document.getElementById("valorGorjeta").textContent = valorGorjeta;
    document.getElementById("totalComGorjeta").textContent = totalComGorjeta;
    document.getElementById("cadaPessoa").textContent = cadaPessoa;
}