import styled from 'styled-components'

export const ReplyContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  min-width: 100%;
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
`

export const Icons = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
`

export const IconContainer = styled.div`
  img {
    width: 1rem;
    height: auto;
  }

  svg {
    color: ${(props) => props.theme['red-500']};
  }
`

export const Avatar = styled.img`
  border-radius: 50%;
  width: 2.3rem;
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
