const initialState = {}

export const filter = (state = initialState, { type, payload }) => {

	switch(type){

		case 'filter-initialise': return {
      ...state,
      payload
		}

		case 'filter-update': {

			const x = Object.keys(state)

			return {
	      ...state,
	      payload
			}
		}

		default: return state

	}

}
