import React from 'react';

const Footer = () => {
    return (

        <div className='border-t-2 border-gray-200'>
            <div className='container mx-auto'>
                <footer className="footer p-10  text-base-content ">
                    <div>
                        <img className='w-16 h-16 ' src="/logo.png" alt="" />
                        <p>At Dish Diary, we are passionate about <br /> bringing you the best and most delicious recipes</p>
                    </div>
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Breakfast and Brunch</a>
                        <a className="link link-hover">Soups and Salads</a>
                        <a className="link link-hover">Vegetarian and Vegan</a>
                        <a className="link link-hover">Baking and Desserts</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Order recipes</a>
                        <a className="link link-hover">Find us</a>
                    </div>
                    <div>
                        <span className="footer-title">Legal</span>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </div>
                </footer>
                <div className='text-center flex justify-center item-center border-t-2 border-gray-600 py-5'>
                    <h2>Copyright © 2023 Dish Diary. All rights reserved.</h2>
                </div>
            </div>
        </div>
    );
};

export default Footer;