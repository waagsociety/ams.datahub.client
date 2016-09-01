import axios from 'axios'

export const article = {

  load: dispatch => query => {

    const itemID = query.article.join('')

    axios({
      method: 'GET',
      url: `http://138.201.141.84/rest/items/${itemID}?expand=all`,
      headers: { 
        'accept': 'application/json' 
      },
    })
      .then(request => {
        dispatch({
          type: 'article-fetched',
          payload: request.data
        })
      })

    return {
      type: 'article-loading',
      payload: true
    }

  },

}