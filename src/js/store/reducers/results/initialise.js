export const initialState = {
  
  localStorage: [],

  groups: [ 'Author', 'Publisher', 'Type' ].map(value => ({ 
    key: 'dc.contributor.' + value.toLowerCase(),
    value,
  })),
  
  value: '',
  search: '',
  selection: [],
  suggestions: [],
  match: false,

  initialised: false,
  loading: false,
  error: false,
  
}