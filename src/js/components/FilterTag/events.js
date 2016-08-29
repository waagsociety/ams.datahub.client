import { filter } from '../../store'

export const eventHandlers = ({ dispatch }, payload) => ({

  toggleActivity({ target }) {

    console.log('xoxo')
    filter.findByMetaData(payload)

    dispatch({
      type: 'filter-toggle',
      payload: {
        ...payload,
        active: target.checked
      }
    })
    
  },

})