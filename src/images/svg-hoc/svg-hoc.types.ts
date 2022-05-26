import SvgIconProps from './svg-icon-props.types'
import { IconSize } from './icon-size.enum'
import { TooltipSettings } from 'components/tooltip/tooltip.props'

export interface SvgHocProps extends SvgIconProps {
  size?: IconSize | number
  tooltipSettings?: TooltipSettings
}

export type SvgHocReturnType = (props: SvgHocProps) => JSX.Element

export type SvgComponentType = (props: SvgIconProps) => JSX.Element
