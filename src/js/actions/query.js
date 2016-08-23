export const query = {

	initialise: (location) => ({
		type: 'query-initialise',
		payload: location
	}),

	update: ({ name, value, active: checked }) => {
		// const active = checked
        return {
		  type: 'query-update',
		  payload: { name, value, active },
        }
	},

}