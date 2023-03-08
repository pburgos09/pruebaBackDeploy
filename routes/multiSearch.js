const express = require("express");
const router = express.Router();
const multiSearchControllers = require("../controllers/multiSearchController")

router.get("/:query", multiSearchControllers.multiSearch);

module.exports = router;
