// import React from 'react'
// import img1 from '../assets/logo.png'
// import Image from 'next/image';
// import Link from 'next/link';

// const Header = () => {
//   return (
//     <div>
//         <div className="w-[85%] flex flex-row justify-between mx-auto mt-4">
//             {/* title image */}
//             <div>
//                 <Image src={img1} alt="logo_image" width="200" height="200"/>
//             </div>

//             {/* navlink li */}
//             <div className="text-center justify-center items-center flex flex-row">
//                <ul className="flex flex-row gap-10 text-lg">
//                 <li>
//                     <Link href="/">Home</Link>
//                 </li>
//                 <li>
//                     <Link href="/product">Product</Link>
//                 </li>
//                 <li>
//                     <Link href="/about">About</Link>
//                 </li>
//                 <li>
//                     <Link href="/contact">Contact</Link>
//                 </li>
//                </ul>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Header;



// after loading code start


"use client"
import React, { useState, useEffect } from 'react';
import img1 from '../assets/logo.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
  const [loading, setLoading] = useState(false);  // Manage loader visibility
  const router = useRouter();

  // Handle navigation with delay to show loader
  const handleNavigation = (path) => {
    setLoading(true);  // Show loader
    setTimeout(() => {
      setLoading(false);  // Hide loader after 2 seconds
      router.push(path);  // Navigate to the selected path
    }, 500);  // 2-second delay
  };

  return (
    <div>
      <div className="w-[85%] flex flex-row justify-between mx-auto mt-4">
        {/* title image */}
        <div>
          <Link href="/"><Image src={img1} alt="logo_image" width="200" height="200" /></Link>
        </div>

        {/* navlink li */}
        <div className="text-center justify-center items-center flex flex-row">
          <ul className="flex flex-row gap-10 text-lg">
            <li>
              <a onClick={() => handleNavigation('/')}>Home</a>
            </li>
            <li>
              <a onClick={() => handleNavigation('/product')}>Product</a>
            </li>
            <li>
              <a onClick={() => handleNavigation('/about')}>About</a>
            </li>
            <li>
              <a onClick={() => handleNavigation('/contact')}>Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Show loader if loading is true */}
      {loading && (
        <div className='flex justify-center items-center min-h-screen'>
            {/* <div className="loader"></div> */}
            <div class="lds-hourglass"></div>
        </div>
      )}
    </div>
  );
};

export default Header;
