import React from 'react'

export const ShoppingCartItem = () => {
    return (
        <React.Fragment>
            <li className="mb-4 p-3 bg-secondary text-black list-group-item">
                    <article>
                        <div>                        
                            <span className="h2 font-weight-bold">1 Rice</span><br />
                            <small className="h6">The notes go here</small>                        
                        </div>
                        <div className="mt-3">
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </article>
                </li>
        </React.Fragment>
    )
}
