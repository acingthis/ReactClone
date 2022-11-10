import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

let slideIndex = 1;

class Container extends React.Component {

    SlideShow()
    {
        console.log("Click");
        const Slide = document.getElementById("SlideImage2");
        //issue
        //Slide.style.display = "block";
    }

    render()
    {

    return(
        <div>
            <div class="NavBar">
                <ul id='Nav1'>
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
                <ul id='Nav2'>
                    <li><a href="All"><img src="Pics/All.jpg" alt="="/>All</a></li>
                    <li><a href="Video">Prime Video</a></li>
                    <li><a href="Deals">Today's Deals</a></li>
                    <li class="dropdown">
                        <a href="Geocery">Grocery <img src="Pics/ArrowBlue.jpg" alt="\/"/></a>
                        <div class="dropdown-content">
                            <a href="Geocery">Link 1</a>
                        </div>
                    </li>
                    <li class="dropdown">
                        <a href="Prime">Prime <img src="Pics/ArrowBlue.jpg" alt="\/"/></a>
                        <div class="dropdown-content">
                            <a href="Prime">Link 1</a>
                        </div>
                    </li>
                    <li><a href="Again">Buy Again</a></li>
                    <li><a href="Delivery">Free Delivery</a></li>
                    <li><a href="Account">Amazon</a></li>
                    <li class="dropdown">
                        <a href="History">Browsing History <img src="Pics/ArrowBlue.jpg" alt="\/"/></a>
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
                <div class="slideshow-container">
                
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

            <div class="shoppingWindow">
                <div className='vids'>
                    <a href="https://www.amazon.co.uk/gp/video/detail/amzn1.dv.gti.4ca9f684-6eaf-181e-188e-91dad3b8e11c/?ie=UTF8&ref_=dvm_crs_gat_uk_xs_s_dk_hud_eg_al&pf_rd_r=DZ52A651YVSY5V39Z4H5&pf_rd_p=5e3d898a-5e70-461f-9fbe-52e13d252388&pd_rd_r=6b5d1308-a72e-4437-89da-1fb7acf8ddbc&pd_rd_w=WRqIu&pd_rd_wg=r3JZt">
                        <img src="Pics/Vid.jpg" alt='Items' />
                    </a>
                </div>
                <div className='Items'>
                    <img src="Pics/Items5.jpg" alt='Items' />
                </div>
                <div className='Items'>
                    <img src="Pics/Items6.jpg" alt='Items' />
                </div>
            </div>
        </div>
    );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Container />);