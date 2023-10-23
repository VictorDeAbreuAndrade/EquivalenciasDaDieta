const catalogoAlimentos = {
    arroz: ['Arroz', 1.28],
    banana: ['Banana', 0.99],
    cappuccino: ['Cappuccino', 4.35],
    cuscuz: ['Cuscuz', 1.12],
    feijao: ['Feijão', 0.76],
    laranjaSuco: ['Laranja (Suco)', 0.42],
    leiteEmPo: ['Leite Em Pó', 4.88],
    leiteLiquido: ['Leite Líquido', 0.60],
    maca: ['Maçã', 0.52],
    macarrao: ['Macarrão', 1.31],
    pao: ['Pão', 2.65],
    pureDeBatata: ['Purê de Batata', 1.15],
    tapioca: ['Tapioca', 3.40],
    wheyProtein: ['Whey Protein', 4.17],
    getKeyFromValue: function (valor) {
        for (let key in catalogoAlimentos) {
            if (valor.includes(catalogoAlimentos[key][0])) {return key}
        }
    }
}

function alimentoSelecionado () {
    let listaAlimentosAdicionados = document.getElementById('alimentosSelecionados').textContent.replace('Alimentos Adicionados:', '')
    listaAlimentosAdicionados = listaAlimentosAdicionados.split(' edit delete')
    listaAlimentosAdicionados = listaAlimentosAdicionados.filter(n => n)
    let alimentoSelecionado = document.getElementById('alimentosSaida')
    let qtdeResultante = document.getElementById('qtdeResultante')
    let quantidadeTotalCalorias = 0

    // Este loop pega a lista de alimentos adicionados e calcula a quantidade total de calorias de todos juntos
    for (let i=0; i < listaAlimentosAdicionados.length; i++) {
        if (listaAlimentosAdicionados[i] == 'Alimentos Adicionados:') {continue}

        let quantidadeAlimento = Number(listaAlimentosAdicionados[i].split(' ')[0].replace('g', ''))
        let alimento = catalogoAlimentos[catalogoAlimentos.getKeyFromValue(listaAlimentosAdicionados[i])]

        if (alimento[0] == 'Arroz') {quantidadeTotalCalorias += alimento[1] * quantidadeAlimento}
        else if (alimento[0] == 'Banana') {quantidadeTotalCalorias += alimento[1] * quantidadeAlimento}
        else if (alimento[0] == 'Cuscuz') {quantidadeTotalCalorias += alimento[1] * quantidadeAlimento}
        else if (alimento[0] == 'Feijão') {quantidadeTotalCalorias += alimento[1] * quantidadeAlimento}
        else if (alimento[0] == 'Leite Em Pó') {quantidadeTotalCalorias += alimento[1] * quantidadeAlimento}
        else if (alimento[0] == 'Macarrão') {quantidadeTotalCalorias += alimento[1] * quantidadeAlimento}
        else if (alimento[0] == 'Pão') {quantidadeTotalCalorias += alimento[1] * quantidadeAlimento}
        else if (alimento[0] == 'Whey Protein') {quantidadeTotalCalorias += alimento[1] * quantidadeAlimento}
    }

    if (alimentoSelecionado.value == 'Arroz') {quantidadeAlimentoSelecionado = String(Math.round(quantidadeTotalCalorias/catalogoAlimentos.arroz[1])) + 'g'}
    else if (alimentoSelecionado.value == 'Cappuccino') {quantidadeAlimentoSelecionado = String(Math.round(quantidadeTotalCalorias/catalogoAlimentos.cappuccino[1])) + 'g'}
    else if (alimentoSelecionado.value == 'Cuscuz') {quantidadeAlimentoSelecionado = String(Math.round(quantidadeTotalCalorias/catalogoAlimentos.cuscuz[1])) + 'g'}
    else if (alimentoSelecionado.value == 'Feijão') {quantidadeAlimentoSelecionado = String(Math.round(quantidadeTotalCalorias/catalogoAlimentos.feijao[1])) + 'g'}
    else if (alimentoSelecionado.value == 'Laranja (Suco)') {quantidadeAlimentoSelecionado = String(Math.round(quantidadeTotalCalorias/catalogoAlimentos.feijao[1])) + 'ml'}
    else if (alimentoSelecionado.value == 'Leite Líquido') {quantidadeAlimentoSelecionado = String(Math.round(quantidadeTotalCalorias/catalogoAlimentos.leiteLiquido[1])) + 'ml'}
    else if (alimentoSelecionado.value == 'Leite Em Pó') {quantidadeAlimentoSelecionado = String(Math.round(quantidadeTotalCalorias/catalogoAlimentos.leiteEmPo[1])) + 'g'}
    else if (alimentoSelecionado.value == 'Maçã') {quantidadeAlimentoSelecionado = String(Math.round(quantidadeTotalCalorias/catalogoAlimentos.maca[1])) + 'g'}
    else if (alimentoSelecionado.value == 'Purê de Batata') {quantidadeAlimentoSelecionado = String(Math.round(quantidadeTotalCalorias/catalogoAlimentos.pureDeBatata[1])) + 'g'}
    else if (alimentoSelecionado.value == 'Tapioca') {quantidadeAlimentoSelecionado = String(Math.round(quantidadeTotalCalorias/catalogoAlimentos.tapioca[1])) + 'g'}

    qtdeResultante.textContent = quantidadeAlimentoSelecionado

}

function adicionaAlimento() {
    let tipoAlimento = document.getElementById('alimentosEntrada')
    let qtdeAlimentoEntrada = document.getElementById('qtde')
    let listaAlimentos = document.getElementById('alimentosSelecionados')


    if (tipoAlimento.value == 'Escolha um alimento' || qtdeAlimentoEntrada.value == '' || Number(qtdeAlimentoEntrada.value) == 0) {
        alert('Tipo ou quantidade de alimento não preenchido.')
    } else {
        listaAlimentos.innerHTML += `<li id="${tipoAlimento.value}">${qtdeAlimentoEntrada.value}g de ${tipoAlimento.value} <i class="material-icons" id="${tipoAlimento.value} Editar" onclick="editaAlimento('${tipoAlimento.value}')">edit</i> <i class="material-icons" id="${tipoAlimento.value} Excluir" onclick="excluiAlimento('${tipoAlimento.value}')">delete</i></li>`
        tipoAlimento.value = 'Escolha um alimento'
        qtdeAlimentoEntrada.value = ''
    }

}

function editaAlimento (item) {
    let itemEditar = document.getElementById(item + ' Editar').parentElement
    let tipoAlimento = document.getElementById('alimentosEntrada')
    let qtdeAlimentoEntrada = document.getElementById('qtde')
    
    qtdeAlimentoEntrada.value = itemEditar.innerText.split(' ')[0].replace('g', '')
    tipoAlimento.value = itemEditar.innerText.split(' ')[2]

    itemEditar.remove()
}

function excluiAlimento (item) {
    let itemExcluir = document.getElementById(item + ' Excluir').parentElement
    itemExcluir.remove()
}

function obtemCalorias(alimento) {
    alimento = alimento.split(' de ')
}

/*  AFAZERES

[X] Incluir quantidade de calorias maçã

[X] Limpar campo da quantidade após adicionar o alimento na lista

[X] Incluir ícone de editar e excluir alimento adicionado

[X] Após incluir os ícones de editar e excluir, a cálculo bugou. Ver como consertar isso.

[X] Fazer objeto com calorias dos alimentos

*/
