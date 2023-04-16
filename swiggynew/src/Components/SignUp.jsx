import "./Component.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Homepage from "./Homepage";
import toast from "react-hot-toast";

function SignUp() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useNavigate();

  function submit(e) {
    e.preventDefault();

    var dataFromLs = JSON.parse(localStorage.getItem("userDataR")) || [];

    var flag = false;
    for (var i = 0; i < dataFromLs.length; i++) {
      if (dataFromLs[i].email === userData.email) {
        flag = true;
      }
    }
    if (flag) {
      setUserData({ ...userData, ["email"]: "" });
      return toast.error("email already exsited");
    } else if (userData.password.length < 8) {
      setUserData({ ...userData, ["password"]: "" });
      toast.error("password must be 8 characters");
    } else {
      dataFromLs.push(userData);
      localStorage.setItem("userDataR", JSON.stringify(dataFromLs));
      setUserData({ name: "", email: "", password: "" });
      router("/login");
      toast.success("Registration done");
    }
  }

  function featchData(e) {
    var value = e.target.value;
    var name = e.target.name;

    setUserData({ ...userData, [name]: value });
  }
  return (
    <div>
      <div className="home-bot">
        <Homepage />
      </div>
      <div id="sign-up">
        <div className="signUp-page">
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
              <h2>Sign up</h2>
              <p>
                {" "}
                <strong> or </strong>login to your account
              </p>
            </div>
            <div></div>
          </div>

          <div>
            <form>
              <input
                type="text"
                placeholder="Name"
                onChange={(e) => {
                  featchData(e);
                }}
                name="name"
                required
                value={userData.name}
              />
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  featchData(e);
                }}
                name="email"
                required
                value={userData.email}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  featchData(e);
                }}
                name="password"
                required
                value={userData.password}
              />
            </form>
          </div>

          <div>
            <p>Have a referral code?</p>
            <button onClick={(e) => submit(e)}>Continue</button>
            <p>
              By creating an account, I accept the{" "}
              <strong>Terms & Conditions & Privacy Policy</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;