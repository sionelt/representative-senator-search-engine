import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Home.css'

const Home = () => (
  <div className="home_container m-3 d-flex justify-content-center align-items-center flex-column">
    <FontAwesomeIcon icon="landmark" size="3x" className="text-primary" />
    <h3 className="my-4 text-center">Who represents You in the U.S. Congress</h3>
  </div>
)

export default Home
