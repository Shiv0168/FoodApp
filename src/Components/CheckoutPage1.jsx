import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CheckoutPage1 = () => {

  const [hamburger, sethamburger] = useState(0)
  const [pepsi, setpepsi] = useState(0)
  const [coke, setcoke] = useState(0)
  const [fries, setfries] = useState(0)

  const nav = useNavigate();

  const increaseQuantityHamburger = () => {
    if (hamburger >= 0) {
      sethamburger(hamburger + 1);
    }
  }
  const increaseQuantitypepsi = () => {
    if (pepsi >= 0) {
      setpepsi(pepsi + 1);
    }
  }
  const increaseQuantitycole = () => {
    if (coke >= 0) {
      setcoke(coke + 1);
    }
  }
  const increaseQuantityfries = () => {
    if (fries >= 0) {
      setfries(fries + 1);
    }
  }


  const decreaseQuantityHamburger = () => {
    if (hamburger >= 1) {
      sethamburger(hamburger - 1);
    }
  }

  const decreaseQuantitycoke = () => {
    if (coke >= 1) {
      setcoke(coke - 1);
    }
  }

  const decreaseQuantitypepsi = () => {
    if (pepsi >= 1) {
      setpepsi(pepsi - 1);
    }
  }

  const decreaseQuantityfries = () => {
    if (fries >= 1) {
      setfries(fries - 1);
    }
  }

  const final = () => {
    nav("/result");
  }

  return (
    <div className='container my-5'>
      <button type="button" className="btn btn-outline-primary d-flex m-auto" data-toggle="modal" data-target="#exampleModal">
        Go To Cart
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Order Summary</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">

              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Order Summary</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Coke : </th>
                    <td>{coke}</td>
                    <td>
                      <div >
                        <button className="btn btn-primary" onClick={increaseQuantitycole}>+</button>
                        <button className="btn btn-secondary mx-2" onClick={decreaseQuantitycoke}>-</button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">Pepsi : </th>
                    <td>{pepsi}</td>
                    <td>
                      <div >
                        <button className="btn btn-primary" onClick={increaseQuantitypepsi}>+</button>
                        <button className="btn btn-secondary mx-2" onClick={decreaseQuantitypepsi}>-</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Hamburger : </th>
                    <td>{hamburger}</td>
                    <td>
                      <div >
                        <button className="btn btn-primary" onClick={increaseQuantityHamburger}>+</button>
                        <button className="btn btn-secondary mx-2" onClick={decreaseQuantityHamburger}>-</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Fries : </th>
                    <td>{fries}</td>
                    <td>
                      <div >
                        <button className="btn btn-primary" onClick={increaseQuantityfries}>+</button>
                        <button className="btn btn-secondary mx-2" onClick={decreaseQuantityfries}>-</button>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">Total (INR) : </th>
                    <td><span style={{ marginLeft: "5vw" }}>{coke * 50 + fries * 100 + pepsi * 50 + hamburger * 200}</span></td>
                    <td>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button onClick={final} type="button" className="btn btn-outline-primary" data-dismiss="modal">SAVE AND CHECKOUT</button>
              <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">CANCEL</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage1
