import React from 'react'

import './style.css'
import LandingImg from './images/poster.png'
import PosterImg from './images/poster-shared.png'

export default () => (
  <div className="landing">
    <img src={LandingImg} alt="" className="hidden-xs" />
    <img src={PosterImg} alt="" className="visible-xs" />
  </div>
)
