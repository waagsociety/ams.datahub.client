import { view, filter } from '../../store'

const SearchInput = ({ dispatch }) => ({
    
  onFocusChange({ target }) {
    const focus = (target === document.activeElement)
    dispatch(view.SearchInput({ focus }))
  },

  onChange({ target }) {
      dispatch(filter.query(target.value))
  },

})

export default SearchInput
