import { RiArrowDownSFill } from 'react-icons/ri';

import { theme } from '@styles';

import * as S from './VideoListOrderSelect.styles';

import { Select } from 'antd';

const VideoListOrderSelect = () => {
  return (
    <S.VideoListOrderSelectContainer>
      <S.VideoListOrderSelectText>Ordenar por:</S.VideoListOrderSelectText>
      <Select
        defaultValue="Data de publicação"
        style={{ width: 180 }}
        options={[
          { value: 'createdAt', label: 'Data de publicação' },
          { value: 'catecory', label: 'Categoria' }
        ]}
        suffixIcon={<RiArrowDownSFill size={30} color={theme.colors.black} />}
      />
    </S.VideoListOrderSelectContainer>
  );
};

export { VideoListOrderSelect };
