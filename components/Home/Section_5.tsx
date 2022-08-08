import axios from 'axios'
import { useRouter } from 'next/router';
import React, { useState } from 'react'
import notify from '../../utils/notify'

// page to invite users to join the waitlist

const Section_5 = () => {
  const [email, setEmail] = useState('');
  const router = useRouter();

  const registerForWaitlist = async (e: any) => {
    console.log(process.env.API);
    e.preventDefault();
    try {
      const response = await axios.post('/backend/waitlist/register', {
        params: {
          email: email,
        },
      })
      notify(response?.data?.message, 'success')
      router.push(`${response?.data?.link}`)
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
    <div className="flex flex-col gap-y-10 items-center w-full">
      <div className='flex flex-col items-center gap-y-4'>
        <h1 className='text-primary text-3xl md:text-5xl'>Join Our Waitlist</h1>
        <p className='text-zinc-200 text-center md:text-left text-lg md:text-3xl'>Be the first to access the most powerful financial tools</p>
        <p className='text-zinc-200 text-lg md:text-3xl'>And claim a reward!</p>
      </div>
      <form className='flex flex-col md:flex-row max-w-lg w-full justify-center gap-x-10 gap-y-4'>
        <input type="email" placeholder='johndoe@email.com' className='p-3 rounded w-full bg-transparent border-1 border-primary text-lg text-zinc-300 placeholder-gray-500 outline-primary' value={email} onChange={
          (e) => setEmail(e.target.value)
        } />
        <button
          className='py-3 px-12 bg-gradient-primary bg-primary rounded text-lg font-bold'
          onClick={registerForWaitlist}
        >
          Join
        </button>
      </form>
    </div>
  )
}

export default Section_5