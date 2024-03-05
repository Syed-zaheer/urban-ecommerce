'use client'
import React, { useEffect, useState } from 'react';
import ProductCard from '../ui/common/productsCard';

function ProductsPage({cat}) {

    const [products, setproducts] = useState([])
    const [mobiles, setMobiles] = useState([])
    const cats = {
      laptops: 'Laptops',
      smartphones: 'Mobile Phones',
      skincare: 'Skin Care',
      'home-decoration': "Home Decors"

    }

console.log('Products----->', products)
    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${cat}?limit=10`)
        .then((res) => res.json())
        .then((data) => {
        setMobiles([data]);
        })
      }, [])

    //   useEffect(() => {
    //     const filteredProducts = products[0]?.products.filter((p) =>  p.category == `${cat}`)
    //     setMobiles(filteredProducts)
    //   }, [products])
  return (
    <div>
        <h1>{cats[cat]}</h1>
        <div className='flex gap-8'>
        {mobiles?.[0]?.products?.map((mobile)=>{
          console.log('mobile ====>>>', mobile)
          return(<ProductCard image={mobile?.images?.[0] || ''} title={mobile?.title || ''} des={mobile?.description || ''} />)
        })}
        </div>
    </div>
  )
}

export default ProductsPage