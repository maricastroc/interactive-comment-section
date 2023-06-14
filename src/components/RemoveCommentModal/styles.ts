import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100%;
  height: 100%;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  width: clamp(3rem, 90%, 20rem);
  border-radius: 12px;
  padding: 2rem;
  background-color: ${(props) => props.theme.white};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (min-width: 480px) {
    min-width: 25rem;
  }

  @media (min-width: 625px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 18rem;
    padding: 2rem;
    border-radius: 6px;
  }
`

export const Title = styled(Dialog.Title)`
  font-size: 1.5rem;
  line-height: 1.8rem;
  font-weight: 500;
  width: 100%;
  margin: 0 auto;
  text-align: left;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme['blue-700']};
`

export const TransactionData = styled.div`
  p {
    color: ${(props) => props.theme['grayish-blue-500']};
    line-height: 1.4rem;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2rem auto 0;
  gap: 1rem;

  @media (min-width: 480px) {
    flex-direction: row;
    gap: 1rem;
  }
`

export const ConfirmButton = styled.button`
  color: ${(props) => props.theme.white};
  font-weight: 500;
  padding: 0.8rem;
  gap: 0.5rem;
  border-radius: 6px;
  display: flex;
  width: 10rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 0;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['red-500']};

  &:hover {
    opacity: 0.8;
    transition: 200ms;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['red-500']};
  }
`

export const CloseButton = styled(Dialog.Close)`
  color: ${(props) => props.theme.white};
  font-weight: 500;
  padding: 0.8rem;
  gap: 0.5rem;
  border-radius: 6px;
  display: flex;
  width: 10rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-transform: uppercase;
  border: 0;
  background-color: ${(props) => props.theme['grayish-blue-500']};

  &:hover {
    opacity: 0.8;
    transition: 200ms;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme['grayish-blue-500']};
  }
`
