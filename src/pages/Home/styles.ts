import styled from 'styled-components'

export const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  border-radius: 12px;

  > div + div {
    margin-top: 4rem;
  }

  @media (min-width: 680px) {
    margin: 0 auto;
    padding: 0 2.5rem;
    width: clamp(20rem, 100vw, 52rem);
  }
`
