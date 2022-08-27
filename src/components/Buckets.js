import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import many_piece from '../images/many.jpg'
import few_piece from '../images/few_piece.jpeg'
import fewer_piece from '../images/fewer_piece.jpeg'
import '../Style/bucket.css'

const Buckets = () => {
  const[Buckets, setBucket] = useState([])
  useEffect((()=>{
    fetch('http://localhost:5000/Buckets/')
          .then(response => response.json())
          .then(response => {
            setBucket(response["Buckets"])
          }).catch(error => {
            console.log("error", error)
       })
       
    
  }), [])
  return (
      <div className='bucket_page'>
      
      <h1 className= 'kfc-header'>CHOOSE THE BUCKET THAT YOU WANT</h1>
      <hr/>
      <div className='bucket-wrapper'>
      <ul>
      <li><img className='many_piece' src={many_piece} alt=''/></li>
      <li><img className='few_piece' src={few_piece} alt=''/></li>
      <li><img className='fewer_piece' src={fewer_piece} alt=''/></li>
      </ul>
      </div>
    
        <ul id='ol'>
          {Buckets ?
            (Buckets.length === 0 ?
              <>bucket list is empty</>:
              Buckets.map(Bucket => (
                <li  key={Bucket["id"]} >
                  <Link id ='button' to={`/Bucket/ ${Bucket["id"]}`}>{Bucket["meat"]}    {Bucket["name"]}</Link></li>
                  
              )) ):
              <>variable not defined</>
          }
          </ul>
      
      </div>
   
  )
}

export default Buckets;
