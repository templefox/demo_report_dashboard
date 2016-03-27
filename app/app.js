import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import App from './Components/App'

import './css/styles.css';
import './css/level1.css'
import './css/reportCategory.css'
import './css/toolbar.css'
import './css/frame.css'

render(
	<App/>,
  document.getElementById('root')
)