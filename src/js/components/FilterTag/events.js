import { route } from '../../store'

export const eventHandlers = ({ dispatch, store }, payload) => ({

  toggleActivity({ target }) {

    const { key, value } = payload
    const active = target.checked

    dispatch(route.query(key, value, active))

  },

})