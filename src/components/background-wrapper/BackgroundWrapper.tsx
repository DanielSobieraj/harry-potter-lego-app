import { FC, ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children?: ReactNode
}

const BackgroundWrapper: FC<Props> = ({ children }) => {
  return <StyledBackground>{children}</StyledBackground>
}

export default BackgroundWrapper

const StyledBackground = styled.div``
