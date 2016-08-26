import { view, filter } from '../../store'

const SearchInput = ({ dispatch }) => ({
    
  storeFocus({ target }) {
    const focus = (target === document.activeElement)
    // dispatch(view.SearchInput({ focus }))
  },

  fetchSuggestions({ target }) {
    dispatch(filter.filter(target.value || ''))
  },

  clearInput() {
    dispatch(filter.filter(''))
  },

  fetchQuery(event) {
    const onEnter = event.keyCode === 13
    if (onEnter) event.preventDefault()
  },

})

export default SearchInput
