import { TODO_SOMETHING } from './actions'

export const reducer = (state, action) => {

	switch (action.type) {

		case TODO_SOMETHING:
			return {
				...state,
				sidebar: action.status
			}

		default: return state
	}
}