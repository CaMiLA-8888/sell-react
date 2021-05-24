
import React, { Fragment } from 'react'
import Welcome from '../components/Wellcome'
import Sellers from '../components/Sellers'
import AddButtom from '../components/AddButton'

const SellersList = ({data}) => (
    <Fragment>
        <Welcome 
            username="Seller"
        />
        <Sellers
            sellers={data}
        />
        <AddButtom 
            buttonType = "New Sell"
        />
    </Fragment>
)

export default SellersList