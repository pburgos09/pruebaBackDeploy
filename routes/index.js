const express = require("express");
const router = express.Router();
const usersRouter = require("./user");
const moviesRouter = require("./movies");
const showsRouter = require("./shows");
const favouritesRouter = require("./userFavourites")
const multiSearch = require("./multiSearch")

router.use("/movies", moviesRouter);
router.use("/shows", showsRouter);
router.use("/user", usersRouter);
router.use("/favourites", favouritesRouter);
router.use("/search", multiSearch);

module.exports = router;
