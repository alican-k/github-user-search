import { __, compose, evolve } from 'ramda'
import { } from '../helpers'

const initialState = {
	users: [],
	status: 'NONE'			// LOADING, LOADED
}

const reducer = (state = initialState, action) => {
	switch (action.type) {

		case 'SEARCH' : 
			return { ...state, status: 'LOADING' }

		case 'SEARCHED': 
			return { ...state, users: action.payload, status: 'LOADED' }
		

		default:
			return state
	}
}

export default reducer
