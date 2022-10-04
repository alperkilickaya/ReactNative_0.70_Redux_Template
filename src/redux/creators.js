import { LOGIN, LOGOUT, TIME, LANGUAGE } from './types'

export const login = (payload) => ({
	type: LOGIN,
	payload,
})

export const logout = () => ({
	type: LOGOUT,
})

export const setTime = () => ({
	type: TIME,
})

export const setLanguage = (payload) => ({
	type: LANGUAGE,
	payload,
})
