import React from "react";
import './VendingMachine.css';
import { FaApplePay } from "react-icons/fa";



function VendingMachine(){
    return (
        <div className="container">
            <h1>Vending Machine</h1>
            <img
                src="https://tinyurl.com/444pnsc5"
                alt="Come Buy Some Snacks"
            />
             <p className="description">Sit Down and Give Me Your Money</p>
            <br></br>
        </div>
    )
}

export default VendingMachine;