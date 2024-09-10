const store = require('./app/store')
const cakeAction = require('./features/Cake/CakeSlice').cakeActions
const fetchUser = require('./features/User/User').fetchUser
const iceCreamAction = require('./features/Ice_Cream/IceCream').iceCreamActions
console.log("initial State ", store.getState());
store.subscribe(() => {
    console.log("Updated State ", store.getState());
});
store.dispatch(cakeAction.ordered());
store.dispatch(iceCreamAction.ordered());
store.dispatch(cakeAction.ordered());
store.dispatch(iceCreamAction.restocked(3));
store.dispatch(cakeAction.restocked(2));
store.dispatch(fetchUser());