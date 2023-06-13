import { formatDistanceToNow } from 'date-fns'
import { Rating } from '../Rating'
import { PostsContext, ReplyProps } from '../../contexts/PostsContext'
import { useState, useContext } from 'react'
import { Trash } from 'phosphor-react'
import { Edit } from '../Comment/components/Edit'
import {
  Avatar,
  Header,
  IconContainer,
  IconReplyContainer,
  Icons,
  ReplyContainer,
  ReplyContent,
  ReplyWrapper,
  TextContainer,
  Time,
  UserData,
  UserInfo,
  Username,
} from './styles'
import { ReplyBox } from '../Comment/components/ReplyBox'

export function Reply({
  id,
  commentId,
  publishedAt,
  content,
  username,
  toUser,
}: ReplyProps) {
  const { removeReply } = useContext(PostsContext)

  const [rating, setRating] = useState(0)

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
    <ReplyWrapper>
      <ReplyContainer>
        <Rating quantity={rating} onChange={handleSetRating} />
        <ReplyContent>
          <Header>
            <UserInfo>
              <Avatar src={username.avatarUrl} />
              <UserData>
                <Username>{username.name}</Username>
                <Time>{publishedDateRelativeToNow}</Time>
              </UserData>
            </UserInfo>
            <Icons>
              {username.name === 'maricastroc' ? (
                <Icons>
                  <IconContainer
                    onClick={() => setIsEditBoxOpen(!isEditBoxOpen)}
                  >
                    <img src="/icon-edit.svg" alt="" />
                    <p className="edit">{isEditBoxOpen ? 'Close' : 'Edit'}</p>
                  </IconContainer>
                  <IconContainer onClick={() => removeReply(id)}>
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
            </Icons>
          </Header>
          {isEditBoxOpen ? (
            <Edit
              isOpen={isEditBoxOpen}
              type="reply"
              onSubmit={() => setIsEditBoxOpen(false)}
              initialContent={content}
              id={id}
            />
          ) : (
            <TextContainer>
              <p>
                <span>{`@${toUser}`}</span> {content}
              </p>
            </TextContainer>
          )}
        </ReplyContent>
      </ReplyContainer>
      <ReplyBox
        replyTo={username.name}
        isOpen={isReplyBoxOpen}
        commentId={commentId}
        onSubmit={() => setIsReplyBoxOpen(false)}
      />
    </ReplyWrapper>
  )
}
