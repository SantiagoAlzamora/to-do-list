import React from 'react'

export const Item = ({product,completeProduct,deleteProduct}) => {

 
  let subTotal = product.price*product.quantity
  

  return (
    <li 
    key={product.id} 
    
    >
      <section onClick={()=>completeProduct(product.id)}  className={product.completed ? 'completed':''} >{product.name}</section>
      <section>{product.quantity}</section>
      <section>{"$"+product.price}</section>
      <section>{"$"+subTotal}</section>
      <section><button className='button-delete-product' onClick={()=>deleteProduct(product.id)}>❌</button></section>
    </li>
  )
}
