import { isEmpty } from 'lodash'
import Tippy from '@tippyjs/react'
import React from 'react'
import TooltipPlacementEnum from './tooltip-placement.enum'
import TooltipProps from './tooltip.props'
import { ClassNamePropType, ClassNamesObjectPropType } from './tooltip.types'
import clsx from 'clsx'

import 'tippy.js/dist/tippy.css'
import 'tippy.js/animations/shift-away.css'
import 'tippy.js/animations/shift-away-subtle.css'
import 'tippy.js/animations/shift-away-extreme.css'
import 'tippy.js/animations/shift-toward.css'
import 'tippy.js/animations/shift-toward-subtle.css'
import 'tippy.js/animations/shift-toward-extreme.css'
import 'tippy.js/animations/scale.css'
import 'tippy.js/animations/scale-subtle.css'
import 'tippy.js/animations/scale-extreme.css'
import 'tippy.js/animations/perspective.css'
import 'tippy.js/animations/perspective-subtle.css'
import 'tippy.js/animations/perspective-extreme.css'

import './tooltip.module.scss'
import TooltipAnimations from './tooltip-animations.enum'
import TooltipThemes from './tooltip-themes.enum'
import TooltipTriggers from './tooltip-triggers.enum'

function Tooltip({ triggerElement, tooltipSettings }: TooltipProps) {
  const {
    classNames = [],
    className = '',
    content,
    onShow = () => {},
    allowHTML = true,
    animation = TooltipAnimations.SCALE_EXTREME,
    placement = TooltipPlacementEnum.TOP,
    offset = [0, 10],
    arrow = true,
    interactive = false,
    delay = [100, 100],
    trigger = TooltipTriggers.MOUSEENTER_FOCUS,
    theme = TooltipThemes.GREY,
    ...propsRest
  } = tooltipSettings

  return (
    <Tippy
      allowHTML={allowHTML}
      content={content}
      onShow={onShow}
      animation={animation}
      placement={placement}
      offset={offset}
      arrow={arrow}
      interactive={interactive}
      delay={delay}
      trigger={trigger}
      theme={theme}
      {...getClassNameProp(classNames, className)}
      {...propsRest}>
      {triggerElement}
    </Tippy>
  )
}

const getClassNameProp = (
  classNames: string[],
  className: string
): ClassNamePropType | {} => {
  const classNamesObject: ClassNamesObjectPropType | {} = !isEmpty(classNames)
    ? classNames.reduce(
        (acc: ClassNamesObjectPropType, item: string) => ({
          ...acc,
          ...(!isEmpty(item) && isEmpty(acc[item]) && { [item]: true })
        }),
        {
          ...(!isEmpty(className) && { [className]: !isEmpty(className) })
        }
      )
    : {}
  return isEmpty(classNamesObject) ? {} : { className: clsx(classNamesObject) }
}

export default Tooltip
