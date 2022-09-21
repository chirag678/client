import { useRouter } from 'next/router'
import React from 'react'
import Home from '../pages'
import notify from '../utils/notify'

// Header: Home  About  Docs  Community  Trade
const headers = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#' },
  { label: 'Docs', href: '/#' },
  { label: 'Community', href: '/#' },
]

const Navbar = () => {
  const [dropdown, setDropdown] = React.useState(false)

  return (
    <div className='fixed top-0 z-30 w-full h-0 max-w-7xl'>
      <nav className={'flex flex-col md:flex-row items-center justify-between p-4 md:py-8 w-full bg-black/50 backdrop-blur-lg border-b-2 border-gray-700 ' + (dropdown ? 'h-screen md:h-fit' : 'h-fit')}>
        <div className='w-full flex justify-between items-center'>
          <div>
            <img src="/images/logo-transparent.png" alt="" className='h-8 md:h-10 object-center object-cover'/>
          </div>
          <div className='flex justify-center items-center md:hidden'>
            <div
              className='inline-block cursor-pointer'
              onClick={() => setDropdown((oldState) => !oldState)}>
              <div
                className={
                  'w-[25px] h-[2px] bg-white my-1.5 duration-500 ' +
                  (dropdown
                    ? ' -rotate-45 translate-x-[6px] translate-y-[4px]'
                    : '')
                }
              />
              <div
                className={
                  dropdown ? 'opacity-0' : 'w-[25px] h-[2px] bg-white my-1.5 duration-500'
                }
              />
              <div
                className={
                  'w-[25px] h-[2px] bg-white my-1.5 duration-500 ' +
                  (dropdown
                    ? ' rotate-45 translate-x-[6px] -translate-y-[4px]'
                    : '')
                }
              />
            </div>
          </div>
        </div>
        <div className='hidden md:flex items-center justify-between gap-x-6'>
          <NavElements />
        </div>
        {
          dropdown && (
            <div className='flex md:hidden flex-col items-center gap-y-8 mt-16 h-full w-full'>
              <NavElements />
            </div>
          )
        }
      </nav>
    </div>

  )
}

const NavElements = () => {
  const router = useRouter()
  return (
    <>
      {headers.map(({ label, href }, index) => (
        <a
          key={index}
          href={href}
          className={'hover:scale-105 font-semibold w-full text-center ' + (router.pathname === href ? 'bg-primary/50 md:bg-primary/0 text-white p-3 md:p-0 rounded-lg' : 'text-gray-200 hover:text-white ')}
          onClick={(e) => {
            notify('Coming soon', 'info')
          }}
        >
          {label}
        </a>
      ))}
      <a
        href='#'
        className='text-white text-center font-semibold bg-primary hover:scale-105 py-2 px-4 rounded w-full md:w-fit justify-self-end'
        onClick={(e) => {
          notify('Coming soon', 'info')
        }}
      >
        Trade
      </a>
    </>
  )
}

export default Navbar
