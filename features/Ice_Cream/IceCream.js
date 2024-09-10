const createSlice = require('@reduxjs/toolkit').createSlice
const { cakeActions } = require('../Cake/CakeSlice')
const initialState = {
    numofIceCreams: 20
}
const IceCream = createSlice({
    name: "Ice Cream",
    initialState,
    reducers: {
        ordered: (state) => {
            state.numofIceCreams--;
        },
        restocked: (state, action) => {
            state.numofIceCreams += action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state) => {
            state.numofIceCreams--;
        })
    }
});
module.exports = IceCream.reducer;
module.exports.iceCreamActions = IceCream.actions;