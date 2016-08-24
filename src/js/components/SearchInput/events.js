import { search, view } from '../../actions'

const SearchInput = ({ dispatch }) => ({
    
  onFocusChange({ target }) {
    const focus = (target === document.activeElement)
    dispatch(view.SearchInput({ focus }))
  },

  onChange({ target }) {
      dispatch(search.query(target.value))
  },

})

export default SearchInput
