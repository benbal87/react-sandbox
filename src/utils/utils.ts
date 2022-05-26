import { GeneralFunction } from 'types/general.types'
import { isNil } from 'lodash'

export const getKeyForReactTemplate = (str: string, n: number) => {
  const formattedString: string = str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replaceAll(' ', '_')
  return `${formattedString}_${n}`
}

export const isFunction = (arg: any): arg is GeneralFunction =>
  typeof arg === 'function'

export const isObject = (arg: any): arg is Record<string, unknown> =>
  typeof arg === 'object' && arg?.constructor === Object

export const isIterable = (arg: any): boolean =>
  typeof arg?.[Symbol.iterator] === 'function'

export const isNotEmpty = <T>(item: T | undefined | null): item is T => {
  let result = false
  if (!isNil(item)) {
    if (isIterable(item)) {
      // @ts-ignore
      result = item['length'] > 0 || item['size'] > 0
    } else if (isObject(item)) {
      result = Object.keys(item).length > 0 || item.valueOf?.() > 0
    } else if (typeof item === 'number') {
      result = !isNaN(item)
    } else {
      result = true
    }
  }
  return result
}
