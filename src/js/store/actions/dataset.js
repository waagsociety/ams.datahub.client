import axios from 'axios'
import { fields, domains } from '../../config'

const pipe = (...methods) => value =>
  methods.reduce((result, method) => method(result), value)

const group = separator => data => 
  `(${data.filter(item => !!item).join(separator)})`

const literalQuery = query => fields => 
  fields.map(field => `${field}:("${query}")`)

const listQuery = (field, separator) => query =>
  query.length ? `${field}:(${query.join(separator)})` : ''

export const dataset = {

  fetch: dispatch => handle => {

    axios({
      url: `${domains.solr}handle:(${handle})`,
      method: 'get',
    }).then(request => {

      const content = request.data.response.docs[0]
      console.log(content)
      if (content.withdrawn === 'true') {
        dispatch(dataset.loaded({ 'dc.title': "This item is no longer available." }))
        dispatch(dataset.fetchRelated(dispatch)(content))
      }
      else {
        dispatch(dataset.loaded(content))
        dispatch(dataset.fetchRelated(dispatch)(content))
      }
      

    }).catch(dataset.error)

    return {
      type: 'dataset-loading',
      payload: { loading: true, active: true, handle, related: { loaded: false } },
    }

  },

  activity: active => {
    return {
      type: 'dataset-loading',
      payload: { active, },
    }
  },

  loaded: content => {
    return {
      type: 'dataset-loaded',
      payload: { content, loading: false, error: null },
    }
  },

  error: error => {
    return {
      type: 'dataset-error',
      payload: { error },
    }
  },

  fetchRelated: dispatch => data => {
    
    const { handle, metadata, withdrawn } = data

    if (withdrawn === 'true') dispatch(dataset.loadedRelated({}))
    else {

      const relatedFields = fields.related
      const queryRelated = pipe(literalQuery(handle), group(' OR '))(relatedFields)
    
      const inlineHandles = Object.keys(data).reduce((result, key) => {
        if (~relatedFields.indexOf(key)) result.push(`"${data[key]}"`)
        return result
      }, [])

      const queryHandles = listQuery('handle', ' OR ')(inlineHandles)

      const query = group(' OR ')([queryRelated, queryHandles])

      axios({
        url: domains.solr + query,
        method: 'get',
      }).then(request => {

        const { docs } = request.data.response

        const data = docs.reduce((result, item) => {
          let type = (item['dcterms.type'] || []).join("")
          if (type === 'spatial_data_set') type = 'dataset'
          if (handle !== item.handle && type in result) result[type].data.push(item)
          return result
        }, { 
          publications: { title: 'Publications', data: [] }, 
          project: { title: 'Projects', data: [] },
          dataset: { title: 'Datasets', data: [] }, 
          tool: { title: 'Tools', data: [] },
        })

        dispatch(dataset.loadedRelated(data))

      }).catch(error => dataset.errorRelated(error))

      return {
        type: 'related-loading',
        payload: { related: { loading: true } },
      }

    }

  },

  loadedRelated: content => ({
    type: 'related-loaded',
    payload: { related: { content, loading: false, loaded: true, error: null } },
  }),

  errorRelated: error => ({
      type: 'related-error',
      payload: { related: { error } },
  }),

  filterAMS: index => ({
    type: 'dataset-AMS-filter', 
    payload: { filterAMS: index }
  })

}




