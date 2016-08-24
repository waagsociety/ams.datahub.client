export const query = {

	initialise: (location) => ({
		type: 'query-initialise',
		payload: location
	}),

	remove: (parameters) => ({
		type: 'query-remove',
		payload: parameters,
	}),

	add: (parameters) => ({
		type: 'query-add',
		payload: parameters,
	}),

}