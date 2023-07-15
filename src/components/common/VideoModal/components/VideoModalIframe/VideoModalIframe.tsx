interface VideoModalIframeProps {
  url: string;
}

const VideoModalIframe = ({ url }: VideoModalIframeProps) => {
  return (
    <div>
      <iframe
        width="100%"
        height="400px"
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        id="responsive-iframe"
      />
    </div>
  );
};

export { VideoModalIframe };
