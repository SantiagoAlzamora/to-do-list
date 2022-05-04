import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const[name,setName] = useState("")
  const[quantity,setQuantity] = useState(0)
  const [products, setProducts] = useState([])

  
  const addProduct = (e) =>{
    e.preventDefault();
    setProducts([
      ...products,
      {
        id: +new Date(),
        name:name,
        quantity:quantity,
        completed:false
      }
    ])
    setName("");
    setQuantity(0);
  }

  const deleteProduct= (id) => {
    setProducts(products.filter((p)=>{
      if(p.id !== id) return p
    }))
  }

  const completeProduct = (id) =>{
    setProducts((products)=>products.map((product)=>product.id===id ? {...product,completed:!product.completed}:product))
  }

  const productList = products.map((p) =>
    <li 
    key={p.id} 
    onClick={()=>completeProduct(p.id)} 
    >
      <section className={p.completed ? 'completed':''} >{p.name}</section>
      <section>{p.quantity}</section>
      <section><button className='button-delete-product' onClick={()=>deleteProduct(p.id)}>❌</button></section>
    </li>
  )

  return (
    <div className="container">
      <div className='content'>
        <h1>Lista Supermercado</h1>
        <section className='list'>
          <form className='form-item'>
            <input className='input-name' autoFocus type='text' name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Nombre del producto'/>
            <input className='input-quantity' type="number" name='quantity' value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder='cantidad' />
            <button className='buttons-form' type='submit' onClick={(e)=> addProduct(e)}> ✅ </button>
            <button className='buttons-form' type='button' onClick={()=> setProducts([])}>🗑️</button>
          </form>
          <ul className='section-content-list'>
            {productList}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
