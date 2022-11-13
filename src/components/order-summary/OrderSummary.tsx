import { FC, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  getMinifigPartsDetailsRequest,
  getSpecificMinifigRequest,
} from '../../api/apiClient';
import { MEDIA_MIN_TABLET } from '../../utils/constants/resolutions';
import { MinifigResult } from '../../utils/interfaces';
import CustomButton from '../custom-button/CustomButton';
import CustomImage from '../custom-image/CustomImage';
import { PartsResult } from '../details-modal/DetailsModalProps';
import PartDetails from '../part-details/PartDetails';

interface Props {
  figureId?: string;
  disabled?: boolean;
  formId: string;
}

const OrderSummary: FC<Props> = ({ figureId, disabled, formId }) => {
  const [minifigs, setMinifigs] = useState<MinifigResult>();
  const [partsDetails, setPartsDetails] = useState<PartsResult[]>([]);

  const errorMessage = minifigs?.detail;

  const getSummaryData = useCallback(async () => {
    const getFigures = await getSpecificMinifigRequest(figureId);
    const getPartDetails = await getMinifigPartsDetailsRequest(figureId);
    setMinifigs(getFigures);
    setPartsDetails(getPartDetails.results);
  }, [figureId]);

  useEffect(() => {
    getSummaryData();
  }, [getSummaryData]);

  return (
    <StyledWrapper>
      <h1>Summary</h1>
      <div style={{ textAlign: 'center' }}>
        <CustomImage
          size="large"
          title={minifigs?.name}
          imageUrl={minifigs?.set_img_url}
        />
        <p>{minifigs?.name || errorMessage}</p>
      </div>
      {!errorMessage && (
        <>
          <p>There are {minifigs?.num_parts} parts in this minifig:</p>
          {partsDetails.map(({ part }) => {
            return (
              <StyledBox key={part.part_num}>
                <PartDetails
                  name={part.name}
                  img={part.part_img_url}
                  url={part.part_url}
                  partId={part.part_num}
                />
              </StyledBox>
            );
          })}
        </>
      )}
      <CustomButton
        formId={formId}
        disabled={disabled || errorMessage ? true : false}
      >
        submit
      </CustomButton>
    </StyledWrapper>
  );
};

export default OrderSummary;

const StyledWrapper = styled.div`
  font-weight: bold;
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

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
  width: 100%;
`;
