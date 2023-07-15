import { Tag } from 'antd';
import styled from 'styled-components';

export const VideoModalFooterContainer = styled.footer`
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
