import React, {useState, useEffect} from 'react'
import sweet from '../images/sweetchill.jpg'
import boxmaster from '../images/boxmaster.png'
import classic from '../images/classic.JPG'
import Wrapsta from '../images/wrapsta.jpg'
import '../Style/twister.css'
import { Link } from 'react-router-dom'


const Twisters = () => {
  const[Twisters, setTwisters] = useState([])
  useEffect((()=>{
    fetch('http://localhost:5000/Twisters/')
          .then(response => response.json())
          .then(response => {
            setTwisters(response["Twisters"])
          }).catch(error => {
            console.log("error", error)
       })
       
    
  }), [])
  return (
      <div className='bucket_page'>
      
      <h1 className= 'kfc-header'>CHOOSE THE TWISTER THAT YOU WANT</h1>
      <hr/>
      <div className='twister-wrapper'>
      <ul>
      <li><img className='wrapsta' src={Wrapsta} alt=''/></li>
      <li><img className='boxmaster' src={boxmaster} alt=''/></li>
      <li><img className='classic' src={classic} alt=''/></li>
      <li><img className='sweet' src={sweet} alt=''/></li>
      </ul>
      </div>
    
        <ul id='ol'>
          {Twisters ?
            (Twisters.length === 0 ?
              <>twisters is empty</> :
              Twisters.map(Twister => (
                <li  key={Twister["id"]} >
                  <Link id ='button' to={`/Twister/${Twister["id"]}`}> {Twister["name"]}</Link></li>
              ))

          ):
          <>variable not defined</>
        }
          </ul>
      
      </div>
   
  )
}

export default Twisters;
