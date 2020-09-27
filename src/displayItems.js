        import React from 'react';
        function DisplayItems(props){
            console.log('state', props.itemList.state)
        return(
            <div className="display-items">
                <h2>Available Items</h2>
                {(props.itemList.state !==undefined)?props.itemList.state.map((Item, Index)=>(
                    <div className = "item" key ={Index}>
                    <h1>Item Name : {Item.Name}</h1>
                    <h2>Price : {Item.Price}</h2>
                    <button className="increment">+</button>
                    <button className="decrement">-</button>
                    <button className="add-to-cart">Add to cart</button>
                    </div> 
                )):'No Items Available'}
                
        
            </div>
        )
        }

        export default DisplayItems;