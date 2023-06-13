import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import {
  ReplyAvatar,
  ReplyBoxContainer,
  ReplyBoxContent,
  ReplyBtn,
  TextAreaBox,
} from './styles'
import { PostsContext } from '../../../../contexts/PostsContext'

interface ReplyProps {
  replyTo: string
  isOpen: boolean
  commentId: number
  onSubmit: () => void
}

export function ReplyBox({ replyTo, isOpen, commentId, onSubmit }: ReplyProps) {
  const { addNewReply } = useContext(PostsContext)
  const [text, setText] = useState('')

  function handleUserInput(ev: ChangeEvent<HTMLTextAreaElement>) {
    ev.target.setCustomValidity('')
    setText(ev.target.value)
  }

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault()
    addNewReply(text, commentId, replyTo)
    setText('')
    onSubmit()
  }

  return (
    isOpen && (
      <ReplyBoxContainer onSubmit={handleSubmit}>
        <ReplyBoxContent>
          <ReplyAvatar src="https://github.com/maricastroc.png" />
          <TextAreaBox value={text} onChange={handleUserInput} />
        </ReplyBoxContent>
        <ReplyBtn type="submit">Reply</ReplyBtn>
      </ReplyBoxContainer>
    )
  )
}
