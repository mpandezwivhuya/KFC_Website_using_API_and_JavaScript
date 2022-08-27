import React from 'react'
import Bucket_pic from '../images/bucket.jpg'
import twisters_pic from '../images/twisters.jpg'
import treats_pic from '../images/treats.jpg'
import {Link} from 'react-router-dom'

const Menu = () => {
  return (
    <div className='menu'>

      <h1>KFC MENU</h1>
      <hr/>
      <div className='container'>
      
        <ul>
          
         <li ><img className='bucket_pic' src={Bucket_pic} alt = ''/><Link to='/Buckets'><button className='btn'>Buckets</button></Link></li>
         <li><img className='twisters_pic' src={twisters_pic} alt = ''/><Link to ='/Twisters'><button className='btn'>Twisters</button></Link></li>
         <li><img className='treats_pic' src={treats_pic} alt = ''/><Link to ='/Treats'><button className='btn'>Treats</button></Link></li>
        </ul>
        
        </div>      
    </div>
  )
}

export default Menu