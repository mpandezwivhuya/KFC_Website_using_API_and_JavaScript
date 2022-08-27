import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import oreo from '../images/oreo.jpg'
import krusher from '../images/krusher.jpg'
import verry from '../images/verry.jpg'
import strawberry from '../images/strawberry.jpg'
import '../Style/Treat.css'

const Treats = () => {
  const[Treats, setTreats] = useState([])
  useEffect((()=>{
    fetch('http://localhost:5000/Treats/')
          .then(response => response.json())
          .then(response => {
            setTreats(response["Treats"])
          }).catch(error => {
            console.log("error", error)
       })
       
    
  }), [])
  return (
      <div className='bucket_page'>
      
      <h1 className= 'kfc-header'>CHOOSE THE TREAT THAT YOU WANT</h1>
      <hr/>
      <div className='treat-wrapper'>
      <ul>
          <img style={{width: 320, height: 380, marginLeft:930}} className='krusher' src={krusher}  alt=''/>
          <img style={{position: 'absolute', left:720, width:220, height:300, top: 240}} className='oreo' src={oreo} alt=''/>
          <img style={{position: 'absolute', left:100, width:270, height:350}}  className='verry' src={verry}  alt=''/>
          <img style={{position: 'absolute', left:450, width:240, height:330, top: 230}}  className='strawberry' src={strawberry} alt=''/>
      

      </ul>
      </div>
    
        <ul id='ul'>
          {Treats ?
            (Treats.length === 0 ?
              <>bucket list is empty</>:
              Treats.map(Treat => (
                <li  key={Treat["id"]} >
                  <Link id ='button' to={`/Treat/ ${Treat["id"]}`}> {Treat["name"]}</Link></li>
                  
              )) ):
              <>variable not defined</>
          }
          </ul>
      
      </div>
   
  )
}

export default Treats;
