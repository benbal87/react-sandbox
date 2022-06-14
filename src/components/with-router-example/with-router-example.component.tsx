import React from 'react'
import {
  RouteComponentProps,
  useHistory,
  useLocation,
  useParams,
  withRouter
} from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { selectCounterValue } from 'redux/counter/counter.selector'
import { connect, ConnectedProps } from 'react-redux'

export interface WithRouterExampleProps
  extends WithRouterExamplePropsFromRedux,
    RouteComponentProps {}

function WithRouterExample({
  match,
  location,
  history,
  counterValue
}: WithRouterExampleProps) {
  console.log('counterValue', counterValue)
  console.log('match', match)
  console.log('location', location)
  console.log('history', history)
  const historyFromUseHistory = useHistory()
  console.log('history from use history', historyFromUseHistory)
  const locationFromUseLocation = useLocation()
  console.log('location from use location', locationFromUseLocation)
  const paramsFromUseParams = useParams()
  console.log('params from use params', paramsFromUseParams)

  return <div>RouterTryout</div>
}

const mapStateToProps = createStructuredSelector({
  counterValue: selectCounterValue
})

const connector = connect(mapStateToProps)

export type WithRouterExamplePropsFromRedux = ConnectedProps<typeof connector>

export default withRouter(connector(WithRouterExample))
