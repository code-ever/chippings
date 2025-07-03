import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { RiTiktokFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bg-white py-6 w-full fixed bottom-0 left-0 z-50'>
            <div className='md:flex justify-between items-center px-10 gap-y-4'>
                <div className='flex items-center gap-x-3 justify-center md:justify-start text-xs md:text-sm'>
                    Arizonachipping © 2025 <p className='uppercase'>powered by arizona</p>
                </div>
                <div className='flex gap-x-4 py-4 md:py-1 justify-center md:justify-start'>
                    <p className='cursor-pointer'><FaInstagram size={20} /></p>
                    <p className='cursor-pointer'><FaFacebookF size={20} /></p>
                    <p className='cursor-pointer'><RiTiktokFill size={20} /></p>
                    <p className='cursor-pointer'><FaXTwitter size={20} /></p>
                </div>
            </div>
        </div>
    )
}

export default Footer

