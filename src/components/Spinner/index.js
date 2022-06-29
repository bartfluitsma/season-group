import React from 'react'
import { WaveLoader } from 'react-loaders-kit'
import * as styles from './spinner-styles.module.scss'

const Spinner = ({ loading, height }) => {
  const loaderProps = {
    loading,
    size: 100,
    duration: 1,
    color: '#1C75BC',
  }
  return (
    <div className={styles.spinner__container}>
      <WaveLoader {...loaderProps} />
    </div>
  )
}

export default Spinner
