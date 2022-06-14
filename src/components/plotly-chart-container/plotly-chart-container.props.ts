import { Config, Frame, Layout, PieData, PlotData } from 'plotly.js'

export interface PlotlyInitDataType {
  data: Partial<PlotData | PieData>[]
  layout: Partial<Layout>
  config?: Partial<Config>
  frames?: Frame[]
}

export interface PlotlyChartContainerProps {
  data: PlotlyInitDataType
  inlineStyle?: any
  className?: string
}
