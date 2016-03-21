import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import './Styles/style.css';
import App from './Components/leafItem'
import Toolbar from './Components/toolbar'
import Sidebar from './Components/sidebar'
import Frame from './Components/content'

render(
	<div>
		<Sidebar/>
		<Toolbar/>
		<Frame />
	  <App className="warning">
	    a
	  </App>
  	</div>,
  document.getElementById('root')
)