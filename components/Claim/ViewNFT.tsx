import React from 'react'

const ViewNFT = ({ waitlistEntry, nft }: { waitlistEntry: any, nft: any }) => {
  return (
    <div>
      <img src={nft?.image} alt="" />
    </div>
  )
}

export default ViewNFT