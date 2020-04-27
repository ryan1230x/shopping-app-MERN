import React, {createContext, useReducer} from 'react';
import ShoppingCartReducer from './ShoppingCartReducer';
import axios from 'axios';


// Initial State
const InitialState = {
    products:[],
    error:null,
    loading:true
}

// Create Context
export const GlobalContext = createContext(InitialState);

// Provider Component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(ShoppingCartReducer, InitialState);

    // Actions
    async function getShoppingCart() {
        try {
            const res = await axios.get('/api/v1/shoppingcart');
            dispatch({
                type:'GET_SHOPPING_CART',
                payload:res.data.data
            });
        } catch (err) {
            dispatch({
                type:'SHOPPING_CART_ERROR',
                payload:err.response
            });
        }
    }

    async function addShoppingCart(shoppingCartItem) {
        // Configuration headers for Axios POST REQUEST
        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }
        try {
            const res = await axios.post('/api/v1/shoppingcart', shoppingCartItem, config);
            dispatch({
                type:'ADD_SHOPPING_CART',
                payload:res.data.data
            });
        } catch (err) {
            dispatch({
                type:'SHOPPING_CART_ERROR',
                payload:err.response
            });
        }
    }

    async function deleteShoppingCart(id) {
        try {
            await axios.delete(`/api/v1/shoppingcart/${id}`);
            dispatch({
                type:'DELETE_SHOPPING_CART',
                payload:id
            });
        } catch (err) {
            dispatch({
                type:'SHOPPING_CART_ERROR',
                payload:err.response
            });
        }
    }

    // Return Global Provider
    return(
    <GlobalContext.Provider value={{
        products:state.products,
        error:state.error,
        loading:state.loading,
        getShoppingCart,
        addShoppingCart,
        deleteShoppingCart
    }}>
        {children}
    </GlobalContext.Provider>);
}