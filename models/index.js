const User = require("./user");
const UserFavourites = require("./userFavourites");

UserFavourites.belongsToMany(User,{ through:'user_Favourites' })
User.belongsToMany(UserFavourites,{ through:'user_Favourites' })

module.exports = { User, UserFavourites };
