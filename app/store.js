const reduxLogger = require("redux-logger");
const cakeReducer = require("../features/Cake/CakeSlice");
const iceCreamReducer = require("../features/Ice_Cream/IceCream");
const userReducer = require("../features/User/User");
const configureStore = require("@reduxjs/toolkit").configureStore;
const logger = reduxLogger.createLogger();
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    ice_cream: iceCreamReducer,
    user: userReducer,
  },
//   middleware: (getDefaultMiddleWare) => {
//     return getDefaultMiddleWare().concat(logger);
//   },
});
module.exports = store;
