import React from 'react'

export const AddForm = () => {
    return (
        <React.Fragment>
            <h1>Add Form</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="product">Product:</label>
                    <input type="text" className="form-control" placeholder="Add a product" required />
                </div>
                <div className="form-group">
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="number" className="form-control" placeholder="Add a quantity" min="1" required />
                </div>
                <button type="submit" className="btn btn-primary font-weight-bold">Submit</button>
            </form>
        </React.Fragment>
    )
}
