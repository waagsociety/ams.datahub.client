export function getItemType(content) {

  const { metadata } = content
  const key = 'dcterms.type'

  if (metadata) { 
    const value = (metadata.find(item => item.key === key) || {}).value
    if (value) return value.toLowerCase()
  }

}

export function mapMetadata(metadata) {

  const scheme = {

    'dc.title': 'title',
    
    'dc.description': 'description',
    'dc.description.abstract': 'description',
    'dcterms.abstract': 'description',

    'dc.publisher': 'publisher',
    'dc.source': 'source',
    
    'dc.creator': 'author', 
    'dc.contributor.author': 'author',

    'dc.identifier.uri': 'dspace',
    'dcat.landingPage': 'reference',
    'dc.value.sponsorship': 'sponsor',    
    
    'dcat.keyword': 'keyword',
    'dcat.theme': 'theme',
    'dc.subject': 'subject',

    'dcterms.type': 'type',
    'dcterms.license': 'license',
    
    'dcterms.created': 'created',
    'dcterms.modified': 'modified',
    'dcterms.issued': 'issued',
    'dc.date.available': 'available',
    'dcterms.temporal': 'temporal',
    
    'ams.relatedDataset': 'relatedDataset',
    'ams.relatedProject': 'relatedProject',
    'ams.relatedPaper': 'relatedPaper',

  }

  const keys = Object.keys(scheme)
  const structure = keys.reduce((result, key) => {
    const map = scheme[key]
    return Object.assign(result, { [map]: [] })
  }, {})
  
  return metadata.length
  
    ? metadata.reduce((result, { key, value }) => {
        
        const map = scheme[key]
        if (map) {
          const data = result[map]
          result[map] = data.concat([ value ])
        }      
        
        return result

      }, structure)

    : {}

}