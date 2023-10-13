import React from 'react'
import ProductSection from './sections/ProductSection'
import Header from './sections/Header'
import data from '../data/products.json';

export default function HomePage() {
  return (
    <div>
      HomePage
      <Header/>
      <ProductSection data={data.products}/>
    </div>
  )
}
