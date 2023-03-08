const S = require("sequelize");
const db = require("../config/db");

class userFavourites extends S.Model {}

userFavourites.init(
  {
    movieId: {
      type: S.INTEGER,
      allowNull: false,
    },
    title: {
      type: S.STRING,
      allowNull: false,
    },
    overview: {
      type: S.TEXT,
      allowNull: false,
    },
    poster_path: {
      type: S.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "userFavourites" }
);

module.exports = userFavourites;