const eventHandlers = ({ dispatch }) => ({

  onSubmit: (event) => {
    event.preventDefault() 
  },

  onChange: ({ target }) => {
    // console.log(target)
  },

})

export default eventHandlers