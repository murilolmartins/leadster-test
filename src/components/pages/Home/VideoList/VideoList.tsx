import { PageSection } from '@components-common';

import { VideoListCard } from './components/VideoListCard/VideoListCard';
import { VideoListOrderSelect } from './components/VideoListOrderSelect/VideoListOrderSelect';
import { VideoListSearchButtons } from './components/VideoListSearchButtons/VIdeoListSeachButtons';
import * as S from './VideoList.styles';

import { useVideoList } from '@contexts';
import { List } from 'antd';

const VideoList = () => {
  const { data } = useVideoList();

  return (
    <PageSection>
      <S.VideoListContainer>
        <S.VideoListSearchOptionsContainer>
          <VideoListSearchButtons />
          <VideoListOrderSelect />
        </S.VideoListSearchOptionsContainer>
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
              <VideoListCard
                thumbnail={item.thumbnail}
                title={item.title}
                url={item.url}
                description={item.description}
              />
            </List.Item>
          )}
        />
      </S.VideoListContainer>
    </PageSection>
  );
};

export { VideoList };