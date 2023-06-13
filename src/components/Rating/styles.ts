import styled from 'styled-components'

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme['gray-100']};
  padding: 0.8rem 0.6rem;
  gap: 1.2rem;

  img {
    cursor: pointer;
    width: 0.7;

    &.disabled {
      cursor: not-allowed;
    }
  }

  strong {
    color: ${(props) => props.theme['blue-500']};
    font-size: 0.9rem;
    font-weight: 500;
  }
`
