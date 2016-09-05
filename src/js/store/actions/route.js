import { article } from '../'

export const route = {

  initialise: dispatch => hash => ({
    type: 'route-initialise',
    payload: hash
  }),

  add: parameters => ({
      type: 'route-add',
      payload: parameters
  }),

  replace: parameters => ({
      type: 'route-replace',
      payload: parameters
  }),

  article: dispatch => query => {
    dispatch(article.load(dispath)(query))
    return {
      type: 'route-article',
      payload: {
        hash: '',
        article: query
      }
    }
  },

}