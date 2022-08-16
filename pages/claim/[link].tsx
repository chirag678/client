import React, { useContext, useEffect } from 'react'
import axios from 'axios'
import notify, { notifyPromise, notifyResolve } from '../../utils/notify'
import { AppContext } from '../../context/AppProvider'
import { returnShortAddress } from '../../utils/functions'
import { connectWallet } from '../../utils/user'
import ViewNFT from '../../components/Claim/ViewNFT'
import { getTokenURI, safeMintToken } from '../../utils/ethers'
import { Id } from 'react-toastify'

const claim = ({ link }: { link: string }) => {
  const { state, dispatch } = useContext(AppContext)
  const [waitlistEntry, setWaitlistEntry] = React.useState<any>(null)
  const [address, setAddress] = React.useState<string>('')
  const [nft, setNft] = React.useState<any>(null)
  const [nickname, setNickname] = React.useState<string>('')

  useEffect(() => {
    if (state.user) {
      setAddress(state.user)
    }

    const fetchEntry = async () => {
      try {
        const response = await axios.get(`/backend/waitlist`, {
          params: {
            token: link,
          }
        })
        notify(response?.data?.message, 'success')
        setWaitlistEntry(response?.data?.waitlistEntry)
        // console.log(response?.data?.waitlistEntry)
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

  useEffect(() => {
    console.log(waitlistEntry);
    if (waitlistEntry?.address) {
      setAddress(waitlistEntry?.address)
    }
  }, [waitlistEntry])

  useEffect(() => {
    if (!waitlistEntry?.address) {
      setAddress(state.user)
    }
  }, [state.user])

  useEffect(() => {
    const fetchNFT = async () => {
      const tokenURI = await getTokenURI(address)
      setNft(tokenURI)
    }
    fetchNFT()
  }, [address])

  // set address for user -> claim using metamask -> mint token -> set nft
  const claimNft = async (e: any) => {
    e.preventDefault()
    if (!state.user) {
      notify('Please connect to your wallet', 'error')
      return
    }
    if (!state.user || state.user !== address) {
      notify('Different Wallet', 'error')
      return
    }

    const id = notifyPromise('Claiming...')

    if (!address) {
      const markClaimedSuccess = await markClaimed(id)
      if (!markClaimedSuccess) {
        console.log("Couldn't mark claimed");
        return
      }
    }

    const safeMintSuccess = await safeMintToken(address, nickname)
    if (safeMintSuccess) {
      notifyResolve(id, 'Claimed successfully', 'success')
      const tokenURI = await getTokenURI(address)
      setNft(tokenURI)
    } else {
      notifyResolve(id, 'There was an error while minting token', 'error')
    }
  }

  const markClaimed = async (id: Id) => {
    try {
      const response = await axios.post(`/backend/waitlist/claim`, {
        params: {
          token: link,
          address: state.user, //todo
        }
      })
      setWaitlistEntry(response?.data?.waitlistEntry)
      return true
    } catch (err: any) {
      console.log(err);
      if (err?.response?.data?.message) {
        notifyResolve(id, err?.response?.data?.message, 'error');
      } else {
        notifyResolve(id, err.message, 'error');
      }
      return false
    }
  }

  if (!waitlistEntry) {
    return <div>Loading...</div>
  }

  return (
    <div className='flex flex-col gap-y-6 h-full w-full'>
      <h1 className='text-3xl font-bold'>{nft ? "Here's Your Free NFT" : "Claim Free NFT"}</h1>
      <div className='flex gap-x-12'>
        {!nft ? null :
          <div className='hidden md:grid place-content-center p-2'>
            <ViewNFT waitlistEntry={waitlistEntry} nft={nft} />
          </div>
        }
        <div className='flex flex-col gap-y-6 p-4 bg-primary/20 h-fit w-full md:w-fit'>
          <h1>Email: {waitlistEntry?.email}</h1>
          <h1>Address: {address ? returnShortAddress(address) : <span className='text-gray-500'>Connect Wallet</span>}</h1>
          {
            !nft ? null :
              <>
                <h1>Nickname: {nft?.name}</h1>
              </>

          }
        </div>
      </div>
      {
        !nft ? (
          state.user ? (
            <form className='flex gap-x-4 md:w-fit'>
              <input type="text" maxLength={12} placeholder={"nickname"} className='p-3 rounded flex-1 bg-transparent border-1 border-primary text-lg text-zinc-300 placeholder-gray-500 outline-primary' value={nickname} onChange={
                (e) => {
                  setNickname(e.target.value)
                }
              } />
              <button className='px-8 py-3 bg-primary w-fit' onClick={claimNft}>Claim</button>
            </form>
          ) : <button className='px-8 py-3 bg-primary w-fit' onClick={() => connectWallet(dispatch)}>{state.user ? returnShortAddress(state.user) : "Connect"}</button>
        ) : (
          <div className='w-full grid place-content-center p-2 md:hidden'>
            <ViewNFT waitlistEntry={waitlistEntry} nft={nft} />
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