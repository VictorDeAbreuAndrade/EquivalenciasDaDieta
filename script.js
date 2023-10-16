

function alimentoSelecionado () {
    let alimentoSelecionado = document.getElementById('alimentosSaida').value
    let listaAlimentosAdicionados = document.getElementById('alimentosSelecionados').innerText
    listaAlimentosAdicionados = listaAlimentosAdicionados.split('\n')
    let qtdeResultante = document.getElementById('qtdeResultante')
    let quantidadeTotalCalorias = 0

    // Este loop pega a lista de alimentos adicionados e calcula a quantidade total de calorias de todos juntos
    for (let i=0; i < listaAlimentosAdicionados.length; i++) {
        let alimento = listaAlimentosAdicionados[i].split('g de ')
        if (alimento[1] == 'Cuscuz') {quantidadeTotalCalorias += 1.12 * Number(alimento[0])}
        else if (alimento[1] == 'Pão') {quantidadeTotalCalorias += 2.65 * Number(alimento[0])}
        else if (alimento[1] == 'Arroz') {quantidadeTotalCalorias += 1.28 * Number(alimento[0])}
        else if (alimento[1] == 'Feijão') {quantidadeTotalCalorias += 0.76 * Number(alimento[0])}
        else if (alimento[1] == 'Macarrão') {quantidadeTotalCalorias += 1.31 * Number(alimento[0])}
        else if (alimento[1] == 'Banana') {quantidadeTotalCalorias += 0.99 * Number(alimento[0])}
        else if (alimento[1] == 'Whey Protein') {quantidadeTotalCalorias += 4.17 * Number(alimento[0])}
    }

    if (alimentoSelecionado == 'Cuscuz') {quantidadeAlimentoSelecionado = String(Math.round(quantidadeTotalCalorias/1.12)) + 'g'}
    else if (alimentoSelecionado == 'Feijão') {quantidadeAlimentoSelecionado = String(Math.round(quantidadeTotalCalorias/0.76)) + 'g'}
    else if (alimentoSelecionado == 'Purê de Batata') {quantidadeAlimentoSelecionado = String(Math.round(quantidadeTotalCalorias/1.15)) + 'g'}
    else if (alimentoSelecionado == 'Tapioca') {quantidadeAlimentoSelecionado = String(Math.round(quantidadeTotalCalorias/3.40)) + 'g'}
    else if (alimentoSelecionado == 'Leite Líquido') {quantidadeAlimentoSelecionado = String(Math.round(quantidadeTotalCalorias/0.60)) + 'ml'}
    else if (alimentoSelecionado == 'Leite Em Pó') {quantidadeAlimentoSelecionado = String(Math.round(quantidadeTotalCalorias/4.88)) + 'g'}
    else if (alimentoSelecionado == 'Cappuccino') {quantidadeAlimentoSelecionado = String(Math.round(quantidadeTotalCalorias/4.35)) + 'g'}

    qtdeResultante.innerText = quantidadeAlimentoSelecionado

}

function adicionaAlimento() {
    let tipoAlimento = document.getElementById('alimentosEntrada').value
    let qtdeAlimentoEntrada = document.getElementById('qtde').value
    let listaAlimentos = document.getElementById('alimentosSelecionados')

    if (tipoAlimento == 'Escolha um alimento' || qtdeAlimentoEntrada == '' || qtdeAlimentoEntrada == '0') {
        alert('Tipo ou quantidade de alimento não preenchido.')
    } else if (listaAlimentos.innerHTML == 'Os alimentos adicionados aparecerão aqui...') {
        listaAlimentos.innerHTML = ''
        listaAlimentos.innerHTML += `<li>${qtdeAlimentoEntrada}g de ${tipoAlimento}</li>`
    } else {
        listaAlimentos.innerHTML += `<li>${qtdeAlimentoEntrada}g de ${tipoAlimento}</li>`
    }

}

function obtemCalorias(alimento) {
    alimento = alimento.split(' de ')
    


}
