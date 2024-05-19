const axios = require('axios');

// URL da API (exemplo usando a API Jikan para buscar informações do MyAnimeList)
const apiUrl = 'https://api.jikan.moe/v3/anime/1';

// Função para buscar informações do anime
async function getAnimeInfo() {
  try {
    const response = await axios.get(apiUrl);
    const anime = response.data;
    
    console.log(`Título: ${anime.title}`);
    console.log(`Sinopse: ${anime.synopsis}`);
    console.log(`Episódios: ${anime.episodes}`);
    console.log(`Pontuação: ${anime.score}`);
  } catch (error) {
    console.error('Erro ao buscar informações do anime:', error.message);
  }
}

// Chama a função para buscar informações do anime
getAnimeInfo();
