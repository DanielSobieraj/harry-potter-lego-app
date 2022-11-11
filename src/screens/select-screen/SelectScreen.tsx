import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CustomButton from '../../components/custom-button/CustomButton';
import CustomCard from '../../components/custom-card/CustomCard';

export interface Result {
  set_num: string;
  name: string;
  num_parts: number;
  set_img_url: string;
  set_url: string;
  last_modified_dt: string;
}

const SelectScreen = () => {
  const [minifigs, setMinifigs] = useState<Result[]>([]);
  const [parts, setParts] = useState<string[]>([]);
  const [partsArray, setPartsArray] = useState<any[]>([]);
  const [selectedCard, setSelectedCard] = useState<number>(-1);

  useEffect(() => {
    const getMinifs = async () => {
      const response = await fetch(
        `https://rebrickable.com/api/v3/lego/minifigs/?page_size=3&in_theme_id=246&key=${process.env.REACT_APP_API_KEY}`
      ).then((data) => data.json());
      const minifigs: Result[] = response.results;
      const legoPartsIdsMapped = minifigs.map(({ set_num }) => set_num);

      setMinifigs(minifigs);
      setParts(legoPartsIdsMapped);
    };
    getMinifs();
  }, []);

  // console.log(parts)

  // useEffect(() => {
  //   const getParts = async () => {
  //     const promises = parts.map((data) =>
  //       fetch(
  //         `https://rebrickable.com/api/v3/lego/minifigs/${data}/parts?key=e0c51028c5829d91802ef1224f00a007`
  //       ).then((data) => data.json())
  //     )
  //     const result = await Promise.all(promises)
  //     setPartsArray(result)
  //   }
  //   getParts()
  // }, [parts])

  // console.log(partsArray)

  console.log(selectedCard);
  return (
    <StyledWrapper>
      {minifigs.length > 0 && (
        <Splide options={sliderOptions}>
          {minifigs.map(({ name, set_num, set_img_url }, i) => (
            <SplideSlide key={set_num}>
              <CustomCard
                image={set_img_url}
                title={name}
                isActive={i === selectedCard}
                details={minifigs}
                onClick={() => setSelectedCard(i)}
              />
            </SplideSlide>
          ))}
        </Splide>
      )}
      <CustomButton to="/summary" textTransform="uppercase">
        proceed to shipment
      </CustomButton>
    </StyledWrapper>
  );
};

export default SelectScreen;

const StyledWrapper = styled.div`
  /* gap: 20px; */
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
