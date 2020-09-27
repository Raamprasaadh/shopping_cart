import React from 'react';
function CartItems(props){
return(
    <div className="cart-items">
        
        {(props.itemList!== undefined)?props.itemList.map((Item, Index)=>(
            <div className="item" key = {Index}>
                <h1>Item Name : {Item.Name}</h1>
                <h2>Price : {Item.Price}</h2>
            </div>
        )):'No Items available in the cart'}
    <button className="button">Proceed to pay</button>
    </div>
)
}

export default CartItems;