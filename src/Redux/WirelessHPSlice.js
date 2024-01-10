import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    wirelessheadphonecart:[],
    wirelessheadphonetotal:0,
}

const wirelessheadphonesystem = createSlice({

    name:'cart',
    initialState,
    reducers:{
        addwirelessheadphone(state, action){
            // state.wirelessheadphonecart.push(action.payload)

           const exist = state.wirelessheadphonecart.filter((items) => items.id === action.payload.id)

           if(exist){
            state.wirelessheadphonetotal += action.payload.price8
           }
           state.wirelessheadphonecart.push(action.payload)
           
        },


        removewirelessheadphone(state,action){
            const wirelessheadphoneIdToRemove = action.payload
          const  removeditems = state.wirelessheadphonecart.find((wirelessheadphone) => wirelessheadphone.id === wirelessheadphoneIdToRemove)

          if(removeditems){
            
            const totalPriceToRemove = removeditems.price8 * removeditems.wirelessheadphonesQuantity

            return{
                ...state,
                wirelessheadphonecart: state.wirelessheadphonecart.filter((items)=> items.id !== wirelessheadphoneIdToRemove),
                wirelessheadphonetotal: state.wirelessheadphonetotal - totalPriceToRemove

            }

          }
        },

        incrementwirelessheadphone(state,action){

           const exist = state.wirelessheadphonecart.find((items) => items.id === action.payload.id)

            if(exist){

                exist.wirelessheadphonesQuantity += 1
                state.wirelessheadphonetotal += exist.price8
            }

        }, 

        decrementwirelessheadphone( state,action){

           const exist = state.wirelessheadphonecart.find((items) => items.id === action.payload.id)

           if(exist && exist.wirelessheadphonesQuantity > 1){
                exist.wirelessheadphonesQuantity -= 1
                state.wirelessheadphonetotal -= exist.price8
           }
        }
    }

});

export const {addwirelessheadphone , removewirelessheadphone , incrementwirelessheadphone, decrementwirelessheadphone} = wirelessheadphonesystem.actions; 

export default wirelessheadphonesystem.reducer

