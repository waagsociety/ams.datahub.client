import axios from "axios";

export const search = {

	query: (value) => (dispatch) => {

    findByMetaData();

    // axios({
    //   method: 'post',
    //   url: 'http://138.201.141.84/rest/items/find-by-metadata-field',
    //   data: {
    //     key: "dc.contributor.author",
    //     value: "Gemeente Amsterdam",
    //   },
    //   withCredentials: true,
    //   headers: {
    //     'accept': 'application/json',
    //     'content-type': 'application/json',
    //     'cache-control': 'no-cache',
    //     'postman-token': '4b888458-e05f-1482-ca2b-be32d2794a06',
    //   },
    // }).then(response => {
    //   console.log(response)
    // }).catch(error => {
    //   console.info(error)
    // })

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



function findByMetaData() {

  var data = JSON.stringify({
    "key": "dc.contributor.author",
    "value": "Gemeente Amsterdam"
  });

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) console.log(this.responseText);
  });

  xhr.open("POST", "http://138.201.141.84/rest/items/find-by-metadata-field");
  xhr.setRequestHeader("rest-dspace-token", "faeae1f3-4880-41ef-ae26-cca6f10229ca");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("accept", "application/json");
  xhr.setRequestHeader("cache-control", "no-cache");
  xhr.setRequestHeader("postman-token", "51d36325-7693-2d45-4736-ea90f3c5c28f");

  xhr.send(data);

}