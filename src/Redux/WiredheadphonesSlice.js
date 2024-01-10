import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    wiredheadphonecart:[],
    wiredheadphonetotal:0
}

const wiredheadphonesystem = createSlice({

    name:'cart',
    initialState,
    reducers:{
        addwiredheadphone(state, action){
            //state.wiredheadphonecart.push(action.payload)

          const exist = state.wiredheadphonecart.filter((items) => items.id === action.payload.id)

          if(exist){           
            state.wiredheadphonetotal += action.payload.price6
          }
          state.wiredheadphonecart.push(action.payload)

        },

        removewiredheadphone(state,action){
            const wiredheadphoneIdToRemove = action.payload
            const removeditems = state.wiredheadphonecart.find((wiredheadphone) => wiredheadphone.id === wiredheadphoneIdToRemove)

            if(removeditems){

                const totalPriceToRemove = removeditems.price6 * removeditems.wiredheadphonesQuantity

                return{
                    ...state,
                    wiredheadphonecart: state.wiredheadphonecart.filter((items) => items.id !== removeditems.id),
                    wiredheadphonetotal: state.wiredheadphonetotal - totalPriceToRemove
                }
            }
        },

        incrementwiredheadphone(state,action){

            const newitems = action.payload

            const exist = state.wiredheadphonecart.find((items) => items.id === newitems.id )

            if(exist){

                exist.wiredheadphonesQuantity += 1
                state.wiredheadphonetotal += exist.price6

            }
        },

        decrementwiredheadphone( state, action){
            const exist = state.wiredheadphonecart.find((items) => items.id === action.payload.id)

            if(exist && exist.wiredheadphonesQuantity > 1){

                exist.wiredheadphonesQuantity -= 1
                state.wiredheadphonetotal -= exist.price6
            }
        }
    }

});

export const {addwiredheadphone , removewiredheadphone ,incrementwiredheadphone ,decrementwiredheadphone} = wiredheadphonesystem  .actions; 

export default wiredheadphonesystem.reducer

