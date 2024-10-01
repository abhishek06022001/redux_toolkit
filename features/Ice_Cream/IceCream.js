const createSlice = require("@reduxjs/toolkit").createSlice;
const { cakeActions } = require("../Cake/CakeSlice");
const initialState = {
  numofIceCreams: 20,
};
const IceCream = createSlice({
  name: "Ice Cream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numofIceCreams--;
    },
    restocked: (state, action) => {
      state.numofIceCreams += action.payload;
    },
  },
  // In Redux Toolkit, extraReducers is used to handle actions from other slices or actions that are not part of the current slice's reducers.
  //     extraReducers: Allows your slice to respond to actions from other slices or actions defined outside of your slice.
  // builder.addCase(cakeActions.ordered): This listens for the ordered action from the Cake slice. When the Cake is ordered, the Ice Cream stock is also reduced by 1.
  // Why Use It?: This is useful when you want to create relationships between different slices. In this case, ordering a cake also affects the ice cream state.
  extraReducers: (builder) => {
    builder.addCase(cakeActions.ordered, (state) => {
      state.numofIceCreams--;
    });
  },
});
module.exports = IceCream.reducer;
module.exports.iceCreamActions = IceCream.actions;
