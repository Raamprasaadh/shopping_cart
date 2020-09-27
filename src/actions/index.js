var state = [{"Name":"Maggi","Price":"20"},{"Name":"Sugar","Price":"20"},{
"Name":"Coffee powder","Price":"20"},{"Name":"Jim_Jam","Price":"20"}];
var cart;

export const displayItems =()=>{
    
    return{
        type:"DISPLAY_ITEMS",
        payload:{ state }
    }
}

export const incrementCartItem=()=>{
    return{
        type:"INCREMENT_CART_ITEM"
    }
}

export const decrementCartItem=()=>{
    return{
        type:"DECREMENT_CART_ITEM"
    }
}

export const addToCart = () =>{
    return{
        type:'ADD_TO_CART'
    }
}