import axios from "axios";

export const search = {

	query: (value) => (dispatch) => {

    var data = JSON.stringify({
    "key": "dc.contributor",
    "value": "Bocconi, Stefano"
    });

    // var xhr = new XMLHttpRequest();
    // xhr.withCredentials = true;

    // xhr.addEventListener("readystatechange", function () {
    // if (this.readyState === 4) {
    //   console.log(this.responseText);
    // }
    // });

    // xhr.open("POST", "http://138.201.141.84/rest/items/find-by-metadata-field");
    // xhr.setRequestHeader("accept", "application/json");
    // xhr.setRequestHeader("content-type", "application/json");
    // xhr.setRequestHeader("cache-control", "no-cache");
    // xhr.setRequestHeader("postman-token", "4b888458-e05f-1482-ca2b-be32d2794a06");

    // xhr.send(data);

    const config = {
      body: data,
      credentials: 'include',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'cache-control': 'no-cache',
        'postman-token': '4b888458-e05f-1482-ca2b-be32d2794a06',
      },
    }

    axios.post('http://138.201.141.84/rest/items/find-by-metadata-field', config)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.info(error)
      })

    const headers = { 'Content-Type': 'application/json' }
    axios.get('http://138.201.141.84/rest/items', { headers })
      .then(response => {
        // console.log(response)
      })
      .catch(error => {
        console.in(error)
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