import React from 'react'
import { connect } from 'react-redux'
import { surroundWithDiv } from '../helpers'
import { compose, branch, renderComponent as render } from 'recompose'
import { prop, propEq } from 'ramda'

const Initial = () => '~ ~ Use the form above to search ~ ~'

const Loading = () => 'Loading . . .'

const Loaded = ({users}) => 
	users.map((user, index) => User({key: index, user}))

const User = ({ user }) =>
	<div className='user'>
		<img src={user.avatar_url} />
		<a href={user.html_url}>{user.login}</a>
	</div>

export default compose(
	surroundWithDiv('results'),
	connect(prop('main'), {}),
	branch(propEq('status', 'NONE'), render(Initial)),
	branch(propEq('status', 'LOADING'), render(Loading))	
)(Loaded)