import React from 'react'
import styles from '../index.css'

const AnimatedImage = () => {
  const [wobble, setWobble] = React.useState(0)
  return (
    <img
      className={styles.image}
      src="https://source.unsplash.com/random/400x200"
      alt="randomised!"
      onClick={() => setWobble(1)}
      onAnimationEnd={() => setWobble(0)}
      wobble={wobble}
    />
  )
}
export default AnimatedImage
