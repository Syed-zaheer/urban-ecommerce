import Link from 'next/link'
import React from 'react'

function ProductCard({ image, title, des }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <figure> <img src={image} alt="Shoes" style={{width: '24vh'}} /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{des}</p>
    <div className="card-actions justify-between">
      <button className="btn btn-primary">View</button>
      <Link href={'/checkout'} className="btn btn-primary">Checkout</Link>
    </div>
  </div>
</div>
  )
}

export default ProductCard