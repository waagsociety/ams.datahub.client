import React from 'react'
import ReactDOM from 'react-dom'

import store from './store'
import { Browse } from './pages'

ReactDOM.render(<Browse store={store}/>, document.querySelector('#app'))