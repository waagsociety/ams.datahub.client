export const initialState = {
  
  localStorage: [],

  groups: [ 'Subject', 'Publisher', 'Author', 'Type' ].map(value => {
    const prefix = 'dc' + (value === 'Author' ? '.contributor.' : '.')
    return {
      key: prefix + value.toLowerCase(),
      value,
    }
  }),
  
  value: '',
  search: '',
  selection: [],
  suggestions: [],
  match: false,

  initialised: false,
  loading: false,
  error: false,
  
}