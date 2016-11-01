import axios from 'axios'

import { domain, solr } from '../../config'

export const dataset = {

  fetch: dispatch => id => {

    axios({
      url: `${domain}rest/items/${id}?expand=all`,
      method: 'get',
    }).then(request => {
      dispatch(dataset.loaded(request.data))
      dispatch(dataset.fetchRelated(dispatch)(request.data))
    }).catch(error => {
      dataset.error(error)
    })

    return {
      type: 'dataset-loading',
      payload: { loading: true, active: true, id, related: { loaded: false } },
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
    
    const { handle, metadata } = data
    const fields = [ 'ams.relatedDataset', 'ams.relatedProject', 'ams.relatedPaper' ]

    let query = `(ams.relatedDataset:(${handle}) OR ams.relatedProject:(${handle}) OR ams.relatedPaper:(${handle}))`
    
    const inlineHandles = metadata.reduce((result, { key, value }) => {
      if (fields.indexOf(key) >= 0) result.push(value)
      return result
    }, [])

    if (inlineHandles.length) {
      query += ` OR handle:(${inlineHandles.join(' OR ')})`
    }

    axios({
      url: solr + query,
      method: 'get',
    }).then(request => {

      const { docs } = request.data.response

      const data = docs.reduce((result, item) => {
        let type = (item['dcterms.type'] || []).join("")
        if (type === 'spatial_data_set') type = 'dataset'
        if (handle !== item.handle && type in result) result[type].data.push(item)
        return result
      }, { 
        paper: { title: 'Papers', data: [] }, 
        project: { title: 'Projects', data: [] },
        dataset: { title: 'Datasets', data: [] }, 
      })

      dispatch(dataset.loadedRelated(data))

    }).catch(error => dataset.errorRelated(error))

    return {
      type: 'related-loading',
      payload: { related: { loading: true } },
    }

  },

  loadedRelated: content => {
    return {
      type: 'related-loaded',
      payload: { related: { content, loading: false, loaded: true, error: null } },
    }
  },

  errorRelated: error => {
    return {
      type: 'related-error',
      payload: { related: { error } },
    }
  },

}