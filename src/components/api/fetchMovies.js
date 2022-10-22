import axios from 'axios';

const KEY = '5f2a66e63fa9a8139a0b7e8b9aba27ca';
const URL = 'https://api.themoviedb.org/';

axios.defaults.baseURL = URL;

// Загальна інформація про фільми
export const getMoviesList = async (page = 1, language = 'en') => {
  try {
    const server = await axios.get(
      `3/trending/movie/day?api_key=${KEY}&page=${page}&language=${language}`
    );

    const data = await server.data;

    return data;
  } catch (error) {
    console.error(error);
  }
};

// Повна інформація про фільм
export const getDataMovie = async (id, language = 'en') => {
  try {
    const server = await axios.get(
      `3/movie/${id}?api_key=${KEY}&language=${language}`
    );
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

// пошук по ключовому слову
export const getMovieByQuery = async (name, page = 1, language = 'en') => {
  try {
    const server = await axios.get(
      `3/search/movie?api_key=${KEY}&language=${language}&query=${name}&page=${page}&include_adult=false`
    );
    const data = await server.data;
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Список акторів
export const getMovieCast = async (id, language = 'en') => {
  try {
    const server = await axios.get(
      `3/movie/${id}/credits?api_key=${KEY}&language=${language}`
    );
    const data = await server.data;
    return data.cast;
  } catch (error) {
    console.error(error);
  }
};

// Список відгуки
export const getMovieReviews = async (id, language = 'en') => {
  try {
    const server = await axios.get(
      `3/movie/${id}/reviews?api_key=${KEY}&language=${language}`
    );
    const data = await server.data;
    return data.results;
  } catch (error) {
    console.error(error);
  }
};
