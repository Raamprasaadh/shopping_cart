    import React from 'react';
    import DisplayItems from './displayItems';
    import {connect} from 'react-redux';
    import SearchBar from './searchBar';
    import {displayItems} from './actions';
    
    class ShoppingCart extends React.Component{
       constructor(props){
           super(props);
       }
       componentDidMount(){
        var initialValues=()=>this.props.displayItems();
        initialValues();
       }
        render(){
            return(<div>
                <h1>Shopping Cart</h1>  
                {/* search bar */}
                <SearchBar />
                {/* cart items logo*/}
                <button>Cart Logo</button>
                {/* display available items*/}
                <DisplayItems itemList={this.props.DisplayItems }/>
            </div>);
        }
    }; 

    const mapStateToProps =(state)=> ({
        DisplayItems:state.DisplayItems
    });
    const mapDispatchToProps = (dispatch)=>{
        return({
        displayItems : ()=>dispatch(displayItems())
    })
    }
    export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);