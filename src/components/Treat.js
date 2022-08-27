import React, {useState, useEffect} from 'react'
import {useParams, Link } from 'react-router-dom'
import menu_logo from '../images/treats.jpg'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux/es/exports'
import { addToCart } from '../features/cartSlice'
import { useNavigate } from 'react-router-dom'

const Treat = () => {
    const dispatch = useDispatch();
    const Navigate = useNavigate()
    const { id } = useParams()
    const[Treat, setTreat] = useState({})
  useEffect((()=>{
    fetch(`http://localhost:5000/Treat/${id}`)
          .then(response => response.json())
          .then(response => {
            setTreat(response)
          }).catch(error => {
            console.log("error", error)
       })
       
    
  }), [id])
  const handleAddToCart = (Treat)=>{
    dispatch(addToCart(Treat));
    Navigate("/Cart");

  };
  return (
    <div className='buckets_page'>
      <div className='buckets-wrapper'>
      <h1 className= 'kfc-head'>Treat details</h1>
      
          {Treat ? (
            Object.keys(Treat).length === 0 ?
              <>treat list is empty</>:
               (<>
                   <img src={menu_logo} alt={Treat["name"]}/>
                  <div style={{textAlign:'center'}}>Name: {Treat["name"]}</div>
                  <div style={{textAlign:'center'}}>Price: {Treat["price"]}</div>
               </>)
                
            ): <>treat not defined</>
          }
         <div className='Add'>
          <button onClick={()=>handleAddToCart(Treat)}><Link to ='/Cart'><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>Add to Cart</Link></button>
          </div>
      </div>
    
      </div>
  )
}

export default Treat