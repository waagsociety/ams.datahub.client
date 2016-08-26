import { view, filter } from '../../store'

const SearchInput = ({ dispatch, store }) => ({
    
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
    
    const { value } = store.filter
    const onEnter = event.keyCode === 13

    if (onEnter){ 
      event.preventDefault()
      if (value) dispatch({
        type: 'filter-search',
        payload: value,
      })
      
    }
  },

})

export default SearchInput
