import React, { Context, useEffect } from 'react'
import axios from 'axios'
import notify from '../../utils/notify'

const claim = ({ link }: { link: string }) => {

  const [waitlistEntry, setWaitlistEntry] = React.useState<any>({})

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const response = await axios.get(`/backend/waitlist`, {
          params: {
            token: link,
          }
        })
        notify(response?.data?.message, 'success')
        setWaitlistEntry(response?.data?.waitlistEntry)
        console.log(response?.data?.waitlistEntry)
      } catch (err: any) {
        console.log(err);
        if (err?.response?.data?.message) {
          notify(err?.response?.data?.message, 'error');
        } else {
          notify(err.message, 'error');
        }
      }
    }
    fetchEntry()
  }, [])


  const claimNft = async () => {
    try {
      const response = await axios.post(`/backend/waitlist/claim`, {
        params: {
          token: link,
        }
      })
      notify(response?.data?.message, 'success')
      setWaitlistEntry(response?.data?.waitlistEntry)
    } catch (err: any) {
      console.log(err);
      if (err?.response?.data?.message) {
        notify(err?.response?.data?.message, 'error');
      } else {
        notify(err.message, 'error');
      }
    }
  }

  return (
    <div className='flex flex-col gap-y-6 h-full'>
      <h1 className='text-3xl font-bold'>Claim Free NFT</h1>
      <div className='flex flex-col gap-y-6 p-4 bg-primary/20'>
        <h1>Email: {waitlistEntry?.email}</h1>
      </div>
      {
        !waitlistEntry?.claimed ? (
          <button className='px-8 py-3 bg-primary w-fit' onClick={claimNft}>Claim</button>
        ) : (
          <div className='flex flex-col gap-y-6'>
            <h1>Here's your NFT: </h1>
            <img src="https://lh3.googleusercontent.com/GFu6E6wDq-PFUswFpKtLaizMdQ8CDm9V0XLy48zWrt13B7oZLhdUSUTGBdD_n5q-nFexNd-llB_1BB1nWBXgq6TgedFdmoazA5E0wQ=w600" alt="" className='w-60 h-60'/>
          </div>
        )
      }
    </div>
  )
}

export default claim

export async function getServerSideProps(context: any) {
  const { link } = context.query;

  return {
    props: {
      link,
    },
  };
}