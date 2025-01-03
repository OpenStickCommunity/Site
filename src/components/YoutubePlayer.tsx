import React from "react";
import styles from "@site/src/components/youtubePlayer.module.css";

type YoutubePlayerTypes = {
  videoId: string;
};

const YoutubePlayer = ({ videoId }: YoutubePlayerTypes) => (
  <div className={styles.container}>
    <iframe
      allowFullScreen
      height="480"
      src={`https://www.youtube.com/embed/${videoId}?rel=0`}
      width="853"
    />
  </div>
);

export default YoutubePlayer;
