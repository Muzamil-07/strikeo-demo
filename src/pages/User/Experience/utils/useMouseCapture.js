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
    // if (e.target.tagName !== 'CANVAS') return

    const touch1 = e.targetTouches[0]
    const touch2 = e.targetTouches[1]

    if (previousTouch1 && e.target.tagName === 'CANVAS') {
      const touch1MovementX = touch1.pageX - previousTouch1.pageX
      const touch1MovementY = touch1.pageY - previousTouch1.pageY

      // Check if movement is more horizontal than vertical
      if (Math.abs(touch1MovementX) > Math.abs(touch1MovementY)) {
        mouse.x += Math.round(touch1MovementX * 0.005 * 100)
      }
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
    // const storeCanvas = document.getElementById("storeCanvas");
    // if (!storeCanvas) return;
    document.body.requestPointerLock =
      document.body.requestPointerLock ||
      document.body.mozRequestPointerLock ||
      document.body.webkitRequestPointerLock
    document.body.requestPointerLock()
  }

  useEffect(() => {
    // Add event listeners for mouse movement and click
    const storeCanvas = document.getElementById('storeCanvas')
    document.addEventListener('mousemove', mouseMove)
    // if (storeCanvas) {
    storeCanvas.addEventListener('touchmove', dragMove, { passive: false })
    storeCanvas.addEventListener('touchend', dragEnd)
    // }

    document.addEventListener('dblclick', capture)

    // Clean up the event listeners when the component unmounts
    return () => {
      document.removeEventListener('mousemove', mouseMove)
      const storeCanvas = document.getElementById('storeCanvas')

      // if (storeCanvas) {
      storeCanvas?.removeEventListener('touchmove', dragMove)
      storeCanvas?.removeEventListener('touchend', dragEnd)
      // }

      document.removeEventListener('click', capture)
    }
  })

  return mouse // Return the mouse object with the current mouse coordinates
}
