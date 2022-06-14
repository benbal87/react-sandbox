import React, { useState } from 'react'
import style from './save-dom-image.module.scss'
import PlotlyChartContainer from 'components/plotly-chart-container/plotly-chart-container.component'
import {
  getPlotlyProps,
  saveJpg,
  saveJpg1,
  savePng,
  savePng1,
  saveSvg,
  saveSvg1
} from 'components/save-dom-image/save-dom-image.utils'

function SaveDomImage() {
  const [imgSource, setImgSource] = useState<string>('')

  const showSvg = () => {
    saveSvg().then((src: string) => setImgSource(src))
  }

  const showPng = () => {
    savePng().then((src: string) => setImgSource(src))
  }

  const showJpg = () => {
    saveJpg().then((src: string) => setImgSource(src))
  }

  const showSvg1 = () => {
    saveSvg1().then((src: string) => setImgSource(src))
  }

  const showPng1 = () => {
    savePng1().then((src: string) => setImgSource(src))
  }

  const showJpg1 = () => {
    saveJpg1().then((src: string) => setImgSource(src))
  }

  return (
    <div className={style.container}>
      <div id='save-image-container' className={style.save_image_container}>
        <div className={style.buttons_wrapper}>
          <button onClick={showSvg} className={style.save_btn}>
            SAVE SVG
          </button>
          <button onClick={showPng} className={style.save_btn}>
            SAVE PNG
          </button>
          <button onClick={showJpg} className={style.save_btn}>
            SAVE JPG
          </button>
          <button onClick={showSvg1} className={style.save_btn}>
            SAVE SVG 1
          </button>
          <button onClick={showPng1} className={style.save_btn}>
            SAVE PNG 1
          </button>
          <button onClick={showJpg1} className={style.save_btn}>
            SAVE JPG 1
          </button>
        </div>
        <div className={style.charts}>
          <div id='chart1' className={style.plotly_wrapper}>
            <PlotlyChartContainer data={getPlotlyProps()} />
          </div>
          <div className={style.plotly_wrapper}>
            <PlotlyChartContainer data={getPlotlyProps()} />
          </div>
          <div className={style.plotly_wrapper}>
            <PlotlyChartContainer data={getPlotlyProps()} />
          </div>
          <div className={style.plotly_wrapper}>
            <PlotlyChartContainer data={getPlotlyProps()} />
          </div>
          <div className={style.plotly_wrapper}>
            <PlotlyChartContainer data={getPlotlyProps()} />
          </div>
          <div className={style.plotly_wrapper}>
            <PlotlyChartContainer data={getPlotlyProps()} />
          </div>
        </div>
      </div>
      <div className={style.output_container}>
        <img src={imgSource} alt='' />
      </div>
    </div>
  )
}

export default SaveDomImage
