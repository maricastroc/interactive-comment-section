import { RatingContainer } from './styles'

interface RatingProps {
  quantity: number
  onChange: (type: 'increase' | 'decrease') => void
}

export function Rating({ quantity, onChange }: RatingProps) {
  return (
    <RatingContainer>
      <img src="./icon-plus.svg" alt="" onClick={() => onChange('increase')} />
      <strong>{quantity}</strong>
      <img
        src="./icon-minus.svg"
        className={quantity === 0 ? 'disabled' : ''}
        alt=""
        onClick={() => onChange('decrease')}
      />
    </RatingContainer>
  )
}
