import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div className='footer'>
            <div class="container">
                <div class="row">
                    <div class="col-5">
                        <h4 className='border-bottom border-danger border-2 w-25 text-center'>About Us</h4>
                        <small>Shop BD Is the Biggest Digital Online “Car Buy and Sell” Marketplace in Bangladesh. We Have the large Digital Cars Listing Inventory .ShopBD.com is one of the leading online platforms and marketplaces in Bangladesh for buying and selling cars online.</small>
                        <ul className='footerIcon'>
                            <li><a href="https://www.facebook.com/tauhid.rahman.921" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i></a></li>
                            <li><a href="http://" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a></li>
                            <li><i class="fab fa-linkedin"></i></li>
                            <li><i class="fab fa-twitter"></i></li>
                        </ul>
                    </div>
                    <div class="col">
                        <h4 className='border-bottom border-danger border-2 w-50 text-center'>My Account</h4>
                        <p className='border-bottom w-50'>My Account</p>
                        <p className='border-bottom w-50'>Order History</p>
                        <p className='border-bottom w-50'>Wish List</p>
                        <p className='border-bottom w-50'>Newsletter</p>
                    </div>
                    <div class="col">
                    <h4 className='border-bottom border-danger border-2 w-75 text-center'>Customer Service</h4>
                        <p className='border-bottom w-50'>Contact Us</p>
                        <p className='border-bottom w-50'>Returns</p>
                        <p className='border-bottom w-50'>Site Map</p>
                        <p className='border-bottom w-50'>Brands</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;