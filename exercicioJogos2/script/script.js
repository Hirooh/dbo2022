// mover coletor
function move(direcao){
    if (contador != 0){
        para();
    }
    if (direcao == "esquerda"){
        timer = setInterval("esquerda()", 15);
        contador ++;
    }
    if (direcao == "direita"){
        timer = setInterval("direita()", 15);
        contador ++;
    }
    if (direcao == "cima"){
        timer = setInterval("cima()", 15);
        contador ++;
    }
    if (direcao == "baixo"){
        timer = setInterval("baixo()", 15);
        contador ++;
    }
}

function esquerda(){
    let coletorLeft = parseInt(getComputedStyle(coletor).left);
    
    coletor.style.left = coletorLeft - 5;
    if (coletorLeft <= 0){
        clearInterval(timer);
        timer = setInterval ("direita()", 15);
    }
}

function direita(){
    let coletorLeft = parseInt(getComputedStyle(coletor).left);
    let fundoWidth = parseInt(getComputedStyle(fundo).width);
    let coletorWidth = parseInt(getComputedStyle(coletor).width);

    coletor.style.left = coletorLeft + 5;
    if (coletorLeft >= fundoWidth - coletorWidth){
        clearInterval(timer);
        timer = setInterval ("esquerda()", 15);
    }
}

function control(e){
    if(e.key == "ArrowLeft"){
        move("esquerda");
    }
    if(e.key == "ArrowRight"){
        move("direita");
    }
}

// gerar itens

function gerarItens(){
    let itemTop = 0;
    let itemLeft = Math.floor(Math.random() * 500) - 250;
    let itens = document.querySelector(".itens");
    let item = document.createElement("div");
    item.setAttribute("class", "item");
    itens.appendChild(item);
    function cairItens(){
        itemTop += 10;
        item.style.top = itemTop;
    }
    setInterval(cairItens, 20);
    if(itemTop == 500){
        itemTop == 500;
    }
    item.style.top = itemTop;
    item.style.left = itemLeft;
}

gerarItens();

// parar coletor
function para(){
    clearInterval(timer);
}
function para2(){
    clearInterval(m);
}

function cor(){
    if(cont == 0){
        coletor.style.backgroundColor="blue";
        cont++;
    }
    else{
        if(cont == 1){
            coletor.style.backgroundColor="orange";
            cont++;
        }
        else{
            if(cont == 2){
            coletor.style.backgroundColor="yellow";
            cont = 0;
            }
        }
    }
}

// colisoes

function colisao(){
    let coletorLeft= parseInt(getComputedStyle(coletor).left);
    let coletorTop= parseInt(getComputedStyle(coletor).top);
    let coletorHeight= parseInt(getComputedStyle(coletor).height);
    let coletorWidth= parseInt(getComputedStyle(coletor).width);

    let jogoHeight = parseInt(getComputedStyle(fundo).height);
    let jogoWidth = parseInt(getComputedStyle(fundo).width);

    if (((coletorLeft >= div2Left)&&(coletorLeft <= div2Left + div2Width))&&
        ((coletorTop >= div2Top)&&(coletorTop <= div2Top + div2Height))){
            para2();
            para();
    }
    if (((div2Left >= coletorLeft)&&(div2Left <= coletorLeft + coletorWidth))&&
        ((div2Top >= coletorTop)&&(div2Top <= coletorTop + coletorHeight))){
            para2();
            para();
    }
}

// ler ao iniciar

let contador = 0;
let cont = 0;
let m = setInterval("moverdireita()", 15);
let n = setInterval("colisao()", 5);

document.addEventListener("keydown", control);
document.querySelector("#esquerda").addEventListener("click",() => { move('esquerda')});
document.querySelector("#direita").addEventListener("click",() => { move('direita')});
document.querySelector("#cor").addEventListener("click",() => { cor()});