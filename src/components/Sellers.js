import React, { Fragment } from 'react'
import Card from './Card'

const Sellers = ({sellers}) => (
    <Fragment>
        { sellers.map((seller) => (
            <Card 
                key = {seller.internal_order_number}
                {...seller}
            />
        ))}
    </Fragment>    
)


export default Sellers