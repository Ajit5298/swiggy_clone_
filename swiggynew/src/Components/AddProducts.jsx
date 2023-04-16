import { useState } from "react";
import Navbar from "./Navbar";
import toast from 'react-hot-toast';

function AddProducts() {
  const [productData, setProductData] = useState({
    name: "",
    image: "",
    price: "",
  });

  function submitData(e) {
    e.preventDefault();
    var dataFromLs = JSON.parse(localStorage.getItem("productDataR")) || [];
    dataFromLs.push(productData);
    localStorage.setItem("productDataR", JSON.stringify(dataFromLs));
    setProductData({ name: "", image: "", price: "" });
    toast.success("Products Added");
  }
  function formData(e) {
    var name = e.target.name;
    var value = e.target.value;

    setProductData({ ...productData, [name]: value });
  }
  return (
    <div>
      <Navbar />
      <h1>Add Products</h1>
      <div className="addProducts">
        <form onSubmit={(e) => submitData(e)}>
          <label>Name of Product</label>
          <input
            type="text"
            placeholder="Product Name"
            onChange={(e) => formData(e)}
            name="name"
            value={productData.name}
          />
          <label>Image</label>
          <input
            type="text"
            placeholder="Image url"
            onChange={(e) => formData(e)}
            name="image"
            value={productData.image}
          />
          <label>Price</label>
          <input
            type="number"
            placeholder="Price"
            onChange={(e) => formData(e)}
            name="price"
            value={productData.price}
          />
          <input type="submit" value="Add Products" />
          <p>By clicking on Login, I accept the Terms & Conditions & Privacy Policy</p>
        </form>
        <div>
          <div>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
              alt="product"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProducts;