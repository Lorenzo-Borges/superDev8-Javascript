// Busca no HTML todos os elementos que tenham o atributo name="fonte" (ex.: radios/inputs de tamanho de fonte)
let inputsTamanhoFonte = document.getElementsByName("fonte");

// Percorre a lista de inputs encontrados (do primeiro ao ultimo)
for (let i = 0; i < inputsTamanhoFonte.length; i += 1) {
    // Pega o input da posiçao atual (indice i) dentro da lista
    const inputTamanhoFonte = inputsTamanhoFonte[i];
    //Define que, quando esse input mudar de valor, a função campoFonteAlterado sera executada
    inputTamanhoFonte.onchange = campoFonteAlterado;
}

//Seleciona o elemento de input/select responsavel pela cor do texto
const corTexto = document.getElementById("cor-texto");
//Adiciona um listener para detectar quanto o valor do input/select mudar
corTexto.addEventListener("change", definirCorTexto);
// Seleciona o primeiro paragrafo da pagina 
const tagP = document.getElementsByTagName("p")[0];

// Funçao que sera chamada quando a cor for alterada
function definirCorTexto(event){
    //obtem o elemento que disparou o evento (o select de cores)
    let campoSelect = event.target;

    //Pega o valor selecionado (a cor escolhida)
    let cor = campoSelect.value;

    //Aplica a cor selecionada ao estilo do primeiro paragrafo
    tagP.style.color = cor;
}

//Seleciona o elemento de input/select responsavel pela cor de fundo 
const tagCorFundo = document.getElementById("cor-fundo");

//Adiciona um listener para detectar quando o valor do input/select mudar
tagCorFundo.addEventListener("change", definirCorFundo);

const imagens = [
    "assets/imagens/imagem1.webp",
    "assets/imagens/imagem2.jpg",
    "assets/imagens/imagem3.png",
]

const imagem = document.getElementById("imagem-mine");
let indice = 0;

setInterval(() => {
    let imagemSrc = imagens[indice];
    imagem.setAttribute("src", imagemSrc);

    indice = indice + 1;
    if (indice >= 3){
        indice = 0;
    }

}, 1000);


//Funçao que sera chamada quando a cor de fundo for alterada
function definirCorFundo(event) {
    //Pega o valor selecionado (a cor selecionada)
    const corFundo = tagCorFundo.value;
    //Seleciona o elemento <body> da pagina
    const body = document.getElementsByTagName("body")[0];
    //Aplicar a cor escolhida ao fundo da pagina (backgroundColor)
    body.style.backgroundColor = corFundo;
}

// Função chamada automaticamente quando algum input de fonte mudar (evento "change")
function campoFonteAlterado(event) {
    // Pega o valor do input que isparou o evento (por exemplo: "12", "16", "20" etc. )
    let tamanho = event.target.value;
    // Chama a função responsavel por aplicar o tamanho da fonte no paragrafo
    alterarTamanhoFonte(tamanho);
}  

// Funçao que realmente altera o tamanho da fonte do primeiro <p> da pagina
function alterarTamanhoFonte(tamanho) {
    // Busca todas as tags <p> e pega a primeira delas (indice 0)
    const tagP = document.getElementsByTagName("p")[0];

    // Define o font-size do paragrado usando template string e adicionando "px" ao valor do tamanho
    tagP.style.fontSize = `${tamanho}px`;
}