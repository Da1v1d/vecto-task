import { useRef } from 'react';

export const VideoPlayer = ({ videoUrl }) => {
  const ref = useRef();
  ref?.current?.play();
  return (
    <video
      style={{
        position: 'absolute',
        top: '110px',
        right: '80px',
        width: '700px',
      }}
      id='myVideo'
      width='400'
      autoPlay>
      <source src={videoUrl} type='video/mp4' />
    </video>
  );
};
