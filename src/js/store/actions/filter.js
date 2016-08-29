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

  findByMetaData: dispatch => value => {
    
    dispatch({
      type: 'filter-toggle',
      payload: value
    })

    const meta = { 
      key: value.key,
      value: value.value
    }

    findByMetaData(meta, function(request) {
      console.log(request.response)
    })

  },

  tempInit: value => dispatch => {

    // findByMetaData((response) => { 
    //   console.log('Find by metadata POST:', response.response.substr(0, 50) + ' ...') 
    // })

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


function findByMetaData(meta, callback) {

  console.log(callback)

  var data = JSON.stringify(meta);

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) callback(this)
  });

  xhr.open("POST", "http://138.201.141.84/rest/items/find-by-metadata-field");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("accept", "application/json");
  xhr.setRequestHeader("cache-control", "no-cache");

  xhr.send(data);

}