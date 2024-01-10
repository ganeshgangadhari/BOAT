import { createSlice } from "@reduxjs/toolkit";

//Step 1
const initialState = {
    airpodescart: [],
    airpodesTotal: 0,
}

const airpodessystem = createSlice({

    name: 'cart',
    initialState,
    reducers: {
        addairpods(state, action) {
            //Step 2
            //state.airpodescart.push(action.payload)


            // step 5
            const exist = state.airpodescart.filter((items) => items.id == action.payload.id)
            
            if (exist) {
                state.airpodesTotal += action.payload.price2
            }
            state.airpodescart.push(action.payload);

        },
        removeairpods(state, action) {
            const airpodsIdToRemove = action.payload;
            const removedItem = state.airpodescart.find(item => item.id === airpodsIdToRemove);
           

            if (removedItem) {
                const totalPriceToRemove = removedItem.price2 * removedItem.airpodesQuantity;

                return {
                    ...state,
                    airpodescart: state.airpodescart.filter(item => item.id !== airpodsIdToRemove),
                    airpodesTotal: state.airpodesTotal - totalPriceToRemove
                };
            }
            return state; // If item not found, return the current state
        },

        incrementairpodes(state, action) {

            const newitems = action.payload

            const exist = state.airpodescart.find((items) => items.id == newitems.id)

            if (exist) {
                exist.airpodesQuantity += 1
                state.airpodesTotal += exist.price2
            }
        },

        decrementairpodes(state, action) {
            const newitems = action.payload;
        
            const exist = state.airpodescart.find((items) => items.id === newitems.id);
        
            if (exist && exist.airpodesQuantity > 1) {
                exist.airpodesQuantity -= 1;
                state.airpodesTotal -= exist.price2; // Subtract the price of one item, not the total price
            }
        }
        
    }

});

export const { addairpods, removeairpods, incrementairpodes ,decrementairpodes} = airpodessystem.actions;

export default airpodessystem.reducer

