// ADD_ITEM
// REMOVE_ITEM

import { ADD_ITEM, REMOVE_ITEM, TOTAL_PRICE } from "./ActionTypes"

export const addaddItemToCart=data=>{
return{
    type:ADD_ITEM,
    payload :data
}}
//here data means array 

const removeItemFromCart=index=>{
    return{
        type:REMOVE_ITEM,
        payload :index,
    }}
    const totalPriceCartAction=price=>{
        return{
            type:TOTAL_PRICE,
            payload: price
        }
    }
//if we have to remove a item from cart then this is done 
//using a specific id of that item/ so rignt now we are
// doing this staticaly uing aray and thats why we are using index here
export{
    removeItemFromCart,
    totalPriceCartAction,
}