import React from 'react'
import { BiRestaurant } from 'react-icons/bi';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand m-auto" to="/"><BiRestaurant /> Food's Restaurants</Link>
                <Link className="navbar-brand m-end" to="/checkoutpage1"><BsFillCartCheckFill /></Link>
            </nav>
        </>
    )
}

export default Navbar