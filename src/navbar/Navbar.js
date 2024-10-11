import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const Navbar = () => {
  const { cart } = useContext(GlobalContext);
  const [isOpened, setIsOpened] = useState(false);

  const myFunction = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <h2>Attri Fashion-hub</h2>
      </Link>
      <ul className={`navbar-ul ${isOpened ? 'show' : ''}`}>
        <li className="menu-icon" onClick={myFunction}>
          <button onClick={myFunction} className="menu-button">
            <i className={`fa ${isOpened ? 'fa-times-circle-o' : 'fa-bars'}`}></i>
          </button>
        </li>
        <button className="nav-btn">Hi, Dear</button>
        <li>Womens</li>
        <li>Mens</li>
        <li>Clothing</li>
        <li>Brands</li>
        <li>
          <Link to="/cart">
            &#128722;{" "}
            <span className="card-count" style={{ color: "red" }}>
              ({cart.length})
            </span>
          </Link>
        </li>
        <li>
          <Link to="/orders">Orders</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
