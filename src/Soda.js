import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";


function Soda(){
    return (
        <div className="container">
            <h1>Soad</h1>
            <img
                src="https://tinyurl.com/mrympzss"
                alt="Refreshing Drinks"
            />
            <p className="description">Insert $1.00 and Select Below</p>
            <nav className="snacknav">
            <NavLink exact to="/coke" className="nav-link">
                Coke
            </NavLink>
            <NavLink exact to="/pepsi" className="nav-link">
                Pepsi
            </NavLink>
          
            </nav>
                <p className="description">Drinks include a wide range, such as soads, juices and energy drinks</p>
        </div>
    )
}

export default Soda;
