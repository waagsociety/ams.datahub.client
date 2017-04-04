export function getItemType(content) {

  const { metadata } = content
  const key = 'dcterms.type'

  if (metadata) { 
    const value = (metadata.find(item => item.key === key) || {}).value
    if (value) return value.toLowerCase()
  }

}

export function mapMetadata(metadata) {

  // console.log('metadata', metadata)

  const scheme = {

    'dc.title': 'title',
    'dc.type': 'type',
    'dcterms.type.publication': 'publicationType',
    
    'dc.description': 'description',
    'dc.description.abstract': 'description',
    'dcterms.abstract': 'description',

    'dc.publisher': 'publisher',
    // 'dc.source': 'source',
    'dcat.downloadURL': 'source',
    
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
    'dcterms.spatial': 'spatial',

    'ams.projectPartner': 'projectPartner',
    'ams.projectMember': 'projectMember',
    'ams.projectContact': 'projectContact',
    'ams.projectLeader': 'projectLeader',
    
    'ams.relatedDataset': 'relatedDataset',
    'ams.relatedProject': 'relatedProject',
    'ams.relatedPaper': 'relatedPaper',

  }

  const keys = Object.keys(scheme)
  return keys.reduce((result, key) => {
    const normalizedKey = scheme[key]
    const data = metadata[key]
    const resultData = result[normalizedKey]
    if (!resultData || !resultData.length) {
      result[normalizedKey] = data || []
    }
    // else console.log(resultData)
    return result
  }, {})

}