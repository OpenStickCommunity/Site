import React from "react";
import styles from "@site/src/components/youTubePlayer.module.css";

type YouTubePlayerTypes = {
  videoId: string;
};

const YouTubePlayer = ({ videoId }: YouTubePlayerTypes) => (
  <div className={styles.container}>
    <iframe
      allowFullScreen
      height="480"
      src={`https://www.youtube.com/embed/${videoId}?rel=0`}
      width="853"
    />
  </div>
);

export default YouTubePlayer;
