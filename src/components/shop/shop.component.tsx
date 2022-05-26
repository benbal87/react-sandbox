import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../useFetch'

export interface Item {
  name: string
  id: string
}

export default function Shop() {
  const {
    data: items,
    error,
    isLoading
  } = useFetch('https://run.mocky.io/v3/84845f54-84c1-430a-a9d0-358b1aa648a2')
  // useEffect(() => {
  //     const abortController = new AbortController()
  //     fetch()
  //         .then(response => {
  //             console.log('response', response)
  //             return response.json()
  //         })
  //         .then(json => {
  //             console.log('json', json)
  //             setItems(json)
  //         })
  //         .catch(error => {
  //             if (error.name === 'AbortError') {
  //                 console.log('fetch aborted')
  //             } else {
  //                 console.log('error', error)
  //             }
  //         })
  //     return () => abortController.abort()
  // }, [])

  // const [items, setItems] = useState<Item[]>([])

  return (
    <div>
      <h1>Shop</h1>
      {!isLoading &&
        !error &&
        items.map((i: Item) => (
          <h3 key={i.id}>
            <Link to={`/shop/${i.id}`}>{i.name}</Link>
          </h3>
        ))}
      {!isLoading && error && <div>{error}</div>}
      {isLoading && <div>...Loading</div>}
    </div>
  )
}
