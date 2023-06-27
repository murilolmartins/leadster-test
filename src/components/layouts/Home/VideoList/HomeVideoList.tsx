import { PageSection } from '@components-common';
import { useVideoList } from '@hooks';

import { HomeVideoListCard } from './components/HomeVideoListCard/HomeVideoListCard';
import { HomeVideoListOrderSelect } from './components/HomeVideoListOrderSelect/HomeVideoListOrderSelect';
import { HomeVideoListSearchButtons } from './components/HomeVideoListSearchButtons/HomeVIdeoListSearchButtons';
import * as S from './HomeVideoList.styles';

import { List } from 'antd';

const HomeVideoList = () => {
  const { data } = useVideoList();

  return (
    <PageSection>
      <S.HomeVideoListContainer>
        <S.HomeVideoListSearchOptionsContainer>
          <HomeVideoListSearchButtons />
          <HomeVideoListOrderSelect />
        </S.HomeVideoListSearchOptionsContainer>
        <List
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          grid={{ gutter: 18, xs: 1, sm: 1, md: 2, xl: 3, xxl: 3, lg: 3 }}
          pagination={{
            position: 'bottom',
            align: 'center',
            pageSize: 9
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item style={{ padding: '20px' }}>
              <HomeVideoListCard
                thumbnail={item.thumbnail}
                title={item.title}
                url={item.url}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </S.HomeVideoListContainer>
    </PageSection>
  );
};

export { HomeVideoList };
