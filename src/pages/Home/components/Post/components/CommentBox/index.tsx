import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import {
  CommentBoxContainer,
  CommentBoxContent,
  CommentBtn,
  Avatar,
  TextAreaBox,
} from './styles'
import { PostsContext } from '../../../../../../contexts/PostsContext'

interface CommentBoxProps {
  postId: number
}

export function CommentBox({ postId }: CommentBoxProps) {
  const [text, setText] = useState('')
  const { addNewComment } = useContext(PostsContext)

  function handleUserInput(ev: ChangeEvent<HTMLTextAreaElement>) {
    ev.target.setCustomValidity('')
    setText(ev.target.value)
  }

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault()
    addNewComment(text, postId)
    setText('')
  }

  return (
    <CommentBoxContainer onSubmit={handleSubmit}>
      <CommentBoxContent>
        <Avatar src="https://github.com/maricastroc.png" alt="" />
        <TextAreaBox
          placeholder="Leave a comment!"
          spellCheck={false}
          value={text}
          onChange={handleUserInput}
          required
        />
      </CommentBoxContent>
      <CommentBtn type="submit" className={text.length === 0 ? 'disabled' : ''}>
        Comment
      </CommentBtn>
    </CommentBoxContainer>
  )
}
