        import React from 'react';
        import {useDispatch} from 'react-redux';
        import {addToCart, incrementCartItem, decrementCartItem} from './actions';
        function DisplayItems(props){
        const dispatch = useDispatch();
        return(
            <div className="display-items">
                <h2>Available Items</h2>
                {(props.itemList !==undefined)?props.itemList.map((Item, Index)=>(
                    <div className = "item" key ={Index}>
                    <h1>Item Name : {Item.Name}</h1>
                    <h2>Price : {Item.Price}</h2>
                    <button className="increment"onClick={()=>dispatch(incrementCartItem(Item))}>+</button>
                    <button className="decrement"onClick={()=>dispatch(decrementCartItem(Item))}>-</button>
                    <button className="add-to-cart" onClick={()=>dispatch(addToCart(Item))}>Add to cart</button>
                    </div> 
                )):'No Items Available'}
                
        
            </div>
        )
        }

        export default DisplayItems;