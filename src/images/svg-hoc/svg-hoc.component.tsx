import React from 'react'
import { IconSize } from './icon-size.enum'
import { isNil } from 'lodash'
import Tooltip from 'components/tooltip/tooltip.component'
import {
  SvgComponentType,
  SvgHocProps,
  SvgHocReturnType
} from './svg-hoc.types'
import SvgIconProps from './svg-icon-props.types'
import { isFunction } from 'utils/utils'

export default function svgHoc(
  svgComponent: SvgComponentType
): SvgHocReturnType {
  return ({
    size = IconSize.XXS,
    tooltipSettings,
    ...props
  }: SvgHocProps): JSX.Element => {
    const extraProps = props ?? {}
    const newProps: SvgIconProps = {
      ...extraProps,
      style: {
        ...(extraProps.style ?? {}),
        ...(isNil(props.style?.width) &&
          isNil(props.style?.height) && {
            width: size,
            height: size
          }),
        ...(isFunction(props.onClick) && { cursor: 'pointer' }),
        outline: 'none'
      }
    }

    const SvgElement: JSX.Element = svgComponent(newProps)

    return (
      <>
        {tooltipSettings ? (
          <Tooltip
            triggerElement={SvgElement}
            tooltipSettings={tooltipSettings}
          />
        ) : (
          SvgElement
        )}
      </>
    )
  }
}
