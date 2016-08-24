import { filter } from '../../store'

const SearchTags = ({ dispatch }) => ({
    
  onChange({ target }) {
      if (target.checked) dispatch(filter.add(target))
      else dispatch(filter.remove(target))
  },

})

export default SearchTags