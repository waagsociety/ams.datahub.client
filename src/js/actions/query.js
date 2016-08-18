export const query = {

	initialise: ({ query }) => {
		return{
			type: 'query-initialise',
			payload: query
		}
	}
}