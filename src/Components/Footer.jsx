import React from 'react';
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className=" bg-[#B1E3D5] dark:bg-gray-900  dark:text-white">
            <footer className="footer w-11/12 mx-auto py-10 text-base-content dark:bg-gray-900  dark:text-white ">
                <aside>
                    <p>
                    StudyCircle Industries Ltd.
                        <br />
                        Providing reliable tech since 1992
                    </p>
                    <span>Join with us</span>
                    <p className='text-xl flex space-x-4'>
                        <Link><FaFacebook /></Link>
                        <Link><FaInstagram /></Link>
                        <Link><FaTwitter /></Link>
                        <Link><FaWhatsapp /></Link>
                    </p>

                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>

            </footer>
            
            <hr />
        
            <footer className="footer footer-center py-8">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by StudyCircle Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;