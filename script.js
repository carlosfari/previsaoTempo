let chave = "11c10f9aaa7d7d31bfd5d9ee61e780e2"

function colocarNaTela(dados) {// Recebendo os "dados"
    console.log(dados) // Colocando os "dados" na tela

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + " °C"
    document.querySelector(".descricao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + Math.floor(dados.main.humidity) + "%"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon +".png"


}

//Async é função principal, As chamadas de funções são todas nela.
// Função acessa o servidor, faz a busca da cidade após pegar o nome do input
async function buscarCidade(cidade) {
    // Fetch vai até o servidor e busca o item
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
        cidade +
        "&appid=" +
        chave +
        "&lang=pt_br" +
        "&units=metric"
    )
        .then(resposta => resposta.json())//Then = então, converteu pra Json

    colocarNaTela(dados)//Chamei os dados do servidor e mandei para função "colocarNaTela



}

//Função - Pega nome da cidade no input
function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value

    // Chama a função "buscaCidade" que fez a busca no servidor da Api 
    buscarCidade(cidade)//Chamei a cidade digitada e mandei para o input 
}