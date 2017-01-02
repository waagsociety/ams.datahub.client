import React from 'react'
import { dataset, route } from '../../store'
import { SearchInput, SearchFilters, Tabs } from '../../components'

const eventHandlers = ({ dispatch, store }) => item => ({
  onClick: event => {
    const scope = store.route.query.scope || []
    if (item.key != scope[0]) {
      // dispatch(dataset.filterAMS(item.index))
      dispatch(route.replace({ scope: [item.key] }))
    }
  },
})

export default function SearchPanel({ props }) {
  
  const events = eventHandlers(props)
  const scope = props.store.route.query.scope || []

  const activeTabIndex = props.store.dataset.filterAMS
  const tabs = [{ name: "AMS Data Only", key: null }, { name: "Show All Data", key: "all" }].map((item, index) => {
    return { ...item, index, active: scope[0] == item.key }
  })

	return <form method='get' action='/' id='SearchPanel' className='container floating primary panel'>
		<SearchInput props={props} />
		<SearchFilters props={props}/>
    <Tabs items={tabs} events={events}/>
	</form>

}
