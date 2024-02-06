import { useMemo, useEffect } from 'react'

// Custom hook for capturing mouse input
export function useMouseCapture () {
  // Create a memoized object to store mouse coordinates
  const mouse = useMemo(() => ({ x: 0, y: 0 }), [])
  let previousTouch1 = null
  let previousTouch2 = null

  // Event handler for mouse movement
  const mouseMove = e => {
    // Check if the pointer is locked to the body (mouse captured)
    if (
      document.pointerLockElement === document.body ||
      document.mozPointerLockElement === document.body
    ) {
      // Update the mouse coordinates with the movement values
      mouse.x += e.movementX
      mouse.y += e.movementY
    }
  }
  const dragMove = e => {
    e.preventDefault()
    e.stopImmediatePropagation()
    if (e.target.tagName === 'BUTTON') return

    const touch1 = e.targetTouches[0]
    const touch2 = e.targetTouches[1]

    if (previousTouch1 && touch1.target.tagName !== 'BUTTON') {
      const touch1MovementX = touch1.pageX - previousTouch1.pageX
      // const touch1MovementY = touch1.pageY - previousTouch1.pageY
      mouse.x += Math.round(touch1MovementX * 0.005 * 100)
    }

    previousTouch1 = touch1
    previousTouch2 = touch2
  }

  const dragEnd = () => {
    previousTouch1 = null
    previousTouch2 = null
    // mouse.x = 0
  }

  // Function to request pointer lock (capture mouse)
  const capture = () => {
    // Ask the browser to lock the pointer
    document.body.requestPointerLock =
      document.body.requestPointerLock ||
      document.body.mozRequestPointerLock ||
      document.body.webkitRequestPointerLock
    document.body.requestPointerLock()
  }

  useEffect(() => {
    // Add event listeners for mouse movement and click
    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('touchmove', dragMove, { passive: false })
    document.addEventListener('touchend', dragEnd)
    document.addEventListener('dblclick', capture)

    // Clean up the event listeners when the component unmounts
    return () => {
      document.removeEventListener('mousemove', mouseMove)
      document.removeEventListener('touchmove', dragMove)
      document.removeEventListener('touchend', dragEnd)
      document.removeEventListener('click', capture)
    }
  })

  return mouse // Return the mouse object with the current mouse coordinates
}
