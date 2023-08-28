import { BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Navbar from "./Components/Navbar";
import Homepage from "./Components/Homepage";
import MenuPage from "./Components/MenuPage";
import Result from "./Components/Result";
import { useState } from "react";
import Loginpage from "./Components/Loginpage";
import CheckoutPage1 from "./Components/CheckoutPage1";

function App() {

  const menuItems = [
    { "name": "Hamburger", "price": 200, "imageUrl": "https://media.istockphoto.com/id/1309352410/photo/cheeseburger-with-tomato-and-lettuce-on-wooden-board.jpg?s=612x612&w=0&k=20&c=lfsA0dHDMQdam2M1yvva0_RXfjAyp4gyLtx4YUJmXgg=" },
    { "name": "Fries", "price": 100, " imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3uAc9N80Dq6WuDbikkWEe1roMchJImPymg&usqp=CAU" },
    { "name": "Coke", "price": 50, "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2OsGqCTzJVB_BmVS1XDmF0I2L1gyeNWrZ2xqi_DJnXpuXt5lfYE27SFosf6jj6u5EfLM&usqp=CAU" },
    { "name": "Pepsi", "price": 50, "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxzR9b6eaOnbx3hJ-QyuD8mpX4WbC6ALb-ig&usqp=CAU" }
  ]
  
  const [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => {
      if (quantity >= 0) {
          setQuantity(quantity + 1);
      }
  }

  const decreaseQuantity = () => {
      if (quantity >= 1) {
          setQuantity(quantity - 1);
      }
  }

  return (
    <>
      <Router>
        <Navbar />   
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/login" element={<Loginpage/>}></Route>
          <Route path="/menupage" element={<MenuPage menuItems={menuItems} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} quantity={quantity} />}></Route>
          <Route path="" element={<Homepage/>}></Route>
          <Route path="/result" element={<Result />}></Route>
          <Route path="/checkoutpage1" element={<CheckoutPage1/>}></Route>
        </Routes>
      </Router>
      
</>
  );
}

export default App;
