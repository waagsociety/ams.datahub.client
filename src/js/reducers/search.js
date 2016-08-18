const initialState = {
  results: [],
  fetching: false,
  fetched: false,
  error: null,
}

export const search = (state = initialState, { type, payload }) => {

	switch(type){

		case 'search-fulfilled': return {
      ...state,
      fetching: false,
      fetched: true,
      results: groupTags(payload),
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

function groupTags({ groups, tags }) {

  return tags.reduce((result, item) => {
    
    const { label, group } = item 
    const id = group, name = groups[id]

    if (!result[id]) result[id] = { id, name, tags: [] }
    if (typeof label === 'string') result[id].tags.push({ 
      ...item, 
      name: name.toLowerCase().replace(/\s+/g, '-') 
      // replace whitespace with a dash
    })

    return result

  }, [])

}
