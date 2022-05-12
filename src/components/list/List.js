import React, { useState } from 'react'
import { Item } from './../item/Item';

const List = () => {

  const[name,setName] = useState("")
  const[quantity,setQuantity] = useState("")
  const[price, setPrice] = useState("")
  const[total, setTotal] = useState(0)
  const [products, setProducts] = useState([])

  const addProduct = (e) =>{
    e.preventDefault();
    if(name === "" || quantity === "") return
    setProducts([
      ...products,
      {
        id: +new Date(),
        name:name,
        quantity:quantity,
        price:price,
        completed:false
      }
    ])
    setTotal(total + price*quantity)
    setName("");
    setQuantity("");
    setPrice("")
  }

  const deleteProduct= (id) => {
    setProducts(products.filter((p)=>{
      if(p.id !== id){
        return p
      }
      setTotal(total-(p.price*p.quantity))
    }))
  }

  

  const completeProduct = (id) =>{
    setProducts((products)=>products.map((product)=>product.id===id ? {...product,completed:!product.completed}:product))
  }

  const productList = products.map((p) =><Item key={p.id} product={p} completeProduct={completeProduct} deleteProduct={deleteProduct}/>)

  return (
    <div className='content'>
        <h1>Lista Supermercado</h1>
        <section className='list'>
          <form className='form-item'>
            <input className='input-name' autoFocus type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Nombre del producto'/>
            <input className='input-quantity' type="number" name='quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder='0' />
            <input className='input-quantity' type="number" name='price' value={price} onChange={(e) => setPrice(e.target.value)} placeholder='precio' />
            <button className='buttons-form' type='submit' onClick={(e)=> addProduct(e)}> ✅ </button>
            <button className='buttons-form' type='button' onClick={()=> {setProducts([]); setTotal(0)}}>🗑️</button>
          </form>
          <ul className='section-content-list'>
            {productList}
          </ul>
          <span >total: ${total}</span>
        </section>
      </div>
  )
}

export default List;
