import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    wiredearphonescart:[],
    wiredearphonestotal:0,
}

const wiredearphonessystem = createSlice({

    name:'cart',
    initialState,
    reducers:{
        addwiredearphones(state, action){
           // state.wiredearphonescart.push(action.payload)

         const exist = state.wiredearphonescart.filter((items) => items.id === action.payload.id)

         if(exist){

            state.wiredearphonestotal += action.payload.price10
         }
         state.wiredearphonescart.push(action.payload)

        },
        removewiredearphones(state,action){
            const wiredearphonesIdToRemove = action.payload

           const removeditems = state.wiredearphonescart.find((wiredearphones) => wiredearphones.id === wiredearphonesIdToRemove)

           if(removeditems){

           const totalpricetoRemove = removeditems.price10 * removeditems.WiredearphonesQuantity

           return{
            ...state,

            wiredearphonescart: state.wiredearphonescart.filter((items) => items.id !== removeditems.id),
            wiredearphonestotal :  state.wiredearphonestotal - totalpricetoRemove

           }

           }
        },

        incrementwiredearphones(state,action){
                 
            const  newitems = action.payload

            const exist = state.wiredearphonescart.find((items) => items.id === newitems.id)

           if(exist){

            exist.WiredearphonesQuantity += 1
           state.wiredearphonestotal += exist.price10

           }
        },

        decrementwiredearphones(state,action){

            const exist = state.wiredearphonescart.find((items) => items.id === action.payload.id)

            if(exist && exist.WiredearphonesQuantity > 1){

                exist.WiredearphonesQuantity -=1
                state.wiredearphonestotal -= exist.price10
            }
        }
    }

});

export const {addwiredearphones , removewiredearphones ,incrementwiredearphones ,decrementwiredearphones} = wiredearphonessystem.actions; 

export default wiredearphonessystem.reducer

