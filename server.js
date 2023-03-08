const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./config/db");
const routes = require("./routes");
const cookieParser = require("cookie-parser");
const { User, UserFavourites } = require("./models");
const volleyball = require("volleyball");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(volleyball)
app.use("/api", routes);
  
(async () => {
  try {
    await db.sync({ force: false });
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Unable to connect:", error.message);
  }
})();
