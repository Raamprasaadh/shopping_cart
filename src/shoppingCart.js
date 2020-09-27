    import React from 'react';
    import DisplayItems from './displayItems';
    import SearchBar from './searchBar';

    class ShoppingCart extends React.Component{
        render(){
            return(<div>
                <h1>Shopping Cart</h1>  
                {/* search bar */}
                <SearchBar />
                {/* cart items logo*/}
                <button>Cart Logo</button>
                {/* display available items*/}
                <DisplayItems />
            </div>);
        }
    }; 

    export default ShoppingCart;