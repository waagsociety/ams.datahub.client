export const query = {

	initialise: ({ query }) => ({
		type: 'query-initialise',
		payload: query
	}),

	update: ({ name, value }) => ({
		type: 'query-update',
		payload: { name, value }
	}),

}