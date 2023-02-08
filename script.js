// variáveis => um espaço da memória da maquina, que armxena letras números etc...
// Função => um trecho de código que só é executado quando chamdo. 

let chave = "cebcd482eda57fa9a6714c1c2ba91885"

function exibirNaTela(dados){
    console.log(dados)

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "°C , Mínima de " + Math.floor(dados.main.temp_min) + "°C e Máxima de " + Math.floor(dados.main.temp_max) + "°C"
    document.querySelector(".descricao").innerHTML =  dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade de  " + dados.main.humidity + "%"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}
 
async function encontrarCidade (cidade){ // funcão de acessar o servidor
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    chave +
    "&lang=pt_br" +
    "&units=metric"
    )
    .then(respota => respota.json())

    exibirNaTela(dados)

}

function cliqueiNoBotao(){
    let cidade = document.querySelector(".busca-cidade").value // funcão de buscar o nome da cidade digitada

    encontrarCidade(cidade)

}