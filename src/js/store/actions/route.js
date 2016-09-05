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

}