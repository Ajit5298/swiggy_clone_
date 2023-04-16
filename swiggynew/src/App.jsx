import "./App.css";
import ProductPage from "./Components/ProductPage";
import Homepage from "./Components/Homepage";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import AddProducts from "./Components/AddProducts";
import Cart from "./Components/Cart";
import SingleProductPage from "./Components/SingleProductPage";
import SearchProduct from "./Components/SerchProduct";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage/>} />
        <Route exact path="/productpage" element={<ProductPage/>} />
        <Route exact path="/signup" element={<SignUp/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/addproduct" element={<AddProducts/>}/>
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/allproducts/:id" element={<SingleProductPage/>} />
        <Route exact path="/searchproducts/:name" element={<SearchProduct/>} />
      </Routes>
    </div>
  );
}

export default App;