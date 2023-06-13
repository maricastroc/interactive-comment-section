import styled from 'styled-components'

export const CommentBoxContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: flex-start;
  background-color: ${(props) => props.theme.white};
  padding: 1.5rem;
  border-radius: 6px;

  @media (min-width: 680px) {
    flex-direction: row;
    padding: 2rem;
  }
`

export const CommentBoxContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  width: 100%;
`

export const TextAreaBox = styled.textarea`
  padding: 0.8rem 1rem;
  border: 2px solid ${(props) => props.theme['blue-500']};
  color: ${(props) => props.theme['grayish-blue-500']};
  width: 100%;
  resize: none;
  height: 6rem;
  border-radius: 12px;
  text-align: start;
  font-size: 0.85rem;

  @media (min-width: 480px) {
    font-size: 0.9rem;
  }

  @media (min-width: 680px) {
    font-size: 1rem;
    height: 7rem;
  }
`

export const CommentBtn = styled.button`
  cursor: pointer;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['blue-500']};
  border: none;
  text-transform: uppercase;
  padding: 0.5rem 1.2rem;
  font-size: 0.8rem;
  border-radius: 8px;

  &:hover {
    opacity: 0.8;
    transition: 200ms;
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }

  @media (min-width: 680px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
  }
`

export const Avatar = styled.img`
  width: 2.3rem;
  border-radius: 50%;
`
