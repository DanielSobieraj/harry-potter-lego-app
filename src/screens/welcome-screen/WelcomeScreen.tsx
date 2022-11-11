import CustomButton from '../../components/custom-button/CustomButton'
import CustomTitle from '../../components/custom-title/CustomTitle'

const WelcomeScreen = () => {
  return (
    <div style={{ padding: '10px' }}>
      <CustomTitle color="white" textTransform="uppercase">
        lego minifigs mystery box
      </CustomTitle>
      <CustomButton to="/select" textTransform="uppercase">
        let's go!
      </CustomButton>
    </div>
  )
}

export default WelcomeScreen
