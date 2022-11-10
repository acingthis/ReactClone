import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

let slideIndex = 1;

function SlideShow()
{
    document.getElementById("SlideImage2").style.display = "block";
}

function Container() {

    return(
        <div>
            <div class="NavBar">
                <ul>
                    <li><a href="Home"><img src="Pics/Logo.jpg" alt="Amazon"/></a></li>
                    <li><a href="Location">Deliver to?</a></li>
                    <li><a><input name='SearchBar' type="text" placeholder="Search.."/></a></li>
                    <li><a href="Country"><img src="Pics/flag.jpg" alt="Flag" width="20px" height="20px"/></a></li>
                    <li class="dropdown">
                        <a href="Account">Account & List <img src="Pics/Arrow.jpg" alt="\/"/></a>
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
            <div class="NavBar">
                <ul>
                    <li><a href="All"><img src="Pics/All.jpg" alt="="/>All</a></li>
                    <li><a href="Video">Prime Video</a></li>
                    <li><a href="Deals">Today's Deals</a></li>
                    <li class="dropdown">
                        <a href="Geocery">Grocery <img src="Pics/Arrow.jpg" alt="\/"/></a>
                        <div class="dropdown-content">
                            <a href="Geocery">Link 1</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="Prime">Prime <img src="Pics/Arrow.jpg" alt="\/"/></a>
                        <div class="dropdown-content">
                            <a href="Prime">Link 1</a>
                        </div>
                    </li>
                    <li><a href="Again">Buy Again</a></li>
                    <li><a href="Delivery">Free Delivery</a></li>
                    <li><a href="Account">Amazon</a></li>
                    <li class="dropdown">
                        <a href="History">Browsing History <img src="Pics/Arrow.jpg" alt="\/"/></a>
                        <div class="dropdown-content">
                            <a href="History">Link 1</a>
                        </div>
                    </li>
                    <li><a href="GiftCards">Gift cards & Top Up</a></li>
                    <li><a href="Vouchers">Vouchers</a></li>
                    <li><a href="Shopper">Shopper Toolkit</a></li>
                </ul>
            </div>
            
            <div id='SlideShow'>
                <div class="slideshow-container" onLoad={SlideShow}>
                
                    <div class="mySlides fade">
                        <img className='SlideImage1' src="Pics/Slide1.jpg" alt='Slide1' width="100%" />
                    </div>

                    <div class="mySlides fade">
                        <img className='SlideImage2' src="Pics/Slide2.jpg" alt='Slide2' width="100%" />
                    </div>

                    <div class="mySlides fade">
                        <img className='SlideImage3' src="Pics/Slide3.jpg" alt='Slide3' width="100%" />
                    </div>
                </div>
            </div>

            <div class="shoppingWindow">
                <div className='Items'>
                    <img src="Pics/Items1.jpg" alt='Items' />
                </div>
                <div className='Items'>
                    <img src="Pics/Items2.jpg" alt='Items' />
                </div>
                <div className='Items'>
                    <img src="Pics/Items3.jpg" alt='Items' />
                </div>
                <div className='Items'>
                    <img src="Pics/Items4.jpg" alt='Items' />
                </div>

            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);