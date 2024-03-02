import React, { useEffect, useState } from 'react';
import About from './About'

export default function Home() {
  
const [products,setproducts]=useState([])
const getuser = async () =>{
  const response = await fetch ('https://dummyjson.com/products')
  console.log (response)
  const data = await response.json()
  setproducts (data.products)
}


useEffect (()=>{
  getuser();
} , []);



  return (


    <>
    <div className="container">
      <div className="row">
        {
          products.map((curelem)=>{
            return (
              <div className="col-md-4" key={curelem.id}>

                <About   title={curelem.title} description ={curelem.description} thumbnail={curelem.thumbnail}/>
              </div>
            )
          })
        }
      </div>
    </div>
    
    
    </>

   
  )
}
