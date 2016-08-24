import { view, filter } from '../../actions'

const eventHandlers = ({ dispatch }) => ({
    
  setFocus({ target }) {
    const focus = (target === document.activeElement)
    // dispatch(view.SearchInput({ focus }))
  },

  clearInput({ target }) {
    dispatch(filter.query(''))
  },

  onChange({ target }) {
      dispatch(filter.query(target.value))
  },

})

export default eventHandlers
