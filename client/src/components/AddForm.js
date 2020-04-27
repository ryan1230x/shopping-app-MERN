import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const AddForm = () => {

    // Set State
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);

    const {addShoppingCart} = useContext(GlobalContext);

    // Form Submit Handler
    const onSubmit = e => {
        e.preventDefault();
        const newShoppingCartItem = {
            // ES6 Destructuring(text:text, quantity:quantity)
            name,
            quantity
        }
        addShoppingCart(newShoppingCartItem);
    }

    return (
        <React.Fragment>
            <h1>Add Form</h1>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="product">Product:</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" className="form-control" placeholder="Add a product" required />
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Quantity:</label>
                    <input onChange={(e) => setQuantity(e.target.value)} value={quantity} type="number" className="form-control" placeholder="Add a quantity" min="1" required />
                </div>
                <button className="btn btn-primary font-weight-bold">Add Product</button>
            </form>
        </React.Fragment>
    )
}
