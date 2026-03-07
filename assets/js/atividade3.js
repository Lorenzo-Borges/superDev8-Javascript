let id = 1

const botaoSalvar = document.getElementById("campo-salvar");
botaoSalvar.addEventListener("click", salvar);

const campoLocal = document.getElementById("campo-local");
const campoNome = document.getElementById("campo-proprietario");
const campoMetro = document.getElementById("campo-metro");
const campoValor = document.getElementById("campo-valor");
const campoConstrucao = document.getElementById("campo-construcao");
const tbody = document.getElementById("tbody");

function salvar() {
    let local = campoLocal.value;
    let nome = campoNome.value;
    let metro = campoMetro.value;
    let valor = campoValor.value;
    let construcao = campoConstrucao.value;

    let valorQuadrado = valor / metro;

    criarLinha(id, local, nome, metro, valor, construcao, valorQuadrado);

    id += 1
}

function criarLinha(codigo, local, nome, metro, valor, construcao, valorQuadrado) {
    const linha = 
    `<tr>
        <td>${id}</td>
        <td>${local}</td>
        <td>${nome}</td>
        <td>R$ ${valor}</td>
        <td>${metro}</td>
        <td>R$ ${valorQuadrado}</td>
        <td> ${construcao}</td>
    </tr>`

    tbody.innerHTML += linha
}