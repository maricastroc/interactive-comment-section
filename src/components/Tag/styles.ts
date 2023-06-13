import styled from 'styled-components'

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme['blue-500']};
  padding: 0.1rem 0.4rem;
  border-radius: 2px;

  p {
    font-size: 0.8125rem;
    color: ${(props) => props.theme.white};
    font-weight: 500;
  }
`
