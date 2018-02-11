import { values } from 'ramda'
import 'rxjs'
import { Observable } from 'rxjs/Observable'
import { combineEpics } from 'redux-observable'
import { startup } from '../actions'
import mainEpics from './main'

export default combineEpics(
	...values(mainEpics),
)
