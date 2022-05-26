import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

function WithRouterExample({ match, location, history }: RouteComponentProps) {
  console.log('match', match)
  console.log('location', location)
  console.log('history', history)

  return <div>RouterTryout</div>
}

export default withRouter(WithRouterExample)
