import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";


function Chips() {
    return (
        <div className="container">
            <h1>Chips</h1>
            <img
                src="https://tinyurl.com/68y2dp6x"
                alt="Very Tasty"
            />
         <p className="description">Insert $1.00 and Select Below</p>
            <nav className="snacknav">

            <NavLink exact to="/doritos" className="nav-link">
                Doritos
            </NavLink>
            <NavLink exact to="/lays" className="nav-link">
                Lays
            </NavLink>
          
            </nav>
            <p className="description">Chips are a delicious snack made from thinly sliced potatoes, fried or baked</p>
        </div>
        
    )

}

export default Chips;