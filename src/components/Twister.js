import React, {useState, useEffect} from 'react'
import {useParams, Link } from 'react-router-dom'
import menu_logo from '../images/twisters.jpg'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux/es/exports'
import { addToCart } from '../features/cartSlice'
import { useNavigate } from 'react-router-dom'

const Twister = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate()
    const { id } = useParams()
    const[Twister, setTwister] = useState({})
  useEffect((()=>{
    fetch(`http://localhost:5000/Twister/${id}`)
          .then(response => response.json())
          .then(response => {
            setTwister(response)
          }).catch(error => {
            console.log("error", error)
       })
       
    
  }), [id])
  const handleAddToCart = (Twister)=>{
    dispatch(addToCart(Twister));
    Navigate("/Cart");

  };
  return (
    <div className='buckets_page'>
      <div className='buckets-wrapper'>
      <h1 className= 'kfc-head'>Twister details</h1>
      
          {Twister ? (
            Object.keys(Twister).length === 0 ?
              <>twister list is empty</>:
               (<>
                   <img src={menu_logo} alt={Twister["name"]}/>
                  <div style={{textAlign:'center'}}>pieces: {Twister["meat"]}</div>
                  <div style={{textAlign:'center'}}>Name: {Twister["name"]}</div>
                  <div style={{textAlign:'center'}}>Price: {Twister["price"]}</div>
               </>)
                
            ): <>twister not defined</>
          }
          <div className='Add'>
          <button onClick={()=> handleAddToCart(Twister)}><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon><Link to ='Cart'>Add to Cart</Link></button>
          </div>
      </div>
      </div>
  )
}

export default Twister