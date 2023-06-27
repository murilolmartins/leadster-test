import { RiArrowDownSFill } from 'react-icons/ri';

import { theme } from '@styles';

import * as S from './VideoListOrderSelect.styles';

import { useVideoList } from '@contexts';
import { VideoListKeys } from '@enums';
import { Select } from 'antd';

const VideoListOrderSelect = () => {
  const { handleOrderData, orderTerm } = useVideoList();

  return (
    <S.VideoListOrderSelectContainer>
      <S.VideoListOrderSelectText>Ordenar por:</S.VideoListOrderSelectText>
      <Select
        defaultValue={orderTerm}
        style={{ width: 180 }}
        options={[
          { value: VideoListKeys.CREATED_AT, label: 'Data de publicação' },
          { value: VideoListKeys.CATEGORY, label: 'Categoria' }
        ]}
        onChange={(value: VideoListKeys) => handleOrderData(value)}
        suffixIcon={<RiArrowDownSFill size={30} color={theme.colors.black} />}
      />
    </S.VideoListOrderSelectContainer>
  );
};

export { VideoListOrderSelect };
