import React from 'react'
import { Observable } from 'rxjs'
import { compose, map, pick, prop } from 'ramda'
import Form from './Form'
import Results from './Results'

const Root = () => 
	<div className='root'>
		<Form />
		<Results />
	</div>

export default Root
