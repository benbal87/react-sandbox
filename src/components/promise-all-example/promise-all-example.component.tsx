import React, { useState } from 'react'

export type Post = {
  id: number
  title: string
  body: string
  userId: number
}

const setThreePosts = () => {
  fetch(getPostUrl(), {
    method: 'POST',
    body: JSON.stringify([
      {
        title: 'uk',
        body: 'John',
        userId: 1
      },
      {
        title: 'usa',
        body: 'Xander',
        userId: 2
      },
      {
        title: 'spain',
        body: 'Alejandro',
        userId: 3
      }
    ]),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))
}

const getPostUrl = (n?: number): string =>
  `https://jsonplaceholder.typicode.com/posts${n ? `/${n}` : ''}`

const getPost = (postNumber: number): Promise<Post> => {
  console.log('starting to run getPost', postNumber)
  return fetch(getPostUrl(postNumber)).then(r => r.json())
}

function PromiseAllExampleComponent() {
  const [posts, setPosts] = useState<Post[]>([])

  const startTest = () => {
    const postsRequests: { fn: (n: number) => Promise<Post>; arg: number }[] =
      []
    for (let i = 0; i < 3; i++) {
      console.log('adding request', i)
      postsRequests.push({ fn: getPost, arg: i + 1 })
    }

    console.log('before promise all')
    Promise.all(postsRequests.map(r => r.fn(r.arg))).then((posts: Post[]) => {
      console.log('setting posts', posts)
      setPosts(posts)
    })
  }

  return (
    <div>
      <button onClick={startTest}>TEST</button>
      <button onClick={setThreePosts}>SET POSTS</button>
      {posts &&
        posts.length > 0 &&
        posts.map((post: Post, index) => (
          <div key={`${post.title}_${index}`}>{post.title}</div>
        ))}
    </div>
  )
}

export default PromiseAllExampleComponent
