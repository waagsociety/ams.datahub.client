import { search } from '../../actions'

const SearchInput = ({ dispatch }) => ({
    
    onFocus(event) {
        // console.log(event) // works
    },

    onChange({ target }) {
        dispatch(search.query(target.value))
    },

})

export default SearchInput
