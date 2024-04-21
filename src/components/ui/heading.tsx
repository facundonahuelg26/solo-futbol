interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  subtitle?: boolean
}
const Heading = (props: HeadingProps) => {
  const { subtitle, children } = props
  if (subtitle) {
    return <h2 className='mb-2.5 text-xl font-medium'>{children}</h2>
  }
  return <h1 className='text-3xl font-semibold'>{children}</h1>
}

export default Heading
