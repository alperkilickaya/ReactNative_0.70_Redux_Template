import { LOGIN, LOGOUT, TIME, LANGUAGE } from './types'

import Moment from 'moment'

const initialState = {
	currentUser: {},
	language: null,
}

function reducers(state = initialState, action) {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				currentUser: action.payload,
			}
		case LOGOUT:
			return {
				...state,
				currentUser: {},
			}
		case TIME:
			return {
				...state,
				time: Moment().format('MMMM Do YYYY, h:mm:ss a'),
			}
		case LANGUAGE:
			return {
				...state,
				language: action.payload,
			}
		default:
			return state
	}
}

export default reducers
