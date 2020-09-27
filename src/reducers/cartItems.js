
const cartItems = (type="cartItems", action)=>
{
    console.log('cartitem reducers'+JSON.stringify(action.payload));
    switch (action.type) {
        
        case 'ADD_TO_CART':
            return (action.payload!==undefined)?action.payload:"undefined";
            break;
        case 'INCREMENT_CART_ITEM':
            return (action.payload!==undefined)?action.payload:"undefined";
            break;
        case 'DECREMENT_CART_ITEM':
        return (action.payload!==undefined)?action.payload:"undefined";
        break;
        default:
        return 0;
;            break;
    }
}

export default cartItems;