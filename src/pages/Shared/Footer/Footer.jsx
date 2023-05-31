import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <img className='w-14 h-14' src="/soccer-ball-42427.png" alt="" />
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
        </div>
    );
};

export default Footer;