import { ADD_T0_CART } from "./Contant";
export  function addToCart(item){
    // console.log(item)
    return{
        type:ADD_T0_CART,
        data:item
    }
}