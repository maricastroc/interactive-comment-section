import styled from 'styled-components'

export const PostContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: ${(props) => props.theme['gray-100']};
`

export const CommentsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 680px) {
    gap: 2rem;
  }
`
