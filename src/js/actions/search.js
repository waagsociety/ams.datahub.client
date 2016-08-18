import axios from "axios";

export const search = {

	query: (value) => (dispatch) => {

    const headers = { 'Content-Type': 'application/json' }

    axios.get('http://138.201.141.84/rest/items', { headers })
      .then((response) => {
        // console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })

    if (value) axios.get("./assets/data/suggestions.json")
      .then((response) => {
        dispatch({
          type: 'search-fulfilled',
          payload: response.data,
        })
      })
      .catch((error) => {
        dispatch({
          type: 'search-rejected', 
          payload: error,
        })
      })
    else dispatch({
      type: 'search-cleared',
      payload: [],
    })  

  },

}