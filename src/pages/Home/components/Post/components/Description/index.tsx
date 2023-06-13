import { Tag } from '../../../../../../components/Tag'
import { ContentProps } from '../../../../../../contexts/PostsContext'
import {
  TextContainer,
  Header,
  Paragraph,
  Time,
  UserContainer,
  Username,
  DescriptionContainer,
  Avatar,
} from './styles'
import { formatDistanceToNow } from 'date-fns'

interface DescriptionProps {
  content: ContentProps[]
  publishedAt: string
  avatarUrl: string
  username: string
}

export function Description({
  content,
  avatarUrl,
  username,
  publishedAt,
}: DescriptionProps) {
  const publishedDateRelativeToNow = formatDistanceToNow(
    new Date(publishedAt),
    { addSuffix: true },
  )

  return (
    <DescriptionContainer>
      <Header>
        <Avatar src={avatarUrl} />
        <UserContainer>
          <div>
            <Username>{username}</Username>
            <Tag />
          </div>
          <Time>{publishedDateRelativeToNow}</Time>
        </UserContainer>
      </Header>
      <TextContainer>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <Paragraph key={line.content}>{line.content}</Paragraph>
          } else if (line.type === 'link') {
            return (
              <Paragraph key={line.content}>
                <a href={line.url} target="_blank" rel="noreferrer">
                  {line.content}
                </a>
              </Paragraph>
            )
          }
          return null
        })}
      </TextContainer>
    </DescriptionContainer>
  )
}
