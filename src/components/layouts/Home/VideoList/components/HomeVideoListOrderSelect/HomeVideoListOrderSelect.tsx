import { RiArrowDownSFill } from 'react-icons/ri';

import { VideoListKeys } from '@enums';
import { useVideoList } from '@hooks';
import { theme } from '@styles';

import * as S from './HomeVideoListOrderSelect.styles';

import { Select } from 'antd';

const HomeVideoListOrderSelect = () => {
  const { handleOrderData, orderTerm } = useVideoList();

  return (
    <S.HomeVideoListOrderSelectContainer>
      <S.HomeVideoListOrderSelectText>
        Ordenar por:
      </S.HomeVideoListOrderSelectText>
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
    </S.HomeVideoListOrderSelectContainer>
  );
};

export { HomeVideoListOrderSelect };
