import React, { Suspense } from 'react'
import Navigation from 'components/navigation/navigation.component'
import { Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import style from './App.module.scss'
import {
  RouterKeys,
  RouterSettings
} from 'services/router/router-service.constants'
import { RouterSettingsValueType } from 'services/router/router-service.types'
import { getKeyForReactTemplate } from 'utils/utils'
import Loader from './components/loader/loader.component'

function App() {
  return (
    <div className={style.App}>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Switch>
          {(Object.keys(RouterSettings) as RouterKeys[]).reduce(
            (acc: React.ReactNode[], key: RouterKeys, index: number) => {
              const config: RouterSettingsValueType = RouterSettings[key]
              const Component: React.FC | undefined = config.component
              if (Component) {
                const { routePattern, isExactRoute = true } = config
                acc.push(
                  <Route
                    key={getKeyForReactTemplate(routePattern, index)}
                    path={routePattern}
                    exact={isExactRoute}
                    component={Component}
                  />
                )
              }
              return acc
            },
            []
          )}
        </Switch>
      </Suspense>
      <ToastContainer />
    </div>
  )
}

export default App
