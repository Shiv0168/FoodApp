import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CheckoutPage1 = () => {

  const [hamburger, sethamburger] = useState(0)
  const [pepsi, setpepsi] = useState(0)
  const [coke, setcoke] = useState(0)
  const [fries, setfries] = useState(0)


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
              <div className="row">
                <div className="col">
                  <div>
                    Coke:
                    <span style={{ marginLeft: "70px", marginRight: "30px" }}>{coke}</span>
                    <button className="btn btn-primary" onClick={increaseQuantitycole} >+</button>
                    <button className="btn btn-secondary" onClick={decreaseQuantitycoke}>-</button>
                  </div>
                  <br />
                  <div>
                    Fries:
                    <span style={{ marginLeft: "70px", marginRight: "30px" }}>{fries}</span>
                    <button className="btn btn-primary" onClick={increaseQuantityfries} >+</button>
                    <button className="btn btn-secondary" onClick={decreaseQuantityfries}>-</button>
                  </div>
                  <br />
                  <div>
                    Pepsi:
                    <span style={{ marginLeft: "60px", marginRight: "30px" }}>{pepsi}</span>
                    <button className="btn btn-primary" onClick={increaseQuantitypepsi} >+</button>
                    <button className="btn btn-secondary" onClick={decreaseQuantitypepsi}>-</button>
                  </div>
                  <br />
                  <div>
                    Hamburger:
                    <span style={{ marginLeft: "30px", marginRight: "20px" }}>{hamburger}</span>
                    <button className="btn btn-primary" onClick={increaseQuantityHamburger} >+</button>
                    <button className="btn btn-secondary" onClick={decreaseQuantityHamburger}>-</button>
                  </div>
                  <br />
                  <div>
                    Total (INR):
                    <span style={{ marginLeft: "5vw" }}>{coke * 50 + fries * 100 + pepsi * 50 + hamburger * 200}</span>
                  </div>
                </div>
                <div className='col' >

                </div>
              </div>
            </div>
            <div className="modal-footer">
              <Link to="/result" type="button" className="btn btn-outline-primary">SAVE AND CHECKOUT</Link>
              <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">CANCEL</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage1