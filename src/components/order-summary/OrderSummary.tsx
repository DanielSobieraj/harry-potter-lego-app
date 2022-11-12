import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getMinifigRequest } from '../../api/apiClient';
import { MEDIA_MIN_TABLET } from '../../utils/constants/resolutions';
import { Part, PartsResult, Result } from '../../utils/interfaces';
import CustomButton from '../custom-button/CustomButton';

const OrderSummary = () => {
  const [minifigs, setMinifigs] = useState<Result>();
  const [partsDetails, setPartsDetails] = useState<PartsResult[]>([]);

  let { figureId } = useParams();

  const getMinifs = useCallback(async () => {
    const response = await getMinifigRequest(figureId);
    setMinifigs(response);
  }, []);

  const getPartsDetails = useCallback(async () => {
    const response = await fetch(
      `https://rebrickable.com/api/v3/lego/minifigs/${figureId}/parts?key=e0c51028c5829d91802ef1224f00a007`
    ).then((data) => data.json());
    setPartsDetails(response.results);
  }, []);

  useEffect(() => {
    getMinifs();
    getPartsDetails();
  }, []);

  return (
    <StyledWrapper>
      <h1>Summary</h1>
      <div style={{ textAlign: 'center' }}>
        <StyledImage src={minifigs?.set_img_url} alt={minifigs?.name} />
        <p>{minifigs?.name}</p>
      </div>
      <p>There are {minifigs?.num_parts} in this minifig:</p>
      {partsDetails.map(({ part }) => {
        return (
          <StyledBox key={part.part_num}>
            <img
              src={part.part_img_url}
              alt={part.name}
              style={{ width: '50px', height: '50px', marginRight: '10px' }}
            />
            <a href={part.part_url} target="_blank" rel="noreferrer">
              <div>
                <p>{part.name}</p>
                <p>
                  Part number:{' '}
                  <StyledPartNumber>{part.part_num}</StyledPartNumber>
                </p>
              </div>
            </a>
          </StyledBox>
        );
      })}
      <CustomButton to=".." textTransform="uppercase">
        submit
      </CustomButton>
    </StyledWrapper>
  );
};

export default OrderSummary;

const StyledWrapper = styled.div`
  background: var(--white);
  color: var(--black);
  width: 100%;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 10px auto;
  padding: 10px 25px;
  box-sizing: border-box;

  @media ${MEDIA_MIN_TABLET} {
    margin-left: 5%;
    width: 50%;
  }
`;

const StyledImage = styled.img`
  display: flex;
  margin: 0 auto;
  max-width: 100%;
  height: auto;
  max-height: 200px;
`;

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
  width: 100%;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    padding: 0 5px;
  }
`;

const StyledPartNumber = styled.span`
  color: var(--secondary);
`;
