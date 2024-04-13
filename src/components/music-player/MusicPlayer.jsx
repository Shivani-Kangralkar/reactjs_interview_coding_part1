import "./music.css";

import React, { useEffect, useRef, useState } from "react";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentMusic, setCurrentMusic] = useState(0);
  const [progressTrack, setProgressTrack] = useState(0);

  const tracks = [
    {
      title: "Track 1",
      source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Track 2",
      source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Track 3",
      source: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      image:
        "https://upload.wikimedia.org/wikipedia/en/5/52/Meet_the_Beatles.jpg",
    },
  ];

  const handlePausePlay = () => {
    // console.log("handlePausePlay");
    if (isPlaying) {
      console.log("pause");
      audioRef.current.pause();
    } else {
      console.log("playing");
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSkipTrack = (getDirection) => {    
    if (getDirection === "forward") {

      // console.log("getDirection", getDirection);
      // console.log('tracks', tracks.length);

      setCurrentMusic((prevTrack) => (prevTrack + 1) % tracks.length);

    } 
    else if (getDirection === "backward") {

      console.log("getDirection", getDirection);

      setCurrentMusic(
        (prevTrack) => (prevTrack - 1 + tracks.length) % tracks.length
      );

    }
    setProgressTrack(0);
  };

  // this module shows the progress bar changing its width
  // width is changing as music is playing. (check in element <div>)
  useEffect(()=>{
    const progress = setInterval(()=>{
      setProgressTrack(
        (audioRef.current.currentTime / audioRef.current.duration) * 100
      )
    },1000);

    return () => clearInterval(progress)
  },[isPlaying])


  return (
    <div className="music-player">
      <h1>Music Player</h1>
      <h2>
        {
          // tracks[0].title
          tracks[currentMusic].title
        }
      </h2>
      <img src={tracks[currentMusic].image} alt={tracks[currentMusic].title} />
      <audio ref={audioRef} src={tracks[currentMusic].source} />

      {/* diplay progress bar of music playing and stopped */}
      <div className="progress-bar">
        <div
          className="progress"
          style={{
            width: `${progressTrack}%`,
            background: isPlaying ? "#3498db" : "#a43636",
            height: "15px",
          }}
        ></div>
        </div>

        <div className="track-controls">
          <button onClick={() => handleSkipTrack("backward")}>Backward</button>
          <button onClick={handlePausePlay}>
            {isPlaying ? "Pause" : "Play"}
          </button>
          <button onClick={() => handleSkipTrack("forward")}>Forward</button>
        </div>
      </div>
  );
};

export default MusicPlayer;
