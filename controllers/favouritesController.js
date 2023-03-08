const favouritesServices = require("../services/favouritesServices");

module.exports = {
  addFavourites: async (req, res, next) => {
    const newFavourite = req.body;
    const user = req.params.id;
    try {
      const favouriteAdded = await favouritesServices.add({
        newFavourite,
        user,
      });
      return res.send(favouriteAdded);
    } catch (err) {
      console.error(err);
    }
  },
  removeFavourites: async (req, res, next) => {
    const removeFavourite = req.body.id;
    const user = req.params.id;
    try {
      const favouriteRemoved = await favouritesServices.remove({
        removeFavourite,
        user,
      });
      return res.sendStatus(200);
    } catch (err) {
      console.error(err);
    }
  },
  getAllFavourites: async (req, res, next) => {
    const id = req.params.id;
    try {
      const favouritesGetAll = await favouritesServices.getAll(id);
      return res.status(200).send(favouritesGetAll);
    } catch (err) {
      console.error(err);
    }
  },
};
