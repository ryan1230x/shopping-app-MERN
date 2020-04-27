import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const ShoppingCartItem = ({product}) => {

    const {deleteShoppingCart} = useContext(GlobalContext);

    return (
        <React.Fragment>
            <li className="mb-4 p-3 bg-secondary text-black list-group-item">
                    <article>
                        <div>                        
                            <span className="h2 font-weight-bold">{product.quantity} {product.name}</span><br />
                            <small className="h6">The notes go here</small>                        
                        </div>
                        <div className="mt-3">
                            <button onClick={() => deleteShoppingCart(product._id)} className="btn btn-danger">Delete</button>
                        </div>
                    </article>
                </li>
        </React.Fragment>
    )
}
