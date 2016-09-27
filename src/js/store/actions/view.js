export const view = {

  SearchInput: (payload) => ({
    type: 'view-SearchInput',
    payload,
  }),

  FilterGroup: (payload) => ({
    type: 'view-FilterGroup',
    payload,
  }),

  noWebGL: () => ({
    type: 'view-noWebGL',
  }),

}