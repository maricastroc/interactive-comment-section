import * as Dialog from '@radix-ui/react-dialog'

import {
  ConfirmButton,
  ButtonsContainer,
  CloseButton,
  Content,
  Overlay,
  Title,
  TransactionData,
} from './styles'
import { useContext } from 'react'
import { PostsContext } from '../../contexts/PostsContext'

interface RemoveCommentProps {
  type: 'reply' | 'comment'
  idToRemove: number
}

export function RemoveCommentModal({ idToRemove, type }: RemoveCommentProps) {
  const { removeReply, removeComment } = useContext(PostsContext)

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>Delete comment</Title>
        <TransactionData>
          <p>
            Are you sure you want to delete this comment? This will remove the
            comment and can&apos;t be undone.
          </p>
        </TransactionData>
        <ButtonsContainer>
          <CloseButton>No, cancel</CloseButton>
          <ConfirmButton
            onClick={() => {
              type === 'reply'
                ? removeReply(idToRemove)
                : removeComment(idToRemove)
            }}
          >
            Yes, delete
          </ConfirmButton>
        </ButtonsContainer>
      </Content>
    </Dialog.Portal>
  )
}
