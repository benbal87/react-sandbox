import React, { useEffect, useState } from 'react'
import style from './load-picture.module.scss'

function LoadPicture() {
  const [src, setSrc] = useState<string>()
  const [error, setError] = useState<string>()

  useEffect(() => {
    if (!src) {
      import('images/jpeg/test.jpeg')
        .then(moduleImport => setSrc(moduleImport.default))
        .catch(error => {
          console.error(error)
          setError(error)
        })
    }
  }, [src])

  return (
    <div className={style.container}>
      <div className={style.title}>image load test</div>
      {error ? <div>{error}</div> : <img src={src} alt='loaded jpg' />}
    </div>
  )
}

export default LoadPicture
