import React from 'react'
import clsx from 'clsx'
import style from './plotly-chart-container.module.scss'
import { PlotlyChartContainerProps } from './plotly-chart-container.props'

const Plot = React.lazy(() => import('react-plotly.js'))

function PlotlyChartContainer({
  data,
  inlineStyle = {},
  className
}: PlotlyChartContainerProps): JSX.Element {
  return (
    <>
      {data && (
        <Plot
          data={data.data}
          layout={data.layout}
          config={data.config}
          frames={data.frames}
          className={clsx(style.plotly_chart_container, className && className)}
          useResizeHandler={true}
          style={inlineStyle}
        />
      )}
    </>
  )
}

export default PlotlyChartContainer
