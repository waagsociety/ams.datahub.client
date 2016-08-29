import axios from "axios";

export const filter = {

	suggestions: value => ({
    type: 'filter-suggestions',
    payload: value
  }),

  search: value => ({
    type: 'filter-search',
    payload: value
  }),

  tempInit: value => dispatch => {

    findByMetaData((response) => { console.log(response) })

    axios.get('http://138.201.141.84/rest/items?expand=metadata')
      .then(response => {
        dispatch({
          type: 'filter-initialise',
          payload: response.data
        })
      })
      .catch(error => {
        dispatch({
          type: 'filter-error',
          payload: error,
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
  // xhr.setRequestHeader("rest-dspace-token", "faeae1f3-4880-41ef-ae26-cca6f10229ca");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("accept", "application/json");
  // xhr.setRequestHeader("cache-control", "no-cache");
  // xhr.setRequestHeader("postman-token", "51d36325-7693-2d45-4736-ea90f3c5c28f");

  xhr.send(data);

}