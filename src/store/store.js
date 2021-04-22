import { createStore } from 'redux'
import { reducer } from './reducer'

// Начальное состояние
export const initialState = {
	closeHeaderNav: false,
}

export const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

