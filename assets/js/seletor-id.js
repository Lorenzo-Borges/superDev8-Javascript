const botaoLimparCampos = document.getElementById("limpar-campos");
botaoLimparCampos.addEventListener("click", limparCampos);

const botaoProcessar = document.getElementById("processar");
botaoProcessar.addEventListener("click", processarPedido);

const botaoCalcularSoma = document.getElementById("calcular-soma");
botaoSoma.addEventListener("click", somar);

const botaoCalcularMedia = document.getElementById("calcular-media");
botaoCalcularMedia.addEventListener("click", calcularMedia);

function limparCampos(){
    let campoPlacaMae = document.getElementById("placa-mae");
        console.log(campoPlacaMae);

    let campoPalcaVideo = document.getElementById("placa-video");
    console.log(campoPalcaVideo);

    campoPalcaVideo.value = "";
    campoPlacaMae.value = "";

}

function processarPedido(){
    let campoPlacaMae = document.getElementById("placa-mae");
    let campoPalcaVideo = document.getElementById("placa-video");

    let placaMae = campoPlacaMae.value;
    let placaVideo = campoPalcaVideo.value;

    alert(placaMae + " " + placaVideo); 
}

function somar(){

    let campoNumero01 = document.getElementById("numero01");
    console.log(campoNumero01);

    let campoNumero02 = document.getElementById("numero02");
    console.log(campoNumero02);

    let numero01 = parseInt(campoNumero01.value);
    let numero02 = parseInt(campoNumero02.value);

    let soma = numero01 + numero02;

    alert("Soma: " + soma);

}

function calcularMedia(){
   
    let campoNome = document.getElementById("nome");
    let nome = campoNome.value;
    console.log(nome);

    let campoNota1 = document.getElementById("nota1");
    let nota1 = parseFloat(campoNota1.value);
    console.log(nota1);

    let campoNota2 = document.getElementById("nota2");
    let nota2 = parseFloat(campoNota2.value);
    console.log(nota2);

    let campoNota3 = document.getElementById("nota3");
    let nota3 = parseFloat(campoNota3.value);
    console.log(nota3);


    let media = (nota1 + nota2 + nota3) / 3;
    alert(`Média: ${media}`);

    let status = "";
    if(media < 7){
        status = "Reprovado";
    } else {
        status = "Aprovado";
    }

    const texto = `Aluno: ${nome}<br>
    Nome 1: ${nota1.toFixed(2).replace("." , ",")}<br>
    Nome 2: ${nota2.toFixed(2).replace("." , ",")}<br>
    Nome 3: ${nota3.toFixed(2).replace("." , ",")}<br>
    Media: ${media.toFixed(2).replace("." , ",")}<br>
    Status: ${status}`;
    
    const divResultadoMedia = document.getElementById("resultado-media");
    divResultadoMedia.innerHTML = texto;
}

