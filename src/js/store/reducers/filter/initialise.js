export const initialState = {
  
  localStorage: [],

  groups: [ 'Subject', 'Author', 'Publisher', 'Type' ].map(value => {
    const prefix = 'dc' + (value === 'Author' ? '.contributor.' : '.')
    return {
      key: prefix + value.toLowerCase(),
      value,
    }
  }),
  
  hash: '',
  value: '',
  search: '',
  selection: [],
  suggestions: [],
  match: false,

  initialised: false,
  loading: false,
  error: false,
  
}