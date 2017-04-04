// domains
export const domains = {
  dspace: 'http://amsdatahub.waag.org/dspace',
  rest: 'http://amsdatahub.waag.org/dspace/rest',
  solr: 'http://amsdatahub.waag.org/dspace/solr/search/select?wt=json&q=',
}

// fields
export const fields = {
  related: ['ams.relatedDataset', 'ams.relatedProject', 'ams.relatedPublication', 'ams.relatedTool'],
  tags: [
    {
      name: 'Type',
      field: 'dcterms.type',
      key: 'type',
      tags: [],
    },
    {
      name: 'Location',
      field: 'dcterms.spatial',
      key: 'location',
      tags: [],
    },
    {
      name: 'Subject',
      field: 'dc.subject',
      key: 'subject',
      tags: [],
    },
    {
      name: 'Author',
      field: 'dc.creator',
      key: 'author',
      tags: [],
    }, 
    {
      name: 'Publisher',
      field: 'dc.publisher',
      key: 'publisher',
      tags: [],
    },
  ]
}

// pagination
export const results = {
  initialCount: 10,
  perPage: 50,
}

export const initialResults = 10
export const resultsPerPage = 50
export const initialFiltersPerGroup = 5