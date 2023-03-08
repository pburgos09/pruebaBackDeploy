const axios = require("axios");

exports.shows = async (req, res, next) => {
  try {
    const allShows = await axios.get(
      "https://api.themoviedb.org/3/discover/tv?api_key=39f22174ef0bdf5170e87ff1f72857f1&language=es"
    );
    res.status(200).json(allShows.data.results);
  } catch (error) {
    next(error);
  }
};

exports.showsId = async (req, res, next) => {
  try {
    const singleShows = await axios.get(
      `https://api.themoviedb.org/3/tv/${req.params.id}?api_key=39f22174ef0bdf5170e87ff1f72857f1&language=es`
    );
    res.status(200).json(singleShows.data);
  } catch (error) {
    next(error);
  }
};

exports.showsTitle = async (req, res, next) => {
  try {
    const titleShows = await axios.get(
      `https://api.themoviedb.org/3/search/tv?api_key=39f22174ef0bdf5170e87ff1f72857f1&language=es&query=${req.params.title}`
    );
    res.status(200).json(titleShows.data.results);
  } catch (error) {
    next(error);
  }
};

exports.showsGenres = async (req, res, next) => {
  try {
    const genresShows = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=39f22174ef0bdf5170e87ff1f72857f1&with_genres=${req.params.id}`
    );
    res.status(200).json(genresShows.data.results);
  } catch (error) {
    next(error);
  }
};
