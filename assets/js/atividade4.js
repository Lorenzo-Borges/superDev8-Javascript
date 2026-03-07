let id = 1



const botaoSalvar = document.getElementById("campo-salvar");
botaoSalvar.addEventListener("click", salvar);

const campoNome = document.getElementById("campo-nome");
const campoGenero = document.getElementById("campo-genero");
const campoMinutos = document.getElementById("campo-minutos");
const campoNota = document.getElementById("campo-nota");
const campoCinema = document.getElementById("campo-cinema");
const tbody = document.getElementById("tbody");

function salvar() {
    let nome = campoNome.value;
    let genero = campoGenero.value;
    let minutos = campoMinutos.value;
    let nota = campoNota.value;
    let cinema = campoCinema.value;
    let classificacao = ""

    if(nota < 5){
        classificacao = "lixo"
    }else if(nota >= 5 && nota <= 7){
        classificacao = "meia boca"
    }else{
        classificacao = "topzera"
    }

    criarLinha(id, nome, genero, minutos, nota, cinema, classificacao);

    id += 1
}

function criarLinha(id, nome, genero, minutos, nota, cinema, classificacao) {
    const linha = 
    `<tr>
        <td>${id}</td>
        <td>${nome}</td>
        <td>${genero}</td>
        <td>${minutos}</td>
        <td>${nota}</td>
        <td>${classificacao}</td>
        <td>${cinema}</td>
    </tr>`

    tbody.innerHTML += linha
}