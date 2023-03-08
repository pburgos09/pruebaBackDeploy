const userFavourites = require("../models/userFavourites");
const User = require("../models/user");

module.exports = {
  add: async (favouriteData) => {
    const { user, newFavourite } = favouriteData;
    // en el objeto favourite estarian los datos con los mismos campos del modelo userFavourites
    try {
      const userFound = await User.findOne({ where: { id: user } });
      const favouriteFound = await userFavourites.create(newFavourite);
      return favouriteFound.addUser(userFound);
    } catch (err) {
      console.error(err);
    }
  },
  remove: async (removedData) => {
    const { removeFavourite } = removedData;
    try {
      const favouriteRemove = await userFavourites.destroy({
        where: { id: removeFavourite },
      });
      return favouriteRemove;
    } catch (err) {
      console.error(err);
    }
  },
  getAll: async (id) => {
    try {
      const favouritesGetAll = await User.findAll({
        where: { id },
        include: { model: userFavourites },
      });
      return favouritesGetAll[0].userFavourites
    } catch (err) {
      console.error(err);
    }
  },
};
