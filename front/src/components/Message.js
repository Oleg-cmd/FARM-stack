import { useState, useEffect } from 'react'

import axios from 'axios'

export const Message = () => {
    const [result, setResult] = useState('Loading...')

    const message = async () => {
        try {
            let res = await axios.get('http://localhost:8000/')
            let result = JSON.stringify(res.data.message)
            setResult(result)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        message()
    }, [])

    return (
        <div>
            <div>
                <h4>{result}</h4>
            </div>
        </div>
    )
}
