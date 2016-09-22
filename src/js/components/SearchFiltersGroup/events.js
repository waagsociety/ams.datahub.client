import { view } from '../../store'


export const eventHandlers = ({ dispatch }) => ({

  focusGroup({ target }) {
    dispatch(view.FilterGroup({ focus: target.value }))
  },

})