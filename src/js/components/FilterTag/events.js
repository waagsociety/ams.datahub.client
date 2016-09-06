import { route, filter } from '../../store'

export const eventHandlers = ({ dispatch, store }, payload) => ({

  toggleActivity({ target }) {

    const { name, value } = target
    const active = target.checked

    dispatch(route.query(name, value, active))

    filter.findByMetaData(dispatch)({ 
      ...payload, 
      active: target.checked
    })

  },

})