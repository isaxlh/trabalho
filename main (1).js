const audio = document.getElementById('audio');
const listaMusicasPopInternacional = document.getElementById('lista-musicas-pop-internacional');
const listaMusicasRock = document.getElementById('lista-musicas-rock');
const listaMusicasMPB = document.getElementById('lista-musicas-mpb');
const botaoPlayPausa = document.getElementById('botao-play-pausa');
const botaoAvancar = document.getElementById('botao-avancar');
const botaoVoltar = document.getElementById('botao-voltar');
const botaoFavoritar = document.getElementById('botao-favoritar');
const botaoAleatorio = document.getElementById('botao-aleatorio');

// Adicione as músicas aqui
const musicas = [
  { nome: 'Lana Del Rey', artista: 'Lana Del Rey', src: 'link-da-musica-lana-del-rey.mp3' },
  { nome: 'Chappell Roan', artista: 'Chappell Roan', src: 'link-da-musica-chappell-roan.mp3' },
  { nome: 'Billie Eilish', artista: 'Billie Eilish', src: 'musicas divas/ billie eilish.mp3' },
  
  // Adicione mais músicas aqui...
];

let musicaAtual = 0;
let playing = false;

// Função para tocar a música atual
function tocarMusica() {
  audio.src = musicas[musicaAtual].src;
  audio.play();
  playing = true;
}

// Função para pausar a música atual
function pausarMusica() {
  audio.pause();
  playing = false;
}

// Função para avançar para a próxima música
function avancarMusica() {
  musicaAtual++;
  if (musicaAtual >= musicas.length) {
    musicaAtual = 0;
  }
  tocarMusica();
}

// Função para voltar para a música anterior
function voltarMusica() {
  musicaAtual--;
  if (musicaAtual < 0) {
    musicaAtual = musicas.length - 1;
  }
  tocarMusica();
}

// Função para favoritar a música atual
function favoritarMusica() {
  console.log(`Música ${musicas[musicaAtual].nome} favoritada!`);
}

// Função para tocar música aleatoriamente
function tocarAleatorio() {
  musicaAtual = Math.floor(Math.random() * musicas.length);
  tocarMusica();
}

// Adicione eventos aos botões
botaoPlayPausa.addEventListener('click', () => {
  if (playing) {
    pausarMusica();
  } else {
    tocarMusica();
  }
});

botaoAvancar.addEventListener('click', avancarMusica);
botaoVoltar.addEventListener('click', voltarMusica);
botaoFavoritar.addEventListener('click', favoritarMusica);
botaoAleatorio.addEventListener('click', tocarAleatorio);

// Inicie a música
tocarMusica();

// Função para realizar a pesquisa
function searchMusic() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();  // Pega o texto da barra de pesquisa
  const musicItems = document.querySelectorAll('.musicas li'); // Seleciona todas as músicas

  // Itera sobre todos os itens da lista de músicas
  musicItems.forEach(item => {
    const musicTitle = item.querySelector('p').textContent.toLowerCase(); // Pega o título da música
    if (musicTitle.includes(searchTerm)) {
      item.style.display = ''; // Exibe a música se ela corresponder à pesquisa
    } else {
      item.style.display = 'none'; // Esconde a música se não corresponder
    }
  });
}

// Adiciona um evento para filtrar enquanto o usuário digita na barra de pesquisa
document.getElementById('searchInput').addEventListener('input', searchMusic);
