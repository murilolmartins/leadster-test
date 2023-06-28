import { Tag } from 'antd';
import styled from 'styled-components';

export const VideoModalContentContainer = styled.div`
  border-radius: 15px;
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  max-width: 800px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const VideoModalTitleContainer = styled.div`
  padding: 30px 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.gaps.small};
  width: 100%;
  max-width: 425px;
  align-self: center;
`;

export const VideoModalSubtitle = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
`;

export const VideoModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.xxlarge};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.colors.black};
  line-height: initial;
`;

export const VideoModalContent = styled.div`
  padding: 20px;
`;

export const VideoModalSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.small};
  padding-bottom: 10px;
`;

export const VideoModalSectionTitle = styled.h4``;

export const VideoModalDescriptionText = styled.p`
  font-weight: ${({ theme }) => theme.font.weight.light};
`;

export const VideoModalDivisor = styled.hr`
  width: 100%;
  border: 0.5px solid ${({ theme }) => theme.colors.gray_100};
`;

export const VideoModalDownLoadTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.gaps.xsmall};
`;

export const VideoModalDownLoadTag = styled(Tag)`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  padding: 2px 6px 2px 6px;
`;
