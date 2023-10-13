import React from 'react'
import Product from './components/Product'

export default function ProductSection({data}) {
  // console.log(data)
  return (
<div>
<div className='products-section'>
      {
        data.map(function(value, index){
          return <Product key={index} productObj={value}/>
        })
      }
    </div>

    <div className='products-section'>
      {
        data.map(function(value, index){
          return <Product key={index} productObj={value}/>
        })
      }
    </div>
</div>
  )
}
