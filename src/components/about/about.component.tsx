import React from 'react'
import TestPageComponent from './test-page/test-page.component'
import variables from '../../styles/variables.module.scss'
import IconMagnifier from 'images/svg-components/icon-magnifier.svg'
import { IconSize } from 'images/svg-hoc/icon-size.enum'

export default function About(): JSX.Element {
  const icon: JSX.Element = <IconMagnifier style={{ width: 50, height: 50 }} />

  return (
    <div>
      <h1>About Page</h1>

      <TestPageComponent iconComponent={icon} />

      <IconMagnifier
        size={IconSize.XXS}
        style={{
          width: 70,
          height: 70,
          fill: variables.textColor1
        }}
      />
    </div>
  )
}
