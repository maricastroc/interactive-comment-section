import { useContext } from 'react'
import { CommentBox } from './components/CommentBox'
import { Description } from './components/Description'
import { PostContainer } from './styles'
import { Comment } from '../../../../components/Comment'
import {
  CommentProps,
  PostProps,
  PostsContext,
} from '../../../../contexts/PostsContext'

export function Post({ id, publishedAt, content, username }: PostProps) {
  const { comments } = useContext(PostsContext)

  const postComments = comments.filter((comment) => comment.post === id)

  return (
    <PostContainer>
      <Description
        content={content}
        publishedAt={publishedAt}
        avatarUrl={username.avatarUrl}
        username={username.name}
      />
      <CommentBox postId={id} />
      {postComments.map((comment: CommentProps) => {
        return <Comment key={comment.id} {...comment} />
      })}
    </PostContainer>
  )
}
