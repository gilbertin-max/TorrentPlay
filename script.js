// Função para realizar o download de arquivos
function downloadFile(fileName) {
    // Cria um link dinamicamente
    const link = document.createElement('a');
    // Define o caminho do arquivo (ajuste conforme a estrutura de diretórios)
    link.href = 'arquivos/' + fileName;
    // Define o nome do arquivo para download
    link.download = fileName;
    // Simula o clique para iniciar o download
    link.click();
}

function searchGames() {
    var input = document.getElementById('searchInput');
    var filter = input.value.toLowerCase();  // Captura e converte o texto para minúsculas

    // Verifica se o valor foi capturado corretamente
    console.log("Valor do campo de busca:", filter);

    // Obtém o contêiner dos jogos
    var container = document.getElementById('gamesContainer');
    var figures = container.getElementsByClassName('image-container');  // Todos os jogos

    // Loop através de todos os jogos (elementos <figure>)
    for (var i = 0; i < figures.length; i++) {
        var game = figures[i];
        var caption = game.getElementsByTagName('figcaption')[0];  // Obtém o texto dentro de <figcaption>

        // Verifica se o texto do <figcaption> contém o filtro de busca
        console.log("Jogo:", caption.textContent, "Filtro:", filter);  // Log para verificar cada jogo

        if (caption && caption.textContent.toLowerCase().indexOf(filter) > -1) {
            game.style.display = "";  // Exibe o jogo se corresponder
        } else {
            game.style.display = "none";  // Oculta o jogo se não corresponder
        }
    }
}


