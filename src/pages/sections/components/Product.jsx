import React from 'react'
import Card from 'react-bootstrap/Card';

export default function Product({productObj}) {
  return (
    <Card style={{ minWidth: '12rem', marginTop : 20 }}>
      <Card.Img variant="top" src={productObj.thumbnail} height={100} />
      <Card.Body>
        <Card.Title>{productObj.title}</Card.Title>
        <Card.Text>
         {productObj.description}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
