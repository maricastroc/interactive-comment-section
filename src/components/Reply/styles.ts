import styled from 'styled-components'

export const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`

export const ReplyContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  min-width: 100%;
  padding: 1.5rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.white};

  @media (min-width: 680px) {
    margin-top: 1rem;
    padding: 2rem;
    gap: 1.5rem;
  }
`

export const ReplyContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  min-width: 100%;
  align-items: flex-start;

  @media (min-width: 680px) {
    margin-bottom: 0.5rem;
  }
`

export const IconReplyContainer = styled.div`
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: 200ms;
  }

  img {
    width: 1rem;
    height: auto;
  }

  p {
    display: none;
  }

  @media (min-width: 480px) {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    p {
      font-size: 0.9rem;
      display: flex;
      color: ${(props) => props.theme['blue-500']};
      font-weight: 500;
    }
  }

  @media (min-width: 680px) {
    p {
      font-size: 1rem;
    }
  }
`

export const Icons = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;

  @media (min-width: 480px) {
    gap: 0.8rem;
  }

  @media (min-width: 680px) {
    gap: 1rem;
  }
`

export const IconContainer = styled.div`
  cursor: pointer;

  img {
    width: 1rem;
    height: auto;
  }

  svg {
    color: ${(props) => props.theme['red-500']};
  }

  p {
    display: none;
  }

  &:hover {
    opacity: 0.8;
    transition: 200ms;
  }

  @media (min-width: 480px) {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    p {
      font-size: 0.9rem;
      display: flex;
      font-weight: 500;

      &.edit {
        color: ${(props) => props.theme['blue-500']};
      }

      &.delete {
        color: ${(props) => props.theme['red-500']};
      }
    }
  }

  @media (min-width: 680px) {
    p {
      font-size: 1rem;
    }
  }
`

export const Avatar = styled.img`
  border-radius: 50%;
  width: 2.3rem;

  @media (min-width: 680px) {
    width: 2.5rem;
  }
`

export const UserInfo = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`

export const UserData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  @media (min-width: 680px) {
    gap: 0.3rem;
  }
`

export const Username = styled.strong`
  font-size: 0.9rem;
  color: ${(props) => props.theme['blue-700']};
  font-weight: 500;

  @media (min-width: 480px) {
    font-size: 1rem;
  }
`

export const Time = styled.p`
  font-size: 0.85rem;
  color: ${(props) => props.theme['grayish-blue-500']};
  font-weight: 400;

  @media (min-width: 680px) {
    font-size: 0.95rem;
  }
`

export const TextContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  font-size: 0.85rem;
  line-height: 160%;
  gap: 1rem;

  @media (min-width: 480px) {
    font-size: 0.9rem;
  }

  @media (min-width: 680px) {
    font-size: 1rem;
  }

  span {
    color: ${(props) => props.theme['blue-500']};
    font-weight: 500;
  }
`
