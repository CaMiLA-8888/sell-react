import React from 'react'
import Loading from '../components/Loading'
import FatalError from './Error'
import SellersList from './SellerList'
import useAxios from '../hooks/useFetch'


const ContainerSellerList = () => {
    const { data, loading, error } = useAxios("http://localhost:5002/api/seller/getAll")

    if(loading)
        return <Loading />
            
    if(error)
        return <FatalError />

    return <SellersList
        data={data}            
    />
}

export default ContainerSellerList