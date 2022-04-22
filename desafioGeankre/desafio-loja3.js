let clienteLilit = [
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Cinto preto', valor: 22.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 30.0}]

let clienteSandra = [
    {produto: 'Camisa regata cinza', valor: 50.0}, 
    {produto: 'Short azul reto', valor: 90.0}, 
    {produto: 'Meia colorida', valor: 30.0}, 
    {produto: 'Saia branca', valor: 90.0}, 
    {produto: 'Moleton Roxo', valor: 150.0}]
        

let clienteMax = [
    {produto: 'Camiseta box logo', valor: 120.0}, 
    {produto: 'Boné aba reta', valor: 80.0}, 
    {produto: 'Sandalia slide branca', valor: 50.0}, 
    {produto: 'Macacao longo', valor: 200.0},
    {produto: 'Camiseta Oversized Hell', valor: 200.0},
    {produto: 'Moletom Tag', valor: 240.0}]

let clientes = [clienteLilit, clienteSandra, clienteMax]

function calcularDesconto(valor) {                                     //Função para calcular descontos
    if(valor>=50 && valor<80){
        return Number(valor * 0.05)
    }
    if(valor>=80 && valor<100){
        return Number(valor * 0.1)
    }
    if(valor>=100 && valor<200){
        return Number(valor * 0.2)
    }
    if(valor>=200){
        return Number(valor *0.5)
    } else {
        return 0
    }
    
}

function efetuarCompra(arrayDasCompras) {                       //função principal das compras
     
    valorTotal = arrayDasCompras.map(item => item.valor).reduce((acumulador, atual) => acumulador + atual)
    arrayDasCompras.forEach(item =>  calcularDesconto(item.valor) )
    let descontoAplicado = 0;
    arrayDasCompras.forEach(item => {
        descontoAplicado += calcularDesconto(item.valor)
    });
    let valorFinal = valorTotal - descontoAplicado
        
    let dataDaCompra = new Date()

    let notaFiscal = {
        "Valor Total": `R$${valorTotal.toFixed(2).replace('.', ',')}`,
        "Desconto Aplicado": `R$${descontoAplicado.toFixed(2).replace('.', ',')}`,
        "Valor Final": `R$${valorFinal.toFixed(2).replace('.', ',')}`,
        "Data de Compra": dataDaCompra.toLocaleDateString('pt-BR', {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        })
    }

    if(arrayDasCompras.length > 10 || valorFinal > 800.0) {    //Condição do Cupom
        return console.table({
            ...notaFiscal,
            "Cupom": 'Aeww, você ganhou um cupom de R$50,00 para a sua próxima compra'
        })
    } else {
        return console.table(notaFiscal)
    }
}

function chamarClientes (){                                    //Função para chamar clientes
    clientes.forEach(cliente => {
        efetuarCompra(cliente)
    });
}


chamarClientes()
