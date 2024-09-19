import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSection = ({title,imageUrl}) => {
  return (
    <div className="w-[90%] mx-auto">
        <div className="flex flex-row justify-between items-center w-[100%] mx-auto my-12">
            {/* text */}
            <div className="text-center justify-center items-center flex flex-col w-[50%]">
                <h1 className="text-3xl">{title}</h1>
                <h4 className="w-[70%] my-4">
                    From award-winning dramas to blockbuster action movies, we have got you covered. Browse our selection of the latest and greatest movies, and find your new favorite today.
                </h4>
                <Link href="/product">
                    <button className="border-none bg-red-500 p-1 rounded-lg">Explore Products</button>
                </Link>
            </div>

            {/* img */}
            <div>
                <Image src={imageUrl} alt="logo" width="400" height="400" />
            </div>
        </div>
    </div>
  )
}

export default HeroSection