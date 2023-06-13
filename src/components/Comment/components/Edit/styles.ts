import styled from 'styled-components'

export const EditBox = styled.form`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;

  @media (min-width: 680px) {
    flex-direction: row;
  }
`

export const EditBoxContent = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`

export const EditAvatar = styled.img`
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
    font-size: 1rem;
  }

  @media (min-width: 680px) {
    height: 7rem;
  }
`

export const EditBtn = styled.button`
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
