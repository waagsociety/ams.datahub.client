import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import * as action from '../../store'
import { GlobalNavigation, SearchPanel, ResultPanel, ResultBrowser, Dataset } from '../../containers'
import BrowserMap from '../../components/BrowserMap'

@connect ((store) => ({ store }))
export default class Browse extends React.Component {

  componentWillMount() {
    const { props } = this;
    const { dispatch } = props;

    dispatch(action.route.initialise(location.hash));

    onhashchange = _ => {
      dispatch(action.route.update(location.hash));
    };
  }

  componentDidUpdate() { // Router
    const { store, dispatch } = this.props;
    const { route, search, dataset } = store;
    const { query, hash } = route;

    if (query.article) { // Open a dataset
      const id = query.article.join('');
      if (!dataset.active) dispatch(action.dataset.activity(true));
      if (dataset.id !== id) dispatch(action.dataset.fetch(dispatch)(id));
    } else {
      if (dataset.active) dispatch(action.dataset.activity(false));
    }

    if (search.hash !== hash) {
      if (hash) dispatch(action.search.fetch(dispatch)(route)); // Search-query in place
      else dispatch(action.search.clear()); // We’re home
    }
  }

  render() {

    const { props } = this;
    const { search, dataset, route } = props.store;
    const { query } = route;

    let page = '';
    if (!!query.article) page = 'article';
    else if (!!search.hash) page = 'search';

    switch (page) {
      case 'search':
        return (
          <div id='search' className='page container'>
            <BrowserMap props={props} />
            <SearchPanel props={props} />
            <ResultPanel props={props} />
          </div>
        );

      case 'article':
        return (
          <div id='article' className='page container'>
            <BrowserMap props={props} />
            <Dataset props={props} />
            <ResultPanel props={props} />
          </div>
        );

      default:
        return (
          <div id='browse' className='page container'>
          <BrowserMap props={props} />
          <SearchPanel props={props} />
          </div>
        );
    }
  }
}
