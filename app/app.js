import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Toolbar from './Components/toolbar'
import Sidebar from './Components/sidebar'
import Frame from './Components/content'
import App from './Components/App'

import './css/styles.css';
import './css/level1.css'
import './css/reportCategory.css'
import './css/toolbar.css'

render(
	<App/>,
  document.getElementById('root')
)