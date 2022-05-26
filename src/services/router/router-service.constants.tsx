import { lazy } from 'react'
import { RouterSettingsType } from './router-service.types'

const Shop = lazy(() => import('components/shop/shop.component'))
const Home = lazy(() => import('components/home/home.component'))
const About = lazy(() => import('components/about/about.component'))
const ItemPage = lazy(() => import('components/item-page/item-page.component'))
const WithRouterExample = lazy(
  () => import('components/with-router-example/with-router-example.component')
)
const PromiseAllExampleComponent = lazy(
  () => import('components/promise-all-example/promise-all-example.component')
)
const DateRangePicker = lazy(
  () => import('components/date-range-picker/date-range-picker.component')
)
const ReactSelectExample = lazy(
  () => import('components/react-select-example/react-select-example.component')
)
const NotFoundComponent = lazy(
  () => import('components/not-found/not-found.component')
)

export enum RouterKeys {
  HOME = 'home',
  ABOUT = 'about',
  SHOP = 'shop',
  ITEM = 'item',
  WITH_ROUTER_EXAMPLE = 'with-router-example',
  PROMISE_ALL_EXAMPLE = 'promise-all-example',
  DATE_RANGE_PICKER = 'date-range-picker',
  REACT_SELECT_EXAMPLE = 'react-select-example',
  NOT_FOUND = 'not-found'
}

export const RouterSettings: RouterSettingsType = {
  [RouterKeys.HOME]: {
    routePattern: '/',
    title: 'Home',
    component: Home
  },
  [RouterKeys.ABOUT]: {
    routePattern: '/about',
    title: 'About',
    component: About
  },
  [RouterKeys.SHOP]: {
    routePattern: '/shop',
    title: 'Shop',
    component: Shop
  },
  [RouterKeys.ITEM]: {
    routePattern: '/shop/:itemId',
    title: 'Item Page',
    component: ItemPage
  },
  [RouterKeys.WITH_ROUTER_EXAMPLE]: {
    routePattern: '/router/:idOne/tryout/:idTwo/page/:idThree/sej',
    title: 'With Router Example',
    component: WithRouterExample
  },
  [RouterKeys.PROMISE_ALL_EXAMPLE]: {
    routePattern: '/promise-all-example',
    title: 'Promise All Example',
    component: PromiseAllExampleComponent
  },
  [RouterKeys.DATE_RANGE_PICKER]: {
    routePattern: '/date-range-picker',
    title: 'Date Range Picker',
    component: DateRangePicker
  },
  [RouterKeys.REACT_SELECT_EXAMPLE]: {
    routePattern: '/react-select-example',
    title: 'React Select Example',
    component: ReactSelectExample
  },
  [RouterKeys.NOT_FOUND]: {
    routePattern: '*',
    title: 'Not Found',
    component: NotFoundComponent
  }
}
