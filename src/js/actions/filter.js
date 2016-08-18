export const filter = {

	initialise: (value) => ({
    type: 'filter-initialise',
    payload: value
  }),

	update: ({ name, value, checked }) => ({
		type: 'filter-update',
		payload: { name, value, checked },
	}),

}




