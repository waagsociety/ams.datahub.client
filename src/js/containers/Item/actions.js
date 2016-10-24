export function getItemType(content) {

  const { metadata } = content
  const key = 'dcterms.type'

  if (metadata) { 
    const value = (metadata.find(item => item.key === key) || {}).value
    if (value) return value.toLowerCase()
  }

}