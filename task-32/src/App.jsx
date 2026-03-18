import React from 'react'
import { useEffect, useState } from "react";
import productsData from "./product";
import "./index.css"

function App() {
  const [products,setProducts]=useState([]);
  useEffect(()=>{
    setProducts(productsData);
  },[])
  return (
    <div>
      <h1 className='heading'>Məhsullar</h1>

          <div className="products-container">
          {products.map((product) => (
              <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h2>{product.name}</h2>
              <p>{product.price} AZN</p>
          </div>
        ))}
          </div>
    </div>
  )
}

export default App
