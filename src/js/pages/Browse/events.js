const eventHandlers = ({ dispatch }) => ({

  onSubmit(event) {
    event.preventDefault() 
  },

  onTest(event) {
    console.log(event)
  }

})

export default eventHandlers