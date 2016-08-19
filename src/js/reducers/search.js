const initialState = {
  results: [],
  fetching: false,
  fetched: false,
  error: null,
  value: ""
}

export const search = (state = initialState, { type, payload }) => {

	switch(type){

		case 'search-fulfilled': {
      
      const { response, value } = payload
      const results = response.data.reduce((result, group) => {

        const expression = new RegExp(value, 'ig')
        const tags = group.tags.filter(tag => expression.test(tag.value))

        if (tags.length) result.push({ ...group, tags })
        return result

      }, [])

      return {
        ...state,
        fetching: false,
        fetched: true,
        results: results,
        value: value,
      }

    }

		case 'search-rejected': return {
      ...state,
      fetching: false,
      error: payload,
		}

    case 'search-cleared': return {
      ...state,
      fetching: false,
      fetched: false,
      results: [],
    }

		default: return state

	}

}
