import domToImage from 'dom-to-image'
import { PlotData } from 'plotly.js'
import { PlotlyInitDataType } from 'components/plotly-chart-container/plotly-chart-container.props'

const domToImageMore = require('dom-to-image-more')

export const getPlotlyProps = (): PlotlyInitDataType => ({
  data: getPlotlyData(),
  layout: {
    title: 'Colored Box Plot',
    width: 500,
    height: 300,
    showlegend: false
  }
})

export const getPlotlyData = (): PlotData[] => {
  const data = Array.apply(null, Array(50)).reduce(
    (acc: any) => {
      acc[0].y.push(Math.random())
      acc[1].y.push(Math.random() + 1)
      return acc
    },
    [
      {
        y: [],
        type: 'box'
      },
      {
        y: [],
        type: 'box'
      }
    ]
  )
  return data as PlotData[]
}

export const saveSvg = (): Promise<string> => {
  const filter = (node: any) => node.tagName !== 'i'
  return domToImageMore
    .toSvg(document.getElementById('save-image-container'), { filter })
    .then((dataUrl: any) => {
      console.log(dataUrl)
      saveFile(dataUrl, 'test.svg')
      return dataUrl
    })
}

export const savePng = (): Promise<string> =>
  domToImageMore
    .toPng(document.getElementById('save-image-container'))
    .then((dataUrl: any) => {
      console.log(dataUrl)
      saveFile(dataUrl, 'test.png')
      return dataUrl
    })

export const saveJpg = (): Promise<string> =>
  domToImageMore
    .toJpeg(document.getElementById('save-image-container'), { quality: 1 })
    .then((dataUrl: any) => {
      console.log(dataUrl)
      saveFile(dataUrl, 'test.jpg')
      return dataUrl
    })

const quality = 0.4
const getHeight = (container: any) => {
  console.log('container.clientHeight', container.clientHeight)
  return container.clientHeight
  // return 1259
  // return 1400
}

export const saveSvg1 = (): Promise<string> => {
  const container = document.getElementById('save-image-container')
  if (container) {
    const filter = (node: any) => node.tagName !== 'i'
    const height = getHeight(container)
    return domToImage
      .toSvg(container, { height, filter, quality })
      .then((dataUrl: any) => {
        // console.log(dataUrl)
        saveFile(dataUrl, 'test.svg')
        return dataUrl
      })
  }
  return Promise.resolve('')
}

export const savePng1 = (): Promise<string> => {
  const container = document.getElementById('save-image-container')
  if (container) {
    const height = getHeight(container)
    return domToImage
      .toPng(container, { height, quality })
      .then((dataUrl: any) => {
        // console.log(dataUrl)
        saveFile(dataUrl, 'test.png')
        return dataUrl
      })
  }
  return Promise.resolve('')
}

export const saveJpg1 = (): Promise<string> => {
  // const container = document.getElementById('save-image-container')
  const container = document.getElementById('chart1')
  if (container) {
    const height = getHeight(container)
    return domToImage
      .toJpeg(container, { height, quality })
      .then((dataUrl: any) => {
        // console.log(dataUrl)
        saveFile(dataUrl, 'test.jpg')
        return dataUrl
      })
  }
  return Promise.resolve('')
}

const saveFile = (dataUrl: string, fileName: string) => {
  const link = document.createElement('a')
  if (typeof link.download === 'string') {
    link.href = dataUrl
    link.download = fileName
    //Firefox requires the link to be in the body
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } else {
    window.open(dataUrl)
  }
}
