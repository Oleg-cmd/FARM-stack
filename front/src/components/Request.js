import { useState, useEffect } from 'react'

import axios from 'axios'

export const Request = () => {
    const [result, setResult] = useState(
        'Click the button to get a message from the server',
    )

    const message = async () => {
        setResult('Loading...')
        try {
            let res = await axios.get('http://localhost:8000/data')
            let result = JSON.stringify(res.data.message)
            setResult(result)
        } catch (err) {
            console.log(err)
            setResult(err)
        }
    }

    const clickHandler = async () => {
        message()
    }

    return (
        <div className="request">
            <div onClick={clickHandler}>Click!</div>
            <div>{result}</div>
        </div>
    )
}
