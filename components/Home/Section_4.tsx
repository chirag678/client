import React from 'react'
import RotatingBoxes from './3D/RotatingBoxes'

// Built on Ethereum
// Powered by Starkware 
// No gas: Deposit funds and say goodbye to gas 
// Minimal fees: Pay 4x lesser fees than trading on other top exchanges.  
// Maximum security: Zero-knowledge rollups on Ethereum provide increased security and privacy. 
// Instant trades: Never worry about orders going through again

// https://www.thecoinrepublic.com/2022/03/22/have-you-heard-of-starknet-claiming-to-decrease-gas-fees-on-ethereum-100x-lower/

const points = [
  { title: 'No gas', description: 'Deposit funds and say goodbye to gas', icon: '/icons/no.svg' },
  { title: 'Minimal fees', description: 'Pay 4x lesser fees than trading on other top exchanges', icon: '/icons/minus.svg' },
  { title: 'Maximum security', description: 'Zero-knowledge rollups on Ethereum provide increased security and privacy', icon: '/icons/secure.svg' },
  { title: 'Instant trades', description: 'Never worry about orders going through again', icon: '/icons/quick.svg' },
]

const Section_4 = () => {
  return (
    <div className='grid md:grid-cols-2 gap-y-12 w-full'>
      <div className='flex flex-col items-center gap-y-4 justify-start'>
        <div className='flex md:hidden justify-center w-[90%] mb-4'>
          <RotatingBoxes />
        </div>
        <h1 className='text-primary text-3xl md:text-5xl'>Built on Ethereum</h1>
        <p className='text-zinc-200 text-xl md:text-3xl linear-wipe'>Powered by Starkware</p>
        <div className='hidden md:flex justify-center h-full w-full'>
          <RotatingBoxes />
        </div>
      </div>
      <div className='flex flex-col gap-y-6 bg-primary/15 p-3 md:p-8 rounded-lg'>
        {points.map((point, index) => {
          return (
            <div className='flex flex-col gap-y-4' key={index}>
              <div className='grid grid-cols-4 md:flex gap-x-4 items-center'>
                <div className=' bg-primary p-3 rounded-xl w-fit'>
                  <img src={point.icon} alt={point.title} className='w-6 h-6' />
                </div>
                <div className='col-span-3 flex flex-col gap-y-1 w-full'>
                  <h1 className='text-primary text-lg md:text-2xl'>{point.title}</h1>
                  <p className='text-zinc-300 text-xs md:text-lg'>{point.description}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Section_4