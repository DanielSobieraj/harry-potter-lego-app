import styled from 'styled-components'

const CustomLoader = () => {
  return (
    <StyledSpinner>
      <div></div>
      <div></div>
    </StyledSpinner>
  )
}

export default CustomLoader

const StyledSpinner = styled.div`
  display: inline-block;
  position: absolute;
  width: 80px;
  height: 80px;

  div {
    position: absolute;
    border: 4px solid black;
    opacity: 1;
    border-radius: 50%;
    animation: frames 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes frames {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`
