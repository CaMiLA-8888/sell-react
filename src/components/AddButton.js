import React from 'react'
import { Link } from 'react-router-dom'

const AddButton = ({buttonType}) => (
    <Link to="/Sellers/new">
        <div className = "text-center">
            <button className="btn btn-outline-success" alt="home"> { buttonType }</button>
        </div>
        
    </Link>
)

export default AddButton