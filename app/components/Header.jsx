import React from 'react'
import Navbar from './Navbar';
import Link from 'next/link';

const Header = () => {
    return (
        <div className="w-full flex flex-col bg-black">
            {/* Top Bar */}
            <div className="w-full flex flex-wrap items-center justify-between p-5">
                <Link href='/'>
                    <h1 className="text-white font-extralight tracking-widest text-2xl">
                        TANN TRIM
                    </h1>
                </Link>

                {/* Icon Menu (Responsive Spacing) */}
                <Navbar />
            </div>

            {/* Navigation Links (Center aligned and responsive) */}
            <div className="w-full flex justify-center px-4">
                <ul className="flex flex-wrap justify-center text-white gap-6 sm:gap-10 text-sm sm:text-base tracking-wide">
                    <li>Bags</li>
                    <li>Travel</li>
                    <li>Accessories</li>
                    <li>Gifting</li>
                    <li>Jewelry</li>
                </ul>
            </div>
        </div>

    )
}

export default Header;