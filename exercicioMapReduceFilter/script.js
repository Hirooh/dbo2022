let produtos = [{
        fornecedor:'LG',
        nome: 'TV',
        preco: 800,
        quantidade:2
    }, {
        fornecedor:'LG',
        nome: 'Monitor',
        preco: 450,
        quantidade:4
    }, {
        fornecedor:'Sansung',
        nome: 'TV',
        preco: 900,
        quantidade:3
    }, {
        fornecedor:'Gradiente',
        nome: 'TV',
        preco: 700,
        quantidade:4
    }, {
        fornecedor:'LG',
        nome: 'SSD',
        preco: 300,
        quantidade:6
    }];

//Utilizando map, reduce e filter resolva as seguintes questões

//Um vetor com o total de vendas por produto

let totalVendasProd = produtos.map( (item) => {return item.preco * item.quantidade});
console.log(totalVendasProd);

//O total de vendas

let totalVendas = totalVendasProd.reduce( (resultado, item) => {return resultado + item;}, 0 );
console.log(totalVendas);

//O total de vendas de TV

let totalTV = produtos.filter( (item) => {return item.nome === 'TV'} )
totalTV.reduce( (resultado, item) => {return resultado + item.quantidade;}, 0 );
console.log(totalTV);

//O total de vendas da LG + Sangsung

let LGVendas = produtos.filter( (item) => {return item.fornecedor === 'LG'} )
                       .reduce( (resultado, item) => {return resultado + item.preco;},0  );
let SamsungVendas = produtos.filter( (item) => {return item.fornecedor === 'Samsung'} )
                       .reduce( (resultado, item) => {return resultado + item.preco;},0  );
console.log(LGVendas + SamsungVendas);

//Um vetor de objetos mostrando todos os preços com 20% de desconto

let desconto = produtos.map( (item) => {return (item.preco*0.8) * item.quantidade});
console.log(desconto);

//Qual seria o total de vendas após o desconto de 20%

let descontoTotal = produtos.reduce( (resultado, item) => {return resultado + (item.preco*0.8*item.quantidade)}, 0);
console.log(descontoTotal);

//Qual o preço mais caro para TVs

let tvCara = produtos.filter( (item) => {return item.nome === 'TV'} )
tvCara = totalTV.reduce((resultado, item) => {
        if(!resultado){resultado = item}
        else{
            if (resultado.preco < item.preco){
                resultado = item;
            }
        }
        return resultado},0 )
console.log(tvCara);

//Mostrar todas informações da TV mais barata

tvBarata = totalTV.reduce((resultado, item) => {
        if(!resultado){resultado = item}
        else{
            if (resultado.preco > item.preco){
                resultado = item;
            }
        }
        return resultado},0 )
console.log(tvBarata)

//Um vetor de strings aonde cada string tem todos os dados de cada produto
//ex: "Gradiente - TV, 700, 4"

vetorString = produtos.map( (item) => {return item.fornecedor+" - " +item.nome + " - " +item.preco + " - " +item.quantidade});
console.log(vetorString);
