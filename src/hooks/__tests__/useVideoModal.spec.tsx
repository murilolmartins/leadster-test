import { VideoModalProvider } from '@contexts';
import { useVideoModal } from '@hooks';

import { render } from '@testing-library/react';

describe('useVideoModal', () => {
  it('should return default values', () => {
    const TestComponent = () => {
      const { data, isModalVisible } = useVideoModal();

      return (
        <>
          <span>{`title: ${
            typeof data.title === 'string' && data.title.length
          }`}</span>
          <span>{`description: ${
            typeof data.description === 'string' && data.description.length
          }`}</span>
          <span>{`url: ${
            typeof data.url === 'string' && data.url.length
          }`}</span>
          <span>{`isModalVisible: ${isModalVisible}`}</span>
        </>
      );
    };

    const { getByText } = render(
      <VideoModalProvider>
        <TestComponent />
      </VideoModalProvider>
    );

    expect(getByText('title: 0')).toBeTruthy();
    expect(getByText('description: 0')).toBeTruthy();
    expect(getByText('url: 0')).toBeTruthy();
    expect(getByText(`isModalVisible: false`)).toBeTruthy();
  });
});
