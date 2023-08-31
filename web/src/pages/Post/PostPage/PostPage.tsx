import { useEffect } from 'react'

import PostCell from 'src/components/Post/PostCell'

type PostPageProps = {
  id: number
}

const PostPage = ({ id }: PostPageProps) => {
  useEffect(() => {
    console.log('post page', id)
  }, [id])
  return <PostCell id={id} />
}

export default PostPage
