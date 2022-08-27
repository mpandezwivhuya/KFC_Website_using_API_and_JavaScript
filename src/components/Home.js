import React from 'react'
import background from '../images/background.jpg'

const Home = () => {
  return (
    <div className='home'>
      <div className='hero'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <img src={background} alt=''/>
              <div className='content'>
              <h5 className='title'>New Season Has Arrived</h5>
              <p className='subtitle'>Check out our new menu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home