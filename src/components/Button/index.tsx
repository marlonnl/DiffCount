import { ButtonWrapper } from './styles'

type ButtonProps = {
  icon: React.ReactNode
  children?: React.ReactNode
  size?: number
}

export default function Button({ icon, children, size = 14 }: ButtonProps) {
  return (
    <ButtonWrapper $size={size}>
      {icon}
      {children}
    </ButtonWrapper>
  )
}
