import axios from "axios";

export const search = {

	query: value => dispatch => {

    dispatch({
      type: 'suggest-filter',
      payload: value
    })

    if (value) axios.get("./assets/data/suggestions.json")
      .then(response => {
        dispatch({
          type: 'search-fulfilled',
          payload: {
            value,
            response,
          }
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

  tempInit: value => dispatch => {
    axios.get('http://138.201.141.84/rest/items?expand=metadata')
      .then(response => {
        dispatch({
          type: 'suggest-initialise',
          payload: response.data
        })
      })
  } 

}



function findByMetaData(callback) {

  var data = JSON.stringify({
    "key": "dc.contributor.author",
    "value": "Gemeente Amsterdam"
  });

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) callback(this)
  });

  xhr.open("POST", "http://138.201.141.84/rest/items/find-by-metadata-field");
  xhr.setRequestHeader("rest-dspace-token", "faeae1f3-4880-41ef-ae26-cca6f10229ca");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("accept", "application/json");
  xhr.setRequestHeader("cache-control", "no-cache");
  xhr.setRequestHeader("postman-token", "51d36325-7693-2d45-4736-ea90f3c5c28f");

  xhr.send(data);

}