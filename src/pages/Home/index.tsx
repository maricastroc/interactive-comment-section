import { useContext } from 'react'
import { Post } from './components/Post'
import { PageContainer } from './styles'
import { PostProps, PostsContext } from '../../contexts/PostsContext'

export function Home() {
  const { posts } = useContext(PostsContext)

  return (
    <PageContainer>
      {posts.map((post: PostProps) => {
        return <Post key={post.id} {...post} />
      })}
    </PageContainer>
  )
}
