type HeadingProps = {
  children: React.ReactNode
}

export default function Heading({ children }: HeadingProps) {
  return <h2>{children}</h2>
}
