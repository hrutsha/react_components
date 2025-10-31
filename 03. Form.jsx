import React, { useState } from 'react'

const Form = () => {
    let [data, setData] = useState({
        username: '',
        email: ''
    })

    let handleInput = (e) => {
        let { name, value } = e.target
        setData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(data.username)
        console.log(data.email)
        console.log('data submitted.')

        setData((prev) => ({
            username: '',
            email: ''
        }))
    }

    return (
        <div>

            <form action="" onSubmit={handleSubmit}>
                <input name='username' value={data.username} type="text" placeholder='Enter name' onChange={handleInput} /> <br />
                <input name="email" value={data.email} type="email" placeholder='Enter email' onChange={handleInput} /> <br />
                <input type="submit" value="submit" />
            </form>

        </div>
    )
}

export default Form
