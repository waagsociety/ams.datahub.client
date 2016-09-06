import { route, filter } from '../../store'

export const eventHandlers = ({ dispatch, store }, payload) => ({

  toggleActivity({ target }) {

    dispatch(route.query(payload))

    filter.findByMetaData(dispatch)({ 
      ...payload, 
      active: target.checked 
    })

  },

})