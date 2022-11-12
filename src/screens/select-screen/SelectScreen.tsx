import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { getMinifigsRequest } from '../../api/apiClient';
import CustomButton from '../../components/custom-button/CustomButton';
import CustomCard from '../../components/custom-card/CustomCard';
import { useOnClickOutside } from '../../utils/hooks/useOnClickOutside';
import { Result } from '../../utils/interfaces';

const SelectScreen = () => {
  const [minifigs, setMinifigs] = useState<Result[]>([]);
  const [selectedCard, setSelectedCard] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const ref = useRef(null);
  useOnClickOutside(ref, () => {
    setSelectedCard('');
    setIsDisabled(true);
  });

  const getMinifs = useCallback(async () => {
    const response = await getMinifigsRequest();
    setMinifigs(response.results);
  }, []);

  useEffect(() => {
    getMinifs();
  }, [getMinifs]);

  return (
    <StyledWrapper ref={ref}>
      <StyledSliderWrapper>
        {minifigs.length > 0 && (
          <Splide options={sliderOptions}>
            {minifigs.map(({ name, set_num, set_img_url }) => (
              <SplideSlide key={set_num}>
                <CustomCard
                  image={set_img_url}
                  title={name}
                  isActive={set_num === selectedCard}
                  details={set_num}
                  onClick={() => {
                    setSelectedCard(set_num);
                    setIsDisabled(false);
                  }}
                />
              </SplideSlide>
            ))}
          </Splide>
        )}
      </StyledSliderWrapper>
      <CustomButton
        disabled={isDisabled}
        to={`/summary/${selectedCard}`}
        textTransform="uppercase"
      >
        proceed to shipment
      </CustomButton>
    </StyledWrapper>
  );
};

export default SelectScreen;

const StyledSliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWrapper = styled.div`
  width: 100%;
`;

const sliderOptions = {
  drag: false,
  arrows: false,
  pagination: false,
  perPage: 3,
  gap: 35,
  breakpoints: {
    992: {
      arrows: true,
      drag: true,
      perPage: 2,
      gap: 25,
    },
    576: {
      perPage: 1,
      gap: 10,
    },
  },
};
