import React from 'react'

import Router from './components/router'
import { StateProvider } from './store'

const App = () => (
  <StateProvider>
    <Router />
  </StateProvider>
)

export default App
