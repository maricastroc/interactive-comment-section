import { formatDistanceToNow } from 'date-fns'
import {
  Avatar,
  CommentContainer,
  CommentContent,
  Header,
  IconContainer,
  IconReplyContainer,
  Icons,
  RepliesContainer,
  TextContainer,
  Time,
  UserData,
  UserInfo,
  Username,
  Wrapper,
} from './styles'
import { Rating } from '../Rating'
import { ReplyBox } from './components/ReplyBox'
import { CommentProps, PostsContext } from '../../contexts/PostsContext'
import { useState, useContext } from 'react'
import { Trash } from 'phosphor-react'
import { Edit } from './components/Edit'
import { Reply } from '../Reply'

export function Comment({
  id,
  publishedAt,
  content,
  username,
  isFromUser,
}: CommentProps) {
  const { removeComment, replies } = useContext(PostsContext)

  const [rating, setRating] = useState(0)

  const commentReplies = replies.filter((reply) => reply.commentId === id)

  console.log(commentReplies)

  const [isReplyBoxOpen, setIsReplyBoxOpen] = useState(false)
  const [isEditBoxOpen, setIsEditBoxOpen] = useState(false)

  const publishedDateRelativeToNow = formatDistanceToNow(
    new Date(publishedAt),
    { addSuffix: true },
  )

  function handleSetRating(type: 'increase' | 'decrease') {
    if (type === 'increase') {
      setRating(rating + 1)
    } else {
      rating === 0 ? setRating(0) : setRating(rating - 1)
    }
  }

  return (
    <Wrapper>
      <CommentContainer>
        <Rating quantity={rating} onChange={handleSetRating} />
        <CommentContent>
          <Header>
            <UserInfo>
              <Avatar src={username.avatarUrl} />
              <UserData>
                <Username>{username.name}</Username>
                <Time>{publishedDateRelativeToNow}</Time>
              </UserData>
            </UserInfo>
            {isFromUser ? (
              <Icons>
                <IconContainer onClick={() => setIsEditBoxOpen(!isEditBoxOpen)}>
                  <img src="/icon-edit.svg" alt="" />
                  <p className="edit">{isEditBoxOpen ? 'Close' : 'Edit'}</p>
                </IconContainer>
                <IconContainer onClick={() => removeComment(id)}>
                  <Trash size={22} weight="fill" />
                  <p className="delete">Delete</p>
                </IconContainer>
              </Icons>
            ) : (
              <IconReplyContainer
                onClick={() => setIsReplyBoxOpen(!isReplyBoxOpen)}
              >
                <img src="/icon-reply.svg" alt="" />
                <p>{isReplyBoxOpen ? 'Close' : 'Reply'}</p>
              </IconReplyContainer>
            )}
          </Header>
          {isEditBoxOpen ? (
            <Edit
              isOpen={isEditBoxOpen}
              type="comment"
              onSubmit={() => setIsEditBoxOpen(false)}
              initialContent={content}
              id={id}
            />
          ) : (
            <TextContainer>{content}</TextContainer>
          )}
        </CommentContent>
      </CommentContainer>
      <ReplyBox
        replyTo={username.name}
        isOpen={isReplyBoxOpen}
        commentId={id}
        onSubmit={() => setIsReplyBoxOpen(false)}
      />
      <RepliesContainer>
        {commentReplies.map((reply) => {
          return <Reply key={reply.id} {...reply} />
        })}
      </RepliesContainer>
    </Wrapper>
  )
}
