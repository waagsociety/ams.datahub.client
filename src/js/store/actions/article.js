import axios from 'axios'

export const article = {

  load: dispatch => url => {

    console.log(url)

    return {
      type: 'article-load',
      payload: url,
    }
  },

}