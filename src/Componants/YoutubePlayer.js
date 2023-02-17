import { useEffect, useState } from "react";
import YouTube from "react-youtube";

export const YoutubePlayer = ({ }) => {
  const [videos, setVideos] = useState([]);

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  function _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  function pickRandomVideo() {
    if (!videos || videos.length === 0) return "otV4xSdXLh0";

    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    return randomVideo;
  }

  useEffect(() => {
    async function fetchRandomVideos() {
      const videosResult = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?maxResults=50&q=funny_birds&key=AIzaSyDpGQ1r9kYYBP0sQHPVIlfUQ6hqBADv48k`
      );
      const videos = await videosResult.json();
      const videoIds = videos.items?.map((video) => video.id.videoId);
      setVideos(videoIds);
    }
    fetchRandomVideos();
  }, []);

  return (
    <div className="card">
      <YouTube videoId={pickRandomVideo()} opts={opts} />
    </div>
  );
};
