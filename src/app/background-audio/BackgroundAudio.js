import {useEffect, useState, useRef} from 'react';
import OneOrZero from '../../assets/1.1_3-oneor0.wma.mp3';

function AudioPlayer({src, isPlaying}) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);

  return (
    <audio loop ref={ref}>
      <source src={src} type='audio/mp3'></source>
    </audio>
  );
}

function BackgroundAudio() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? '🔇 Mute music' : '🔊 Play music'}
      </button>
      <AudioPlayer
        isPlaying={isPlaying}
        src={OneOrZero}
      />
    </>
  );
}

export default BackgroundAudio;
