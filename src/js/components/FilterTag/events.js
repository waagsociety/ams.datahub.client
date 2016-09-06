import { query, filter } from '../../store'

export const eventHandlers = ({ dispatch, store }, payload) => ({

  toggleActivity({ target }) {

    dispatch(query.query(payload))

    filter.findByMetaData(dispatch)({ 
      ...payload, 
      active: target.checked 
    })

  },

})