
var cart = [];
var cartNames = [];

export const incrementCartItem=(Item)=>{
    if(cartNames.includes(Item.Name)){
        cart.map((CurrentItem,Index)=>{
            if(CurrentItem.Name===Item.Name){
                if(CurrentItem.Qty === null || CurrentItem.Qty===undefined)
                {
                CurrentItem.Qty = 0;
            }
            else{
                CurrentItem.Qty = CurrentItem.Qty + 1;
            }
            }
        })
        }
        else{
            window.alert("Please add the item to cart")
        }
    return{
        type:"INCREMENT_CART_ITEM",
        payload: cart
    }
}

export const decrementCartItem=(Item)=>{
    
        if(cartNames.includes(Item.Name)){
            cart.map((CurrentItem,Index)=>{
                if(CurrentItem.Name===Item.Name){
                    if (CurrentItem.Qty!==0){
                    CurrentItem.Qty = CurrentItem.Qty - 1;
                }
                }
            })
            }
            else{
                window.alert("Please add the item to cart")
            }
    return{
        type:"DECREMENT_CART_ITEM",
        payload:cart
    }
}

export const addToCart = (Item) =>{

    if(cartNames.includes(Item.Name)){
        //do nothing as it already exists
        
    }
    else{
        cartNames[cartNames.length] = Item.Name;
        console.log('cart includes', cart.includes(Item.Name));
        Item.Qty = 1;
        cart[cart.length]=Item;
        console.log('object', cart)
    }
    return{
        type:'ADD_TO_CART',
        payload: cart
    }
}

export const removeFromCart = (Item) =>{

    if(cartNames.includes(Item.Name)){
        //do nothing as it already exists
        for (let i=0;i<cart.length;i++){
            if(cart[i].Name === Item.Name){
                cart.splice(i);
            }
        }
    }
    
    return{
        type:'REMOVE_FROM_CART',
        payload: cart
    }
}