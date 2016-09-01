import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import store from './store'
import { Browse, Article } from './pages'

const history = syncHistoryWithStore(browserHistory, store);
const basepath = location.pathname // use location.pathname as the application entry point

ReactDOM.render(<Browse history={history} store={store}/>, document.querySelector('#app'))

