import { useState, useEffect } from 'react'
import axios from 'axios';

const useAxios = (url) => {
    const [ data, setData ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ error, setError ] = useState(null)

    useEffect(() => {
        const fetchResource = async () => {
            try {
                console.log("aqui", url)
                let { data } = await axios.get(url)
                console.log("aqui", data)
                setData(data)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setError(error)
            }
        }
        fetchResource()
    }, [url])

    return { data, loading, error }
}


export default useAxios