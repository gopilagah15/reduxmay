import React from 'react'
import { EmptyCart, RemoveToCart, addToCart } from '../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { productList } from '../redux/productAction'

const Main = () => {
  const dispatch = useDispatch();
  let data = useSelector((state)=>state.productData);
  console.log('data in main component', data);
  const product= {
    name: 'Iphone',
    type:'Mobile',
    price:'10000',
    color:'red'
  }
  
  return (
    <div className="">
    <div>
      <button onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
    </div>
    <div>
      <button onClick={()=>dispatch(RemoveToCart(product.name))}>Remove from Cart</button>
    </div>
    <div>
      <button onClick={()=>dispatch(EmptyCart())}>Empty Cart</button>
    </div>
    <div>
      <button onClick={()=>dispatch(productList())}>Call product List</button>
    </div>
    </div>
  )
}

export default Main



