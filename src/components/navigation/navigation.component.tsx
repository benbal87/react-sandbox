import React from 'react'
import style from './navigation.module.scss'
import { Link } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { connect, ConnectedProps } from 'react-redux'
import {
  RouterKeys,
  RouterSettings
} from 'services/router/router-service.constants'
import { getKeyForReactTemplate } from 'utils/utils'
import { selectCounterValue } from 'redux/counter/counter.selector'

export interface NavigationProps extends NavPropsFromRedux {}

function Navigation({ counterValue }: NavigationProps) {
  return (
    <nav className={style.container}>
      <h3 className={style.logo_container}>
        <img src='/logo192.png' alt='react-logo' className={style.react_logo} />
        Counter: {counterValue ?? '???'}
      </h3>

      <ul className={style.nav_links}>
        {Object.keys(RouterSettings).reduce(
          (acc: React.ReactNode[], key: string, i: number) => {
            const { routePattern, title } = RouterSettings[key as RouterKeys]
            return [
              ...acc,
              ...(!routePattern.includes('*') && !routePattern.includes(':')
                ? [
                    <Link
                      className={style.link}
                      to={routePattern}
                      key={getKeyForReactTemplate(key, i)}>
                      <li>{title}</li>
                    </Link>
                  ]
                : [])
            ]
          },
          []
        )}
      </ul>
    </nav>
  )
}

const mapStateToProps = createStructuredSelector({
  counterValue: selectCounterValue
})

const connector = connect(mapStateToProps)

export type NavPropsFromRedux = ConnectedProps<typeof connector>

export default connector(Navigation)
