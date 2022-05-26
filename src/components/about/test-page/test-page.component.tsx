import React from 'react'
import style from 'components/about/test-page/test-page.module.scss'

export interface TestComponentProps {
  iconComponent: JSX.Element
}

export default function TestPageComponent({
  iconComponent
}: TestComponentProps) {
  const extraProps = { className: style.icon_default }

  return (
    <div>
      <h1>Test: pass down props to component from properties</h1>
      <hr />
      <div>
        {React.cloneElement(iconComponent, { className: style.icon_default })}
        <iconComponent.type {...iconComponent.props} {...extraProps} />
      </div>
    </div>
  )
}
