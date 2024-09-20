// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// const HeroSection = ({title,imageUrl}) => {
//   return (
//     <div className="w-[90%] mx-auto">
//         <div id='bg-img' className="flex flex-row justify-between items-center w-[100%] mx-auto my-12">
//             {/* text */}
//             <div className="text-center justify-center items-center flex flex-col w-[50%]">
//                 <h1 className="text-4xl">{title}</h1>
//                 <h4 className="w-[70%] my-4">
//                     From award-winning dramas to blockbuster action movies, we have got you covered. Browse our selection of the latest and greatest movies, and find your new favorite today.From award-winning dramas to blockbuster action movies, we have got you covered. Browse our selection of the latest and greatest movies, and find your new favorite today.
//                 </h4>
//                 <Link href="/product">
//                     <button className="border-none bg-red-500 p-1 rounded-lg">Explore Products</button>
//                 </Link>
//             </div>

//             {/* img */}
//             <div>
//                 <Image src={imageUrl} alt="logo" width="400" height="400" />
//             </div>
//         </div>
//     </div>
//   )
// }

// export default HeroSection



// code for bg-image start

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroSection = ({title, imageUrl}) => {
  return (
    <div className="w-[90%] mx-auto relative">
      {/* Background image container */}
      <div id='bg-img' className="flex flex-row justify-between items-center w-[100%] mx-auto my-12 bg-cover bg-center relative" style={{ backgroundImage: `url('/path-to-your-background-image.jpg')` }}>
        
        {/* text section */}
        <div className="text-center justify-center items-center flex flex-col w-[50%] bg-indigo-500 bg-opacity-70 p-8 rounded-lg py-24">
          <h1 className="text-4xl">{title}</h1>
          <h4 className="w-[70%] my-4">
            From award-winning dramas to blockbuster action movies, we have got you covered. Browse our selection of the latest and greatest movies, and find your new favorite today. From award-winning dramas to blockbuster action movies, we have got you covered. Browse our selection of the latest and greatest movies, and find your new favorite today.
          </h4>
          <Link href="/product">
            <button className="border-none bg-red-500 p-2 rounded-lg">Explore Products</button>
          </Link>
        </div>

        {/* Image */}
        <div>
          <Image src={imageUrl} alt="logo" width="400" height="400" />
        </div>

        {/* Custom shape divider */}
        <div className="custom-shape-divider-bottom-1726815568">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

// code for bg-image end