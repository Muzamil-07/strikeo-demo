import { Html } from '@react-three/drei'
import { useEffect } from 'react'

// const Loader3d = () => {
//   return (
//     <Html
//       as='div'
//       className={styles.loader}
//       center
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//         background: "black",
//         width: "100vw",
//         height: "100vh",
//       }}
//     >
//       <div className={styles.hexagon} aria-label='Animated hexagonal ripples'>
//         <div className={styles.hexagon__group}>
//           <div className={styles.hexagon__sector}></div>
//           <div className={styles.hexagon__sector}></div>
//           <div className={styles.hexagon__sector}></div>
//           <div className={styles.hexagon__sector}></div>
//           <div className={styles.hexagon__sector}></div>
//           <div className={styles.hexagon__sector}></div>
//         </div>
//         <div className={styles.hexagon__group}>
//           <div className={styles.hexagon__sector}></div>
//           <div className={styles.hexagon__sector}></div>
//           <div className={styles.hexagon__sector}></div>
//           <div className={styles.hexagon__sector}></div>
//           <div className={styles.hexagon__sector}></div>
//           <div className={styles.hexagon__sector}></div>
//         </div>
//         <div className={styles.hexagon__group}>
//           <div className={styles.hexagon__sector}></div>
//           <div className={styles.hexagon__sector}></div>
//           <div className={styles.hexagon__sector}></div>
//           <div className={styles.hexagon__sector}></div>
//           <div className={styles.hexagon__sector}></div>
//           <div className={styles.hexagon__sector}></div>
//         </div>
//         <div className={styles.hexagon__group}>
//           <div className={styles.hexagon__sector}></div>
//           <div className={styles.hexagon__sector}></div>
//           <div className={styles.hexagon__sector}></div>
//           <div className={styles.hexagon__sector}></div>
//           <div className={styles.hexagon__sector}></div>
//           <div className={styles.hexagon__sector}></div>
//         </div>
//         <div className={styles.hexagon__group}>
//           <div className={styles.hexagon__sector}></div>
//           <div className={styles.hexagon__sector}></div>
//           <div className={styles.hexagon__sector}></div>
//           <div className={styles.hexagon__sector}></div>
//           <div className={styles.hexagon__sector}></div>
//           <div className={styles.hexagon__sector}></div>
//         </div>
//         <div className={styles.hexagon__group}>
//           <div className={styles.hexagon__sector}></div>
//           <div className={styles.hexagon__sector}></div>
//           <div className={styles.hexagon__sector}></div>
//           <div className={styles.hexagon__sector}></div>
//           <div className={styles.hexagon__sector}></div>
//           <div className={styles.hexagon__sector}></div>
//         </div>
//       </div>
//       <p aria-label='Loading'>Loading</p>
//     </Html>
//   )
// }
function Loader3d({ load }) {
  useEffect(() => {
    return () => load(false)
  }, [])
  return <Html>okokok</Html>
}

export default Loader3d
