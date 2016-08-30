import { filter } from '../../store'

export const eventHandlers = ({ dispatch, store }, payload) => ({

  toggleActivity({ target }) {

    filter.findByMetaData(dispatch)({ 
      ...payload, 
      active: target.checked 
    })

  },

})