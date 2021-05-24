  
import React from 'react'

const Card = ({ internal_order_number, creation_date, seller_store, shopping_method }) => (
    <div className = 'container'>
        <div className="row center">
                <div className="card-header ">
                    <h4> Sell order number: {internal_order_number}</h4>
                </div>
                <ul className="list-group list-group-flush ">
                    <li className="list-group-item">Creations date: {creation_date}</li>
                    <li className="list-group-item">Seller store: {seller_store}</li>
                    <li className="list-group-item">shipping method: {shopping_method}</li>
                </ul>
        </div>
    </div>
   
)

export default Card
