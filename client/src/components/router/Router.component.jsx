import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import './Router.css'

import Nav from '../nav'
import Home from '../home'
import Profile from '../profile'

const Router = () => (
  <BrowserRouter>
    <div className="main_container">
      <Nav />

      <Route path="/" exact component={Home} />
      <Route path="/:index" component={Profile} />
    </div>
  </BrowserRouter>
)

export default Router
