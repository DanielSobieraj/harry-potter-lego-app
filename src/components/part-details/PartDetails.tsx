import React, { FC, memo } from 'react';
import styled from 'styled-components';
import CustomImage from '../custom-image/CustomImage';

interface Props {
  name: string;
  img: string;
  partId: string;
  url: string;
}

const PartDetails: FC<Props> = ({ img, name, partId, url }) => {
  return (
    <>
      <CustomImage size="small" title={name} imageUrl={img} />
      <a href={url} target="_blank" rel="noreferrer">
        <div>
          <StyledName>{name}</StyledName>
          <p>
            <StyledPartNumber>{partId}</StyledPartNumber>
          </p>
        </div>
      </a>
    </>
  );
};

export default memo(PartDetails);

const StyledName = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-clamp: 1;
  -webkit-box-orient: vertical;
  padding: 0 5px;
`;

const StyledPartNumber = styled.span`
  color: var(--secondary);
`;
