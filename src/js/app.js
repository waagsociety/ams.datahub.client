import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import store from './store'
import { Browse, Results } from './pages'

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path='/ams/browse-data/' component={Browse}></Route>
			<Route path='/' component={Browse}></Route>
		</Router>
	</Provider>,
document.querySelector('#app'))
