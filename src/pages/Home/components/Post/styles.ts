import styled from 'styled-components'

export const PostContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: ${(props) => props.theme['gray-100']};
`
