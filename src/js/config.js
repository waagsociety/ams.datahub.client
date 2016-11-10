
export const domain = 'http://amsdatahub.waag.org/dspace/'

export const solr = domain + 'solr/search/select?wt=json&q='

export const fieldIndex = [
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

export const initialResults = 10
export const resultsPerPage = 50
export const initialFiltersPerGroup = 5