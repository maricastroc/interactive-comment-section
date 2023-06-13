import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { EditBox, EditBtn, TextAreaBox } from './styles'
import { PostsContext } from '../../../../contexts/PostsContext'

interface EditProps {
  id: number
  type: 'comment' | 'reply'
  isOpen: boolean
  initialContent: string
  onSubmit: () => void
}

export function Edit({
  id,
  type,
  isOpen,
  initialContent,
  onSubmit,
}: EditProps) {
  const { editComment, editReply } = useContext(PostsContext)
  const [text, setText] = useState(initialContent)

  function handleUserInput(ev: ChangeEvent<HTMLTextAreaElement>) {
    ev.target.setCustomValidity('')
    setText(ev.target.value)
  }

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault()

    type === 'comment' ? editComment(text, id) : editReply(text, id)
    setText('')
    onSubmit()
  }

  return (
    isOpen && (
      <EditBox onSubmit={handleSubmit}>
        <TextAreaBox value={text} onChange={handleUserInput} required />
        <EditBtn type="submit" className={text.length === 0 ? 'disabled' : ''}>
          Edit
        </EditBtn>
      </EditBox>
    )
  )
}
