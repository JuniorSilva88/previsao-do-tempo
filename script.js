// variáveis => um espaço da memória da maquina, que armxena letras números etc...
// Função => um trecho de código que só é executado quando chamdo. 

let chave = "cebcd482eda57fa9a6714c1c2ba91885"

 
async function encontrarCidade (cidade){ // funcão de acessar o servidor
    let dados = await fetch()
    ("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    chave +
    "&lang=pt_br" +
    "&unis=metric"
    )
    .then(respota => respota.json())

    console.log(dados)
}

function cliqueiNoBotao(){
    let cidade = document.querySelector(".busca-cidade").value // funcão de buscar o nome da cidade digitada

    buscaCidade(cidade)
}

