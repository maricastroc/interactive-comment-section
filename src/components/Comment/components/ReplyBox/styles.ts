import styled from 'styled-components'

export const ReplyBoxContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;
  width: 100%;
  padding: 1.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.white};

  @media (min-width: 680px) {
    flex-direction: row;
    padding: 2rem;
  }
`

export const ReplyBoxContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  width: 90%;
`

export const ReplyAvatar = styled.img`
  border-radius: 50%;
  width: 2.3rem;
`

export const TextAreaBox = styled.textarea`
  position: relative;
  padding: 0.8rem 1rem;
  border: 2px solid ${(props) => props.theme['blue-500']};
  color: ${(props) => props.theme['grayish-blue-500']};
  width: 100%;
  resize: none;
  height: 5rem;
  border-radius: 12px;
  text-align: start;
  font-size: 0.85rem;

  span {
    position: absolute;
    color: ${(props) => props.theme['blue-500']};
  }

  @media (min-width: 480px) {
    font-size: 0.9rem;
  }

  @media (min-width: 680px) {
    height: 6rem;
    font-size: 1rem;
  }
`

export const ReplyBtn = styled.button`
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['blue-500']};
  border: none;
  text-transform: uppercase;
  padding: 0.5rem 1.2rem;
  font-size: 0.8rem;
  border-radius: 8px;

  @media (min-width: 680px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
  }
`
