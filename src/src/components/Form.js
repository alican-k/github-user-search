import React from 'react'
import { pick } from 'ramda'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { search } from '../actions'
import { simpleTextInputStateHandlers } from '../helpers'

const Form = ({ error, setError, term, order, setTerm, setOrder, search }) =>
	<form onSubmit={e => {
		e.preventDefault()
		if(term && term.length > 2) {
			search(term, order)
			setError('')
		} else {
			setError('* Enter at least 3 char')
		}
	}}>

		<div className='error'>{error}</div>

		<input 
			type='text'
			placeholder='Search here'
			value={term} 
			onChange={e => setTerm(e.target.value)}
		/>

		<a className='order' onClick={() => setOrder(!order)}>
			<span>{order ? 'ASC' : 'DESC'}</span>
			<br/>
			click to change order
		</a>

		<input type='submit' value='search' />
	</form>

export default compose(
	connect(({ main }) => pick(['term', 'order']), { search }),
	simpleTextInputStateHandlers({term: '', order: false, error: ''}),
)(Form)