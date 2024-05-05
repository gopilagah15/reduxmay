import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
  const result = useSelector((state)=>state.cartData);
  console.log('data on header', result)
  return (
    <div className='Header'>
        <div className="cart-div">
            <span>{result.length}</span>
            <img src="https://tse4.mm.bing.net/th?id=OIP.1eWosz_YYbf4eiJHQicDVQHaGE&pid=Api&P=0&h=180" alt="" />
        </div>
      
    </div>
  )
}

export default Header
