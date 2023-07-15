import { PageSection } from '@components-common';

import { HomeVideoListCard } from './components/HomeVideoListCard/HomeVideoListCard';
import HomeVideoListHeader from './components/HomeVideoListHeader/HomeVideoListHeader';
import HomeVideoListOrderSelect from './components/HomeVideoListOrderSelect/HomeVideoListOrderSelect';
import HomeVideoListSearchButtons from './components/HomeVideoListSearchButtons/HomeVIdeoListSearchButtons';
import * as S from './HomeVideoList.styles';
import { useVideos } from './hooks/useVideos';

import { List } from 'antd';

const HomeVideoList = () => {
  const {
    searchVideos,
    orderTerm,
    handleFilterSearchVideos,
    handleOrderSearchVideos,
    handleResetSearchVideos,
    videos,
    isLoading
  } = useVideos();

  return (
    <PageSection>
      <S.HomeVideoListContainer>
        <HomeVideoListHeader>
          <HomeVideoListSearchButtons
            handleFilterSearchVideos={handleFilterSearchVideos}
            handleResetSearchVideos={handleResetSearchVideos}
          />
          <HomeVideoListOrderSelect
            handleOrderSearchVideos={handleOrderSearchVideos}
            orderTerm={orderTerm}
          />
        </HomeVideoListHeader>
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
          loading={isLoading}
          dataSource={searchVideos.length > 0 ? searchVideos : videos}
          renderItem={(item) => (
            <List.Item style={{ padding: '20px' }} key={item.id}>
              <HomeVideoListCard
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

export default HomeVideoList;
