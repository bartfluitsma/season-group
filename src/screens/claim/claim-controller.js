import React from 'react'
import ClaimView from './claim-view'

const ClaimController = (props) => {
  console.log('🚀 ~ file: claim-controller.js ~ line 5 ~ ClaimController ~ props', props)

  const viewProps = {

  }
  return (
    <ClaimView {...viewProps} />
  )
}

export default ClaimController
