import "./Component.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Homepage from "./Homepage";
import toast  from "react-hot-toast";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useNavigate();

  function checkLog(e) {
    e.preventDefault();

    var dataFromLs = JSON.parse(localStorage.getItem("userDataR"));

    var flag = false;
    for (var i = 0; i < dataFromLs.length; i++) {
      if (
        dataFromLs[i].email === formData.email &&
        dataFromLs[i].password === formData.password
      ) {
        flag = true;
      }
    }
    if (flag) {
      localStorage.setItem("currentUserR", JSON.stringify(formData.email));
      setFormData({ email: "", password: "" });
      router("/");
      toast.success("Log in sucessful");
    } else {
      setFormData({ email: "", password: "" });
      toast.error("Please check email or password");
    }
  }

  function featchData(e) {
    var value = e.target.value;
    var name = e.target.name;
    // console.log(name,value) ;
    setFormData({ ...formData, [name]: value });
  }
  return (
    <div>
      <div className="home-bot">
        <Homepage />
      </div>
      <div id="login">
        <div className="login-page">
          <div
            onClick={() => {
              router("/");
            }}
          >
            {" "}
            X{" "}
          </div>
          <div>
            <div>
              <h2>Log in</h2>
              <p>
                {" "}
                <strong> or </strong> create an account
              </p>
            </div>
            <div></div>
          </div>

          <div>
            <form>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  featchData(e);
                }}
                name="email"
                required
                value={formData.email}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  featchData(e);
                }}
                name="password"
                required
                value={formData.password}
              />
            </form>
          </div>

          <div>
            <button
              onClick={(e) => {
                checkLog(e);
              }}
            >
              Continue
            </button>
            <p className="tc">
              By creating an account, I accept the{" "}
              <strong>Terms & Conditions & Privacy Policy</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;