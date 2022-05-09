import { ReactNode, FunctionComponent } from 'react'

type Props = {
  children?: ReactNode
}

const ContentContainer: FunctionComponent = ({ children }: Props) => {
  return <main>{children}</main>
}

export default ContentContainer