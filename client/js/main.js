import React from 'react'
import Hello from './components/Hello'

import {render} from 'react-dom'

setInterval( () => {
	render(<Hello date = {new Date()}/>,document.getElementById('app'));
},500)