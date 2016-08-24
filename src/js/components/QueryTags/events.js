import { filter } from '../../actions'

const QueryTags = ({ dispatch }) => ({
    
  onClick({ target }) {
      dispatch(filter.remove(target))
  },
    
})

export default QueryTags