import axios from "axios";

export const search = {

	query: (value) => (dispatch) => {

    axios.get("http://localhost:8080/data/suggestions.json")
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
  },

  clear: () => ({
    type: 'search-cleared',
    payload: []
  }),
  
  testQuery: (value) => (dispatch) => {
    post()
  }

}


// does not work due cors
function post(){
  
  var data = JSON.stringify({
    "key": "dc.contributor",
    "value": "AEB Amsterdam"
  });

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;

  xhr.addEventListener("readystatechange", function () {
    console.log(this)
    if (this.readyState === 4) {
      console.log(this.responseText);
    }
  });
  xhr.open("POST", "http://138.201.141.84/rest/items/find-by-metadata-field");

  
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("accept", "application/json");
  xhr.setRequestHeader("cache-control", "no-cache");
  xhr.setRequestHeader("postman-token", "a0ddc875-7463-328c-750c-99f5eff92290");

  // xhr.setRequestHeader("Access-Control-Allow-Origin", "http://localhost:8080/");
  // xhr.setRequestHeader("Access-Control-Allow-Credentials", "true");
  // xhr.setRequestHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  // xhr.setRequestHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

  xhr.send(data);

}


