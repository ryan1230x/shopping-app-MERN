export default (state, action) => {
    switch(action.type) {
        case 'GET_SHOPPING_CART':
            return {
                ...state,
                loading:false,
                products:action.payload
            }
        case 'ADD_SHOPPING_CART':
            return {
                ...state,
                products:[...state.products, action.payload]
            }
        case 'DELETE_SHOPPING_CART':
            return {
                ...state,
                products:state.products.filter(product => product._id !== action.payload)
            }
        case 'SHOPPING_CART_ERROR':
            return {
                ...state,
                error:action.payload
            }
        default:
            return state;
    }
}