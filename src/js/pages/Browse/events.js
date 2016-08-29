const eventHandlers = ({ dispatch }) => ({

  onSubmit(event) {
    event.preventDefault() 
  },

  onChange({ target }) {
    // console.log(target)
  },

  onTest(event) {
    console.log(event)
  }

})

export default eventHandlers