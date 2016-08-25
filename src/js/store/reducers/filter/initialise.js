export const initialState = {
  
  localStorage: [],

  groups: [ 'Author', 'Publisher', 'Type' ].map(value => ({ 
    key: 'dc.contributor.' + value.toLowerCase(),
    value: value,
  })),
  
  selection: [],
  suggestions: [],

  initialised: false,
  loading: false,
  match: false,
  query: false,
  error: false,
  
}