import React from 'react'

export const Item = ({product,completeProduct,deleteProduct}) => {

    

  return (
    <li 
    key={product.id} 
    onClick={()=>completeProduct(product.id)} 
    >
      <section className={product.completed ? 'completed':''} >{product.name}</section>
      <section>{product.quantity}</section>
      <section><button className='button-delete-product' onClick={()=>deleteProduct(product.id)}>❌</button></section>
    </li>
  )
}
