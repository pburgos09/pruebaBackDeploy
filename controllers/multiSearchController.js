const axios = require("axios");

exports.multiSearch = async (req, res, next) => {
  try {
    const allMoviesAndTv = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=39f22174ef0bdf5170e87ff1f72857f1&language=es&query=${req.params.query}&page=1&include_adult=false`
    );
    res.status(200).json(allMoviesAndTv.data.results);
  } catch (error) {
    next(error);
  }
};