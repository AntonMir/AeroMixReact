import { createStore } from 'redux'
import { reducer } from './reducer'


export const initialState = {
	status: ["Test", "TestTest"]
}


export const store = createStore(reducer, initialState)
