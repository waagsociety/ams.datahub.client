import { view, filter } from '../../store'

const SearchInput = ({ dispatch }) => ({
    
  storeFocus({ target }) {
    const focus = (target === document.activeElement)
    // dispatch(view.SearchInput({ focus }))
  },

  fetchSuggestions({ target }) {
    dispatch(filter.query(target.value || ''))
  },

  clearInput() {
    dispatch(filter.query(''))
  },

  fetchQuery(event) {
    const onEnter = event.keyCode === 13
    if (onEnter) event.preventDefault()
  },

})

export default SearchInput
