import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    neckbandcart:[],
    neckbandtotal:0
}

const neckbandsystem = createSlice({

    name:'cart',
    initialState,
    reducers:{
        addneckband(state, action){
                      
           // state.neckbandcart.push(action.payload)

           const exist = state.neckbandcart.filter((items)=> items.id === action.payload.id)

           if(exist){
                state.neckbandtotal += action.payload.price4
                }
                state.neckbandcart.push(action.payload)
        },
        removeneckband(state,action){
            const neckbandIdToRemove = action.payload
            const removedItem = state.neckbandcart.find((items) => items.id === neckbandIdToRemove)

            if(removedItem){
                const totalPriceToRemove = removedItem.price4 * removedItem.neckbandQuantity
            
            return{
                ...state,
               neckbandcart: state.neckbandcart.filter((item) => item.id !== neckbandIdToRemove),
               neckbandtotal: state.neckbandtotal - totalPriceToRemove
            }
        }
        },

        incrementneckband(state,action){

           const exist = state.neckbandcart.find((items) => items.id === action.payload.id)

           if(exist){
            exist.neckbandQuantity += 1
            state.neckbandtotal += exist.price4
           }

        },

        decrementneckband(state,action){

            const exist = state.neckbandcart.find((items) => items.id === action.payload.id)

           if(exist && exist.neckbandQuantity > 1){

            exist.neckbandQuantity -= 1
            state.neckbandtotal -= exist.price4
           }


        }
    }

});

export const {addneckband , removeneckband , incrementneckband ,decrementneckband} = neckbandsystem.actions; 

export default neckbandsystem.reducer

