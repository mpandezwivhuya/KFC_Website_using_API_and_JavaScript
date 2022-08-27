import React from 'react'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import Kfc_logo from '../images/kfc-logo.png'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const {cartTotalQuantity} = useSelector(state => state.cart);
  return (
    <div className='header'>
      <div className='container'>
        <div className=' top row'>
          <div className='col'>
            <div className='topDiv'>
              <FontAwesomeIcon className='icon' icon = {faPhone}></FontAwesomeIcon>
              <span>+27631269547</span>
            </div>
            <div className='topDiv'>
            <FontAwesomeIcon className='icon' icon = {faEnvelope}></FontAwesomeIcon>
              <span>mpandezwivhuya@gmail.com</span>
            </div>
          </div>
          <div className='col'>
          <div className='topDiv'>
            <Link style={{color:'blue'}} to='/'><FontAwesomeIcon className='icon' icon = {faFacebook}></FontAwesomeIcon></Link>
            <Link style={{color:'orange'}} to='/'><FontAwesomeIcon className='icon' icon = {faInstagram}></FontAwesomeIcon></Link>
            <Link style={{color:'blue'}} to='/'><FontAwesomeIcon className='icon' icon = {faTwitter}></FontAwesomeIcon></Link>  
            </div>
          </div>
        </div>
      </div>
      <div className='middle row'>
        <div className='col'>
          <Link to='/'><img src={Kfc_logo} alt=''/></Link>
        </div>
        <div className='col'>
          <div className='nav'>
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/Menu'>Menu</Link></li>
              <li><Link to='/About'>About</Link></li>
              <li><Link to='/Contact'>Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className='col'>
          <div className='buttons'>
            <Link to='/Cart'>Cart<FontAwesomeIcon className='icon' icon = {faCartShopping} ></FontAwesomeIcon><span className='cart-quantity'><span>{cartTotalQuantity}</span></span></Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header