import 'rxjs'
import { Observable } from 'rxjs/Observable'
import { ajax } from 'rxjs/observable/dom/ajax'
import { compose, map, pick, prop } from 'ramda'
import { searched } from '../actions'
import { } from '../helpers'

const searchEpic = (action$, store) => action$.ofType('SEARCH')
	.switchMap(action => {
		const { term, order } = action.payload
		return ajax.getJSON(searchUrl(term, order))
	})
	.map(pickFields)
	.map(searched)

const searchUrl = (term, order) => 
	`https://api.github.com/search/users?q=${term}&sort=repositories&order=${order ? 'asc' : 'desc'}`

const pickFields = compose(
	map(pick(['login', 'avatar_url', 'html_url'])), 
	prop('items')
)

export default { searchEpic }
