import React, {useState, useEffect} from 'react'
import NavbarComponent from '../components/NavbarComponent'
import axios from 'axios'
// import mpld3 from 'mpld3'

const HomeScreen = () => {
    const [figJson, setFigJson] = useState('')

    const fetchData = async () => {
        const { data } = await axios.get('/api')
        console.log(data)
        setFigJson(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            <NavbarComponent />
            <p>
                {figJson}
            </p>
        </div>
    )
}

export default HomeScreen
