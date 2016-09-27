import { view, route } from '../../store'

const SearchInput = ({ dispatch, store }, focus) => ({
    
  storeFocus({ target }) {
    const focus = (target === document.activeElement)
    dispatch(view.SearchInput({ focus }))
  },

  fetchSuggestions({ target }) {
    const value = target.value || ''
    dispatch(view.SearchInput({ value }))
  },

  clearInput() {
    dispatch(view.SearchInput({ value: '' }))
  },

  fetchQuery(event) {
    
    const { value } = event.target
    const onEnter = event.keyCode === 13

    if (onEnter){ 
      event.preventDefault()
      if (!focus) dispatch(route.search(value))
      dispatch(view.SearchInput({ value }))
    }

  },

})

export default SearchInput
