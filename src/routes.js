import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/app'
import ReportsIndex from './components/reports-index'

export default const routes =
  <Route path="/" component={App}>
    <IndexRoute component={ReportsIndex} />
  </Route>

// export default routes

