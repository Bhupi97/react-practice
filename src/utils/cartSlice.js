import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: { // Objects
        items: []
    },
    reducers: { // Object contain different types of actions we can take
        addItem: (state, action) => { // reducer function mapped to an action
            // Modify state based on the provided action

            // Vanilla(older) Redux => DON'T MUTATE THE STATE, returning was mandatory
            // Eg. -
            // const newState = [..state];
            // newState.items.push(action.payload);
            // return newState;

            // Redux Toolkit - uses immer BTS
            // We HAVE to mutate the state
            state.items.push(action.payload); // mutating the state
        },
        removeItem: (state, action) => {
            state.items.pop();
        },
        clearCart: (state, action) => {
            state.items.length = 0;  // results in []

            // RTK - either Mutate the existing state or return a new state
            // state.items.length = 0; // originalState = []

            // we can also use :- return { items: [] } ***Whatever is returned by reducer will replace the originalState***
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

