import React, { useState } from 'react'
import ReactPlayer from 'react-player'

const VideoComponent = ({ setContentVisibility }) => {
  const [videoEnded, setVideoEnded] = useState(false)

  const handleVideoEnd = () => {
    // Callback function to be executed when the video ends
    setVideoEnded(true)
    setContentVisibility(true)
  }
  const handleVideoReady = () => {
    // Callback function to be executed when the video is ready
    console.log('READY')
    // setContentVisibility(true)
    // setVideoEnded(true)
  }

  return (
    <div
      id='video_container'
      style={{
        overflow: 'hidden',
        position: 'absolute',
        zIndex: 30000000
      }}
      className="bg-[url('/simplebg.png')] h-screen bg-cover bg-no-repeat bg-center bg-fixed"
    >
      {!videoEnded && (
        <ReactPlayer
          url='/videos/mbls.mp4' // Replace with your video URL
          playing
          muted
          controls={false}
          width='100vw'
          height='100vh'
          onEnded={handleVideoEnd}
          onReady={handleVideoReady}
          playsinline
        />
      )}
    </div>
  )
}

export default VideoComponent
