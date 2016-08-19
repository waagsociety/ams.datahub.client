export const query = {

	initialise: (location) => ({
		type: 'query-initialise',
		payload: location
	}),

	update: ({ name, value }) => ({
		type: 'query-update',
		payload: { name, value }
	}),

}