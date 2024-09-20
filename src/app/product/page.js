import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const fetchApi = async () => {
  const data = await fetch('https://fakestoreapi.com/products');
  const response = await data.json();
  // console.log(response);
  return response;
};

const Product = async () => {
  const proData = await fetchApi();
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl mt-4 font-bold mb-8">Welcome To Product Page</h1>
      {/* Responsive Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center w-full max-w-7xl mx-auto">
        {proData.map((ele, index) => {
          return (
            <div
              className="border-2 border-white rounded-2xl p-4 flex flex-col justify-center items-center text-center h-78"
              key={index}
            >
              <h1 className="font-bold">NO : {ele.id}</h1>
              <h2 className="font-medium text-lg">{ele.title.substring(0,20)}</h2>
              <h3 className="text-lg">Price : ${ele.price}</h3>
              <Image src={ele.image} alt={ele.title} height={80} width={100} className="my-4" />
              <h3 className="text-md font-semibold">{ele.category}</h3>
              <Link href={`/product/${ele.id}`}><button className='mt-2 p-1 bg-red-600 text-white border-2 border-black rounded-lg'>Show Demo</button></Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;