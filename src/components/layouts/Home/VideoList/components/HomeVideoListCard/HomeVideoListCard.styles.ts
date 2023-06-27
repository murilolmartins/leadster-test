import Image from 'next/image';

import styled from 'styled-components';

export const HomeVideoListCardContainer = styled.div`
  box-shadow: 0 0 30px 5px rgba(28, 43, 76, 0.1);
  border: none;
  border-radius: 15px;
  cursor: pointer;
  :hover {
    transform: scale(1.03);
    .hidden_play {
      display: initial;
    }
    .text_primary_color {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  max-width: 450px;
`;

export const HomeVideoListCardImageContainer = styled.div`
  position: relative;
`;

export const HomeVideoListCardImage = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 15px 15px 0 0;
`;

export const HomeVideoListCardInfoContainer = styled.div`
  padding: 15px 40px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0 0 15px 15px;
`;

export const HomeVideoListCardTitle = styled.h3``;

export const HomeVideoListCardImageOpacity = styled.div`
  position: absolute;
  border-radius: 15px 15px 0 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  opacity: 0.5;
  z-index: 1;
  display: none;
`;

export const HomeVideoListCardImageIconContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: none;
`;
