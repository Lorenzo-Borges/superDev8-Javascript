
const campoReal = document.getElementById("campo-real");

let valorDolar = document.getElementById("campo-dolar-americano");
valorDolar.addEventListener("click", convercaoDolarAmericano);

let valorEuro = document.getElementById("campo-euro");
valorEuro.addEventListener("click", convercaoEuro);

let valorLibra = document.getElementById("campo-libra");
valorLibra.addEventListener("click", convercaoLibra);

let valorDolarKnada = document.getElementById("campo-dolar-canadense");
valorDolarKnada.addEventListener("click", convercaoDolarCanadense);

let valorIene = document.getElementById("campo-iene");
valorIene.addEventListener("click", convercaoIene);

let valorPeso = document.getElementById("campo-peso");
valorPeso.addEventListener("click", convercaoPeso);

let valorFranco = document.getElementById("campo-franco");
valorFranco.addEventListener("click", convercaoFranco);

let valorYuan = document.getElementById("campo-yuan");
valorYuan.addEventListener("click", convercaoYuan);

function convercaoDolarAmericano() {
    let real = campoReal.value;
    let UsdConvertido = real * 0.1907;
    let conversao = UsdConvertido;
    apresentar(conversao, real)
}

function convercaoEuro() {
    let real = campoReal.value;
    let EuroConvertido = real * 0.1641;
    let conversao = EuroConvertido;
    apresentar(conversao, real)
}

function convercaoLibra() {
    let real = campoReal.value;
    let LibraConvertido = real * 0.1422;
    let conversao = LibraConvertido;
    apresentar(conversao, real)
}

function convercaoDolarCanadense() {
    let real = campoReal.value;
    let KndConvertido = real * 0.2589;
    let conversao = KndConvertido;
    apresentar(conversao, real)
}

function convercaoIene() {
    let real = campoReal.value;
    let JpyConvertido = real * 30.08;
    let conversao = JpyConvertido;
    apresentar(conversao, real)
}

function convercaoPeso() {
    let real = campoReal.value;
    let ArpConvertido = real * 270.75;
    let conversao = ArpConvertido;
    apresentar(conversao, real)
}

function convercaoFranco() {
    let real = campoReal.value;
    let SufConvertido = real * 0.1481;
    let conversao = SufConvertido;
    apresentar(conversao, real)
}

function convercaoYuan() {
    let real = campoReal.value;
    let YuanConvertido = real * 1.37;
    let conversao = YuanConvertido;
    apresentar(conversao, real)
}

function apresentar(conversao, real) {
    const tagLi = document.createElement("li");
    tagLi.innerHTML = `R$ ${real} => ${conversao}`;
    const tagUl = document.getElementById("campo-tagul");
    tagUl.appendChild(tagLi);
}








