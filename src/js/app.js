import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, IndexLink, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Provider } from 'react-redux'


import store from './store'
import { Browse, Article } from './pages'

const history = syncHistoryWithStore(browserHistory, store)

// ReactDOM.render(<Browse store={store}/>, document.querySelector('#app'))

ReactDOM.render((
  <Provider store={store}>
    <Router history={history}>
      <Route path={location.pathname} component={Browse}></Route>
      <Route path="#abc" component={Article} />
    </Router>
  </Provider>
), document.querySelector('#app'))