import React, {useContext, useEffect} from 'react'
import { ShoppingCartItem } from './ShoppingCartItem'
import {GlobalContext} from '../context/GlobalState';

export const ShoppingCartList = () => {

    const { products, getShoppingCart } = useContext(GlobalContext);
    useEffect(() => getShoppingCart(),[]);

    return (
        <div className="mt-5">
            <h1>Shopping List</h1>
            <ul className="list-group">
                {products.map(product => (<ShoppingCartItem key={product._id} product={product} />))}                                
            </ul>
        </div>
    )
}
