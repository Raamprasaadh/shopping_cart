    import React from 'react';
    import DisplayItems from './displayItems';
    import {connect} from 'react-redux';
    import SearchBar from './searchBar';
    import {displayItems} from './actions';
    
    class ShoppingCart extends React.Component{
       constructor(props){
           super(props);
           this.state={itemsList:[
           {"Name":"Maggi","Price":"20"},
           {"Name":"Sugar","Price":"25"},
           {"Name":"Coffee","Price":"100"},
           {"Name":"Rice","Price":"50"}]};
       }
       
        render(){
            return(<div>
                <h1>Shopping Cart</h1>  
                {/* search bar */}
                <SearchBar />
                {/* cart items logo*/}
                <button>Cart Logo</button>
                {/* display available items*/}
                <DisplayItems itemList={this.state.itemsList}/>
            </div>);
        }
    }; 

    
    
    export default ShoppingCart;