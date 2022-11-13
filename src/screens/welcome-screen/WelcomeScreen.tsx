import CustomLink from '../../components/custom-link/CustomLink';
import CustomTitle from '../../components/custom-title/CustomTitle';

const WelcomeScreen = () => {
  return (
    <div style={{ padding: '10px' }}>
      <CustomTitle color="white" textTransform="uppercase">
        lego minifigs mystery box
      </CustomTitle>
      <CustomLink to="/select" textTransform="uppercase">
        let's go!
      </CustomLink>
    </div>
  );
};

export default WelcomeScreen;
