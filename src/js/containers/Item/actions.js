export function getItemType(content) {

  const { metadata } = content
  const key = 'dcterms.type'

  if (metadata) { 
    const value = (metadata.find(item => item.key === key) || {}).value
    if (value) return value.toLowerCase()
  }

}

export function getMetadata(content) {

  const { metadata = [] } = content
  // console.log(metadata)

  const scheme = {
    'dc.title': 'title',
    'dcterms.abstract': 'abstract',
    'dcterms.type': 'type',
    'dc.subject': 'subject',
    'dc.contributor.author': 'author',
    'dc.publisher': 'publisher',
    'dcat.landingPage': 'reference',
    'ams.relatedDataset': 'relatedDataset',
    'ams.relatedProject': 'relatedProject',
    'ams.relatedPaper': 'relatedPaper',
    'dc.date.available': 'available',
    'dc.identifier.uri': 'dspace',
    'dc.value.sponsorship': 'sponsor',
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