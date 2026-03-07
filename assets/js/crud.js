// Pega o elemento do HTML que possui o id "botao-cadastrar"
// e guarda esse elemento dentro da variável botaoCadastrar
const botaoCadastrar = document.getElementById("botao-cadastrar");

// Pega o campo de input do HTML que possui o id "campo-nome"
const campoNome = document.getElementById("campo-nome");

// Adicionar um "ouvinte de evento" ao campo
// Quando ocorre o evento do teclado pressionando
campoNome.addEventListener("keydown" , eventoEnterCampoNome);

//Funçao que sera executada quando ocorrer um evento de teclado no campo de nome
function eventoEnterCampoNome(event){

    //Verifica qual tecla foi pressionada pelo usuario 
    //Se a tecla pressionada for "Enter"
    if(event.key === "Enter"){

        //Chama a funçao cadastrarJogo()
        //Isso faz com que o jogo seja adicionado a lista
        cadastrarJogo();
    }
}

// Adiciona um "ouvinte de evento" ao botão.
// Quando o botão for clicado, a função cadastrarJogo será executada.
botaoCadastrar.addEventListener("click", cadastrarJogo);

// Função responsável por cadastrar (adicionar) um jogo na lista
function cadastrarJogo(){

    // Pega o valor digitado dentro do input
    const nome = campoNome.value.trim();

    //Verificar se o nome digitado contem menos de 2 caracteres 
    if (nome.length < 2){
        //Apresenta uma mensagem que contem menos que 2 caracteres 
        alert("O nome deve conter no minimo 2 caracteres");
        //Encerra a execução desde metodo, pois o nao deve cadastrar quando o nome é invalido
        return;
    }

    // Cria um novo elemento <li> (item de lista) no HTML
    // Exemplo: <li></li>
    const tagLi = document.createElement("li");

    // Coloca dentro do <li> o nome que foi digitado no campo
    // Exemplo: <li>Mario</li>
    tagLi.innerHTML = nome;

    // Pega a lista não ordenada (UL) do HTML que possui o id "jogos"
    // Exemplo de estrutura: <ul id="jogos"></ul>
    const tagUl = document.getElementById("jogos");

    // Adiciona o novo <li> criado dentro da <ul>
    // Ou seja, adiciona um novo item na lista de jogos
    tagUl.appendChild(tagLi);

    //Limpar campo nome
    campoNome.value = "";

    //Foco no campo do nome 
    campoNome.focus();
}