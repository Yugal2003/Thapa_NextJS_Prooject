import React from 'react'

const fetchApi = async()=>{
  const data = await fetch("https://fakestoreapi.com/products");
  const response = await data.json();
  return response;
}

const Product = async() => {

  const proData = await fetchApi();
  return (
    <div>
        <h1>Welcome To Product Page</h1>
        {
          proData.map((ele,index) =>{
            return(
              <div className="inline-block w-[30%] border-2 border-black mx-auto justify-center items-center" key={index}>
                  <h1>{ele.id}</h1>
              </div>
            )
          })
        }
    </div>
  )
}

export default Product