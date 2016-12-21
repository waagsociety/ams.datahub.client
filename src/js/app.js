import React from 'react'
import ReactDOM from 'react-dom'

import store from './store'
import Index from './pages'

ReactDOM.render(<Index store={store}/>, document.querySelector('#app'))