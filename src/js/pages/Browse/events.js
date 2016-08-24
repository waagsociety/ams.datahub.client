const eventHandlers = ({ dispatch }) => ({

  onSubmit: (event) => {
    event.preventDefault() 
  },

  onChange: (event) => {
    console.log(event)
  },

  eventLog: (event) => {
    console.log('onKeyDown', event)
  }

})

export default eventHandlers