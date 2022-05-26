import React from 'react'
import { RouterKeys } from './router-service.constants'
import { HttpPlainObjectType } from 'types/general.types'

export type RouterSettingsType = Record<RouterKeys, RouterSettingsValueType>

export type RouterSettingsValueType = {
  routePattern: string
  queryParamsPlaceholders?: HttpPlainObjectType
  title?: string
  component?: React.FC<any>
  isExactRoute?: boolean
}
