import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Container() {
    return(
        <div class="NavBar">
            <ul>
                <li><a href="Home"><img src="Pics/Logo.jpg" alt="Amazon"/></a></li>
                <li><a href="Location">Deliver to?</a></li>
                <li><a href="Search"><input type="text" placeholder="Search.."/></a></li>
                <li><a href="Country"><img src="Pics/flag.jpg" alt="Flag" width="20px" height="20px"/></a></li>
                <li class="dropdown">
                    <a href="Account">Account & List <img src="Pics/Arrow.jpg" alt="Drop"/></a>
                    <div class="dropdown-content">
                        <a href="Account">Your Account</a>
                        <a href="Orders">Your Orders</a>
                        <a href="Lists">Your Lists</a>
                    </div>
                </li>
                <li><a href="Returns">Returns & Orders</a></li>
                <li><a href="Basket"><img src="Pics/Basket.jpg" alt="Basket" width="100px" height="50px"/></a></li>
            </ul>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);