import { ButtonWrapper } from './styles'

type ButtonProps = {
  icon: React.ReactNode
  children?: React.ReactNode
  size?: number
} & React.ComponentProps<'button'>

export default function Button({
  icon,
  children,
  size = 14,
  ...props
}: ButtonProps) {
  return (
    <ButtonWrapper $size={size} {...props}>
      {icon}
      {children}
    </ButtonWrapper>
  )
}
