const VideoPlayer = ({ url }) => {
  return (
    <div className="w-full max-w-4xl">
      {url.includes("youtube") ? (
        <iframe
          className="w-full h-[400px] rounded-xl"
          src={url}
          title="Lesson Video"
          frameBorder="0"
          allowFullScreen
        />
      ) : (
        <video
          controls
          className="w-full rounded-xl"
        >
          <source src={url} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default VideoPlayer;