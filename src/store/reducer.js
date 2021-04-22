import { CLOSE_HEADER_NAV } from '@store/actions.js'

export const reducer = (state, action) => {

	switch (action.type) {
		
		case CLOSE_HEADER_NAV:
			return { 
				...state,
				closeHeaderNav: action.status
			}
			
		default: return state
	}
}
