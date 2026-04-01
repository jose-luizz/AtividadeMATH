function calcular() {
    const preco = parseFloat(document.getElementById('preco').value);
    const desconto = parseFloat(document.getElementById('desconto').value);
    const taxaPorcentagem = parseFloat(document.getElementById('taxa').value);

    const ValorDesconto = preco - desconto;
    const valorTaxa = ValorDesconto * (taxaPorcentagem/100);
    const lucroLiquido = ValorDesconto - valorTaxa;

    const lucroArredondado = Math.ceil(lucroLiquido);

    // fiz uma variável para poder transformar a cor do valor "printado" na tela
    const lucroHTML = document.getElementById('out-lucro');

    if (lucroArredondado < 50) {
        lucroHTML.style.color = "red";
    } else {
        lucroHTML.style.color = "green";
    }

    document.getElementById('out-taxa').innerText = "R$" + valorTaxa.toFixed(2);
    document.getElementById('out-lucro').innerText = "R$" + lucroArredondado.toFixed(2);
    document.getElementById('out-desconto').innerText = "R$" + ValorDesconto.toFixed(2);
    document.getElementById('resultado').classList.remove('hidden');
                
}