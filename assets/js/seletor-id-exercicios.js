const botaoAgendarConsulta = document.getElementById("agendar-consulta");
botaoAgendarConsulta.addEventListener("click", agendarConsulta );

function agendarConsulta(){

    let nomePet = document.getElementById("nome-pet");
    let nomeDoPet = nomePet.value;
    console.log(nomePet);

    let idadePet = document.getElementById("idade-pet");
    let idadeDoPet = idadePet.value;
    console.log(idadePet);

    let tipoPet = document.getElementById("tipo-pet");
    let tipoDoPet = tipoPet.value;
    console.log(tipoPet);

    let dataConsulta = document.getElementById("data-consulta");
    let dataDaConsulta = dataConsulta.value;
    console.log(dataConsulta);

    const texto = `Nome do pet: ${nomeDoPet} <br> Data da consulta: ${dataDaConsulta} <br> Idade do Pet ${idadeDoPet} <br> Tipo de Pet ${tipoDoPet}`;

    const divConsultaPet = document.getElementById("resultado-pet");
    divConsultaPet.innerHTML = texto;
}