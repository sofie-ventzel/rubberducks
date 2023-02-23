import { useEffect, useState } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export const YoutubePlayer = () => {
  const [videos, setVideos] = useState([]);

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
    <div style={{ alignSelf: "center", width: "600px" }}>
      <LiteYouTubeEmbed
        id={pickRandomVideo()}
        title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
      />
    </div>
  );
};
