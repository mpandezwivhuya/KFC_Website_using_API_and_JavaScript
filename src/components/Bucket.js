import React, {useState, useEffect} from 'react'
import {useParams, Link } from 'react-router-dom'
import menu_logo from '../images/bucket.jpg'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux/es/exports'
import { addToCart } from '../features/cartSlice'
import { useNavigate } from 'react-router-dom'

const Bucket = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate()
    const { id } = useParams()
    const[Bucket, setBuckets] = useState({})
  useEffect((()=>{
    fetch(`http://localhost:5000/Bucket/${id}`)
          .then(response => response.json())
          .then(response => {
            setBuckets(response)
          }).catch(error => {
            console.log("error", error)
       })
       
    
  }), [id])
  const handleAddToCart = (Bucket)=>{
    dispatch(addToCart(Bucket));
    Navigate("/Cart");

  };
  return (
    <div className='buckets_page'>
      <div className='buckets-wrapper'>
      <h1 className= 'kfc-head'>Bucket details</h1>
      
          {Bucket ? (
            Object.keys(Bucket).length === 0 ?
              <>bucket list is empty</>:
               (<>
                   <img src={menu_logo} alt={Bucket["meat"]}/>
                  <div style={{textAlign:'center'}}>pieces: {Bucket["meat"]}</div>
                  <div style={{textAlign:'center'}}>Name: {Bucket["name"]}</div>
                  <div style={{textAlign:'center'}}>Price: {Bucket["price"]}</div>
               </>)
                
            ): <>bucket not defined</>
          }
          <div className='Add'>
          <button onClick={()=>handleAddToCart(Bucket)}><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon><Link to ='Cart'>Add to Cart</Link></button>
          </div>
      </div>
      </div>
  )
}

export default Bucket