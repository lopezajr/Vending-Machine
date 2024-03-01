import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

function Candy(){
    return (
        <div className="container">
            <h1>Candy</h1>
            <img
                src="https://tinyurl.com/5n7bjk7p"
                alt="Amazing Candy"
            
            />
            <p className="description">Insert $1.00 and Select Below</p>
               <nav className="snacknav">
            <NavLink exact to="/reeses" className="nav-link">
                Reeses
            </NavLink>
            <NavLink exact to="snickers" className="nav-link">
                Snickers
            </NavLink>
          
            </nav>
            <p className="description">There are countless varieties of candies, from gummies to chocolates.</p>
        </div>
    )

}

export default Candy;