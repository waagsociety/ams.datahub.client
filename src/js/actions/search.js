import axios from "axios";

export const search = {

	query: (value) => (dispatch) => {

    axios({
      method: 'post',
      url: 'http://138.201.141.84/rest/items/find-by-metadata-field',
      data: {
        key: "dc.contributor.author",
        value: "Gemeente Amsterdam",
      },
      withCredentials: true,
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'cache-control': 'no-cache',
        'postman-token': '4b888458-e05f-1482-ca2b-be32d2794a06',
      },
    }).then(response => {
      console.log(response)
    }).catch(error => {
      console.info(error)
    })

    axios.get('http://138.201.141.84/rest/items')
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })

    if (value) axios.get("./assets/data/suggestions.json")
      .then(response => {
        dispatch({
          type: 'search-fulfilled',
          payload: response.data,
        })
      })
      .catch(error => {
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