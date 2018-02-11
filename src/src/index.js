import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import RootComponent from './components'
import './style.css'

const App = () => 
	<Provider store={store}>
		<RootComponent/>
	</Provider>

export default App
