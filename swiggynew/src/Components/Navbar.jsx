import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const route = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    var dataFromLs = JSON.parse(localStorage.getItem("userDataR"));
    var currentUser = JSON.parse(localStorage.getItem("currentUserR"));

    if (currentUser) {
      for (var i = 0; i < dataFromLs.length; i++) {
        if (dataFromLs[i].email === currentUser) {
          setUser(dataFromLs[i].name);
        }
      }
    } else {
      setUser(null);
    }
  }, []);

  function goto() {
    route("/cart");
  }

  function signinPage() {
    route("/signup");
  }
  return (
    <div className="navbar">
      <div>
        <div className="navbar-l">
          <div>
            <img
              src="https://logosandtypes.com/wp-content/uploads/2021/01/swiggy.svg"
              alt="logo"
            />
          </div>
          <div>
            <p>
              <strong>Malad West </strong>
              Malad, Malad West, Mumbai, Mah....
            </p>
          </div>
        </div>

        <div className="navbar-r">
          <div>
            <i className="fa-solid fa-magnifying-glass"></i>
            <p>Search</p>
          </div>
          <div>
            <i className="fa-solid fa-tags"></i>
            <p>
              Offers <sup> New</sup>
            </p>
          </div>
          <div>
            <i className="fa-regular fa-circle-question"></i>
            <p>Help</p>
          </div>

          {user ? (
            <div>
              <i className="fa-regular fa-user"></i>
              <p>{user} </p>{" "}
            </div>
          ) : (
            <div
              onClick={() => {
                signinPage();
              }}
            >
              <i className="fa-regular fa-user"></i>
              <p>Sign In </p>
            </div>
          )}

          <div
            onClick={() => {
              goto();
            }}
          >
            <i className="fa-solid fa-cart-shopping"></i>
            <p>Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

