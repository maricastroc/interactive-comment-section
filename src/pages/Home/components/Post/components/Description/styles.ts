import styled from 'styled-components'

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.white};
  padding: 1.5rem;
  border-radius: 6px;

  @media (min-width: 680px) {
    padding: 2rem;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`

export const Avatar = styled.img`
  border-radius: 50%;
  width: 2.5rem;
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
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Paragraph = styled.p`
  font-size: 0.85rem;
  line-height: 150%;
  color: ${(props) => props.theme['grayish-blue-500']};
  font-weight: 400;

  @media (min-width: 480px) {
    font-size: 0.9rem;
  }

  @media (min-width: 680px) {
    font-size: 1rem;
  }

  a {
    color: ${(props) => props.theme['blue-500']};
    font-weight: 500;
    text-decoration: none;
  }
`
