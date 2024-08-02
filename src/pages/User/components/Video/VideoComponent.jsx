import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { setContentVisibilty } from '../../../../redux/slices/ContentVisibility'

const VideoComponent = () => {
  const [videoEnded, setVideoEnded] = useState(false)
  const contentvisibilty = useSelector(state => state.contentvisibilty)

  const dispatch = useDispatch()

  let state = JSON.parse(localStorage.getItem('state'))

  const handleVideoEnd = () => {
    // Callback function to be executed when the video ends
    setVideoEnded(true)
    // setContentVisibility(true)
    dispatch(setContentVisibilty(true))

    localStorage.setItem('contentvisibilty', true)

    localStorage.removeItem('state')
  }
  const handleVideoReady = () => {
    // Callback function to be executed when the video is ready
    // setContentVisibility(true)
    // setVideoEnded(true)
  }

  let videoUrl
  if (state) {
    if (
      state.item === 'bike' ||
      (state.category.toLowerCase() === 'electronics' &&
        state.item === 'smartphones')
    )
      videoUrl = '/videos/smart_phones_bike.webm'
    else if (state.category.toLowerCase() === 'electronics' && !state.item)
      videoUrl = '/videos/electronics.webm'
    else if (state.category.toLowerCase() === 'sports')
      videoUrl = '/videos/sports.webm'
    else if (
      state.category.toLowerCase() === 'motorbike gears' ||
      state.category.toLowerCase() === 'motorcycle gears' ||
      state.category.toLowerCase() === 'motorbike' ||
      state.category.toLowerCase() === 'motorcycle' ||
      state.category.toLowerCase() === 'gears' ||
      state.category.toLowerCase() === 'apparel' ||
      state.category.toLowerCase() === 'clothing' ||
      state.category.toLowerCase() === 'fashion' ||
      state.category.toLowerCase() === 'garments' ||
      state.category.toLowerCase() === 'backpack' ||
      state.category.toLowerCase() === 'gloves' ||
      state.category.toLowerCase() === 'jacket'
    )
      videoUrl = '/videos/gears.webm'
  }

  if (!contentvisibilty && state)
    return (
      <div
        id='video_container'
        style={{
          overflow: 'hidden',
          position: 'absolute',
          zIndex: 30000000
        }}
        className="bg-[url('/strikeo.webp')] h-screen bg-cover bg-no-repeat bg-center bg-fixed"
      >
        <ReactPlayer
          url={videoUrl}
          playing
          muted
          controls={false}
          width='100vw'
          height='100vh'
          onEnded={handleVideoEnd}
          onReady={handleVideoReady}
          playsinline
        />
      </div>
    )
  return null
}

export default VideoComponent
