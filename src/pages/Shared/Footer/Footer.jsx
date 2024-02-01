import React from 'react';
import bg3 from '/footer2.jpg';

const Footer = () => {
    return (
        
            <footer className="footer p-10 bg-base-200 text-base-content"style={{ backgroundImage: `url(${bg3})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className='font-bold'>
                    <img className='w-14 h-14' src="/logo.png" alt="" />
                    <p>Awesome Toys Ltd.<br />Providing awesome toys since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Pre-book</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Home-delivery</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Contact</span>
                    <p>40/3 Banani, Dhaka</p>
                    <p>email: awesomeToys@gmail.com</p>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        
    );
};

export default Footer;