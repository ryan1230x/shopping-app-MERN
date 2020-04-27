import React from 'react'
import { ShoppingCartItem } from './ShoppingCartItem'

export const ShoppingCartList = () => {
    return (
        <div className="mt-5">
            <h1>Shopping List</h1>
            <ul className="list-group">
                <ShoppingCartItem />                
            </ul>
        </div>
    )
}
