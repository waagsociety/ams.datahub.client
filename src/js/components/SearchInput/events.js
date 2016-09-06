import { view, filter, route } from '../../store'

const SearchInput = ({ dispatch, store }) => ({
    
  storeFocus({ target }) {
    const focus = (target === document.activeElement)
    dispatch(view.SearchInput({ focus }))
  },

  fetchSuggestions({ target }) {
    dispatch(filter.suggestions(target.value || ''))
  },

  clearInput() {
    dispatch(filter.suggestions(''))
  },

  fetchQuery(event) {
    
    const { value } = store.filter
    const onEnter = event.keyCode === 13

    if (onEnter){ 
      event.preventDefault()
      dispatch(route.search(value))
      dispatch(filter.search(value))
    }

  },

})

export default SearchInput
