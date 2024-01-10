import { createSlice } from "@reduxjs/toolkit";

const initialState={
    watchescart:[],
    watchestotal:0,
}

const watchessystem = createSlice({

    name:'cart',
    initialState,
    reducers:{
        addwatches(state, action){
            //state.watchescart.push(action.payload)

           const exist = state.watchescart.filter((items)=> items.id == action.payload.id)
           
           if(exist){
                state.watchestotal += action.payload.price
           }
           state.watchescart.push(action.payload);

        },
        removewatches(state,action){
            const watchesIdToRemove = action.payload
            const removedItem= state.watchescart.find(items => items.id === watchesIdToRemove)

            if(removedItem){
                const totalPriceToRemove = removedItem.price * removedItem.watchesQuantity;

                return {
                    ...state,
                    watchescart: state.watchescart.filter(item => item.id !== watchesIdToRemove),
                    watchestotal : state.watchestotal - totalPriceToRemove
                }

            }
            return state;
        },

        increamentwatches(state,action){
            
              const exist = state.watchescart.find((items)=> items.id == action.payload.id)
              
              if(exist){
                exist.watchesQuantity+=1
                state.watchestotal += exist.price
              }
        },
        decrementwatches(state,action){
            //no need to store in new variable
            
             const exist = state.watchescart.find((items) => items.id === action.payload.id)

          if(exist && exist.watchesQuantity > 1){
           exist.watchesQuantity -=1;
           state.watchestotal -= exist.price; // Subtract the price of one item, not the total price
          }

        },

        
    }

});

export const {addwatches , removewatches, increamentwatches,decrementwatches} = watchessystem.actions; 

export default watchessystem.reducer


