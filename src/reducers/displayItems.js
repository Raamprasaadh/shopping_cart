    
 const displayItems = (type="Display_items",action)=>{
    switch (action.type) {
        case 'INCREMENT_ON_DISPLAY':
        break;
        case 'DISPLAY_ITEMS':
            console.log('object', action.payload)
            return (action.payload!==undefined)?action.payload:"undefined";
            break;
            case 'INCREMNT_ON_DISPLAY':
                break;
        
        default:
            return 0;
            break;
    }
}


export default displayItems;