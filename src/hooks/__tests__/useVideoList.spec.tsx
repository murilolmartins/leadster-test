import { VideoListProvider } from '@contexts';
import { VideoListKeys } from '@enums';
import { useVideoList } from '@hooks';

import { render } from '@testing-library/react';

describe('useVideoList', () => {
  it('should return default values', () => {
    const TestComponent = () => {
      const { data, isLoading, orderTerm } = useVideoList();

      return (
        <>
          <span>{`initialData: ${data.initialData.length}`}</span>
          <span>{`search: ${data.search.length}`}</span>
          <span>{`isLoading: ${isLoading}`}</span>
          <span>{`orderTerm: ${orderTerm}`}</span>
        </>
      );
    };

    const { getByText } = render(
      <VideoListProvider>
        <TestComponent />
      </VideoListProvider>
    );

    expect(getByText('initialData: 0')).toBeTruthy();
    expect(getByText('search: 0')).toBeTruthy();
    expect(getByText('isLoading: true')).toBeTruthy();
    expect(getByText(`orderTerm: ${VideoListKeys.CREATED_AT}`)).toBeTruthy();
  });
});
