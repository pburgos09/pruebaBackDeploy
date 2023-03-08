const axios = require("axios");

exports.movies = async (req, res, next) => {
  try {
    const allMovies = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=39f22174ef0bdf5170e87ff1f72857f1&language=es"
    );
    res.status(200).json(allMovies.data.results);
  } catch (error) {
    next(error);
  }
};

exports.moviesId = async (req, res, next) => {
  try {
    const singleMovie = await axios.get(
      `https://api.themoviedb.org/3/movie/${req.params.id}?api_key=39f22174ef0bdf5170e87ff1f72857f1&language=es`
    );
    res.status(200).json(singleMovie.data);
  } catch (error) {
    next(error);
  }
};

exports.moviesTitle = async (req, res, next) => {
  try {
    const titleMovie = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=39f22174ef0bdf5170e87ff1f72857f1&language=es&query=${req.params.title}`
    );
    res.status(200).json(titleMovie.data.results);
  } catch (error) {
    next(error);
  }
};

exports.moviesGenres = async (req, res, next) => {
  try {
    const genresMovie = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=39f22174ef0bdf5170e87ff1f72857f1&with_genres=${req.params.id}`
    );
    res.status(200).json(genresMovie.data.results);
  } catch (error) {
    next(error);
  }
};
