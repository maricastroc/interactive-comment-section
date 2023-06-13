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
  Icons,
  ReplyContainer,
  ReplyContent,
  TextContainer,
  Time,
  UserData,
  UserInfo,
  Username,
} from './styles'

export function Reply({
  id,
  publishedAt,
  content,
  username,
  toUser,
}: ReplyProps) {
  const { removeReply } = useContext(PostsContext)

  const [rating, setRating] = useState(0)

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
            <IconContainer>
              <img
                src="/icon-edit.svg"
                alt=""
                onClick={() => setIsEditBoxOpen(!isEditBoxOpen)}
              />
            </IconContainer>
            <IconContainer>
              <Trash size={22} weight="fill" onClick={() => removeReply(id)} />
            </IconContainer>
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
  )
}
