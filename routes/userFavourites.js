const express = require("express");
const router = express.Router();
const favouritesController = require("../controllers/favouritesController")

router.post("/:id/add",favouritesController.addFavourites);
router.delete("/:id/remove",favouritesController.removeFavourites)
router.get("/:id/all",favouritesController.getAllFavourites)

module.exports = router