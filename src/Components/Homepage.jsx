import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div className='text-center my-5'><h1> Welcome to food's Kitchen</h1>
            <Link className="btn btn-primary btn-lg m-3" to="/login" role="button">login</Link>
        </div>
    )
}

export default Homepage