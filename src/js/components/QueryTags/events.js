import { query } from '../../actions'

const QueryTags = ({ dispatch }) => ({
    
    onClick({ target }) {
        dispatch(query.remove(target))
    },
    
})

export default QueryTags