import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Loginpage = () => {

    const [data, setData] = useState({ username: "", password: "" })
    const [errordata, setErrorData] = useState({ username: "", password: "" })
    const [valid, setValid] = useState(true)


    const nav = useNavigate();

    const eventHandling = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const formSubmit = (e) => {
        e.preventDefault();
        setValid(true);
        if (data.username === "abc@gmail.com" && data.password === "password") {
            setErrorData("")
            setValid(true);
            nav("/menupage");
        } else {
            setValid(false)
            setErrorData("Invalid email and password")
        }
    }


    return (
        <>
            <div className='container my-5'>
                <form onSubmit={(e) => (formSubmit(e))}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder='abc@gmail.com' name="username" value={data.username} onChange={(e) => (eventHandling(e))} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" >Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={data.password} name='password' onChange={(e) => (eventHandling(e))} placeholder='password' />
                    </div>
                    <button className="btn btn-outline-success" type='submit'>Login</button>
                    <button type='reset' className="btn btn-outline-secondary mx-3" to="/menupage">Reset</button>
                    <Link to="/" className="btn btn-outline-danger">Cancel</Link>
                </form>
            </div>

            {!valid && (
                <div className='text-center' style={{ backgroundColor: "red" }}><h3>{errordata}</h3></div>
            )}
        </>
    )
}

export default Loginpage
