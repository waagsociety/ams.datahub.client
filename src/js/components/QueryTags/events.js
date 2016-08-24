import { filter } from '../../store'

const QueryTags = ({ dispatch }) => ({
    
  onClick({ target }) {
      dispatch(filter.remove(target))
  },
    
})

export default QueryTags