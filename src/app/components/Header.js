import React from 'react'
import img1 from '../assets/logo.png'
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <div>
        <div className="w-[85%] flex flex-row justify-between mx-auto mt-4">
            {/* title image */}
            <div>
                <Image src={img1} alt="logo_image" width="200" height="200"/>
            </div>

            {/* navlink li */}
            <div className="text-center justify-center items-center flex flex-row">
               <ul className="flex flex-row gap-10 text-lg">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/product">Product</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
               </ul>
            </div>
        </div>
    </div>
  )
}

export default Header;