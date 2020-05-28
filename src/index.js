import 'bootstrap/dist/css/bootstrap.css'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'

import Landing from './landing'
import { register } from './serviceWorker'

ReactDOM.render(
  <Router hashType="noslash">
    <Landing />
  </Router>,
  document.getElementById('root')
)

register()
