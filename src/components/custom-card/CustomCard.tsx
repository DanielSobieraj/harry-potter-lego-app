import { FC, useState } from 'react'
import styled from 'styled-components'
import { Result } from '../../screens/select-screen/SelectScreen'
import CustomLoader from '../custom-loader/CustomLoader'
import DetailsModal from '../details-modal/DetailsModal'

type Props = {
  title: string
  image: string
  isActive: boolean
  details: Result[]
  onClick: () => void
}

const CustomCard: FC<Props> = ({
  title,
  image,
  isActive,
  details,
  onClick,
}) => {
  const [isLoaded, setIsLoaded] = useState(false)

  const handleLoaded = () => setIsLoaded(true)
  return (
    <StyledWrapper onClick={onClick} isActive={isActive}>
      <StyledImageWrapper>
        <img src={image} alt={title} onLoad={handleLoaded} />
        {!isLoaded && <CustomLoader />}
      </StyledImageWrapper>
      <StyledTitle>{title}</StyledTitle>
      <DetailsModal details={details}>Details</DetailsModal>
    </StyledWrapper>
  )
}

export default CustomCard

const StyledWrapper = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--white);
  border-radius: 15px;
  transition: box-shadow 0.2s ease-in-out;
  padding: 25px;
  width: 250px;
  height: 380px;
  margin: 0 auto;
  box-shadow: ${(props) =>
    props.isActive ? '0px 0px 20px 3px var(--secondary)' : ''};

  &:active,
  &:hover {
    -webkit-box-shadow: 0px 0px 20px 3px var(--secondary);
    -moz-box-shadow: 0px 0px 20px 3px var(--secondary);
    box-shadow: 0px 0px 20px 3px var(--secondary);
  }
`
const StyledImageWrapper = styled.div`
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--white);

  img {
    width: 250px;
    height: 250px;
  }
`

const StyledTitle = styled.h5`
  font-weight: 700;
  text-align: justify;
`
