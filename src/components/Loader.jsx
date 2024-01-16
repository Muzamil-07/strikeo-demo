import React, { useState, useEffect } from 'react'
import { logo } from '../assets'
import { Html } from '@react-three/drei'

const Loader = ({ setIsLoading }) => {
  // const [percent, setPercent] = useState(0);

  // useEffect(() => {
  // 	const intervalId = setInterval(() => {
  // 		setPercent((prevPercent) => {
  // 			if (prevPercent >= 100) {
  // 				clearInterval(intervalId);
  // 				setIsLoading(false);
  // 				return 100;
  // 			}
  // 			return prevPercent + 1;
  // 		});
  // 	}, 20);

  // 	return () => clearInterval(intervalId);
  // }, []);

  const percent = 100
  const SIZE = 100
  const STROKE_WIDTH = 1
  const CIRCUMFERENCE = 2 * Math.PI * SIZE
  const offset = ((100 - 100) / 100) * CIRCUMFERENCE

  return (
    <Html>
      <div className='flex justify-center items-center flex-grow w-full'>
        <div className='relative w-80 h-80 flex justify-center items-center'>
          <svg className='absolute z-10' width={SIZE * 2} height={SIZE * 2}>
            <circle
              className='transition-all duration-300 ease-linear stroke-current text-red-600'
              strokeWidth={STROKE_WIDTH}
              fill='transparent'
              r={SIZE}
              cx={SIZE}
              cy={SIZE}
              transform={`rotate(-90, ${SIZE}, ${SIZE})`}
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={offset}
            />
          </svg>
          <div className='absolute top-10 z-20 text-xs font-semibold text-center w-full'>
            {percent === 100 ? '' : percent + '%'}
          </div>
          <img
            className='absolute z-20 w-1/4 h-1/4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 dark:filter-none filter invert'
            src={logo}
            alt='logo'
          />
        </div>
      </div>
    </Html>
  )
}

export default Loader
