import { TippyProps } from '@tippyjs/react'

interface TooltipSettings extends TippyProps {
  classNames?: string[]
}

interface TooltipProps {
  triggerElement: JSX.Element
  tooltipSettings: TooltipSettings
}

export type { TooltipSettings }
export default TooltipProps
