import { route } from '../../store'

export const eventHandlers = ({ dispatch, store }, payload) => ({

  toggleActivity({ target }) {

    const { query } = store.route
    const { key, value } = payload
    
    const queryKey = query[key] || []
    let active = true
    queryKey.forEach(queryValue => {
      if (value === queryValue) active = false
    })
    
    dispatch(route.query(key, value, active))

  },

})