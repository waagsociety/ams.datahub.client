const initialState = {
  groups: [ 'author', 'publisher', 'type' ],
  groupMap: [],
  filtered: [],
  selection: [],
  loading: false,
  match: false,
  query: false,
  error: false,
}

export const filter = (state = initialState, { type, payload }) => {

  switch(type){

    case 'filter-initialise': {
      
      const { groups } = state
      const pattern = new RegExp(groups.join('|'), 'i')
      
      const groupMap = groups.map((group, i) => ({
        group,
        tags: [],
        hash: {},
      }))

      // Map metadata to an object sorted by metadata kind
      payload.forEach(({ metadata }, i) => {
        
        metadata.forEach(item => {
          
          const key = item.key.split('.').pop()
          const index = groups.indexOf(key)

          if (index !== -1) { // group is indexable
            
            const group = groupMap[index]

            if (!group.hash[item.value]) { // prevent double entries
              
              group.tags.push({
                label: item.value,
                value: item.value.toLowerCase().replace(/\W+/g, '-'),
                group: index,
              })

              group.hash[item.value] = true

            }

          }

        })

      })

      return { 
        ...state, 
        groupMap, 
        loading: true
      }

    }

    case 'filter-suggestions': {

      let filtered = []
      let match = false
      let query = payload.length && payload

      if (payload) {
        
        const pattern = new RegExp(payload, 'gi')
        filtered = state.groupMap.reduce((result, group) => {

          const tags = group.tags.filter(tag => pattern.test(tag.label))
          if (tags.length) result.push({ ...group, tags })

          return result

        }, [])

         if (filtered.length) match = true

      }

      return { 
        ...state, 
        filtered, 
        match,
        query,
        loading: false,
        error: false,
      }

    }

    case 'filter-error': {

      return { 
        ...state, 
        error: payload,
      }

    }

    default: return state

  }

}