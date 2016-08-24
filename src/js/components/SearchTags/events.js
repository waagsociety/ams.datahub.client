import { query } from '../../actions'

const SearchTags = ({ dispatch }) => ({
    
  onChange({ target }) {
      if (target.checked) dispatch(query.add(target))
      else dispatch(query.remove(target))
  },

})

export default SearchTags