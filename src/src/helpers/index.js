import React from 'react'
import { 
	compose, curry, assoc, concat, join, juxt, merge, is,
	toUpper, head, tail, reduce, mapObjIndexed, values 
} from 'ramda'
import { withStateHandlers } from 'recompose'
import { connect } from 'react-redux'

export const simpleTextInputStateHandlers = (initials) => {
	const setCapitalize = compose(concat('set'), join(''), juxt([compose(toUpper, head), tail]))
	const setHandlers = (value, key) => assoc(value, props => val => assoc(key, val, {}), {})
	
	const ret = compose(
		reduce(merge,{}),
		values,
		mapObjIndexed(setHandlers),
		mapObjIndexed((value, key) => setCapitalize(key))
	)(initials)

	return withStateHandlers(initials, ret)
}

export const fConnect = curry(
	(mapStateToProps, mapDispatchToProps, Component) => {
		const Connected = connect(mapStateToProps, mapDispatchToProps)(Component)
		return props => <Connected {...props}/>
	}
)

export const surround = Surround => 
	Component => props => <Surround {...props}><Component/></Surround>

export const surroundWithDiv = divProps => {
	const p = is(String, divProps) ? ({ className: divProps }) : divProps
	return surround(({children}) => <div {...p}>{children}</div>)
}
