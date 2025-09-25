import { useState, useEffect } from 'react'
import { useHashRoute } from '../hooks/useHashRoute'
import Hamburger from '../assets/Hamburger.png'
import Cancel from '../assets/Cancel.png'
import Guild from '../assets/Guildss.jpg'

// Helper to compute remaining time to event
const calculateTimeLeft = () => {
  const eventDate = new Date('2025-11-08T00:00:00')
  const now = new Date()
  const difference = eventDate.getTime() - now.getTime()

  if (difference <= 0) return null

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

const Navbar = () => {
  const [, navigate] = useHashRoute();
  const [open, setOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <nav className="bg-white w-full text-black flex justify-between items-center   sticky top-0 z-50">
      <div className='container mx-auto flex flex-wrap items-center justify-between gap-2 px-3 md:px-4 max-w-7xl p-5'>
        {/* Left: Logo only */}
        <div className="flex items-center">
          <button onClick={() => navigate('/')} aria-label="Go to home">
            <img src={Guild} alt="Guild logo" className='h-12 w-12 max-sm:h- max-sm:w-[100px] lg:h-12 lg:w-32 cursor-pointer' />
          </button>
        </div>

        {/* Desktop spacer (optional) */}
        <div className="hidden md:flex flex-wrap items-center gap-3 sm:gap-6 font-bold" />

        {/* Desktop actions */}
        <div className='hidden md:flex flex-wrap gap-3 sm:gap-5 items-center'>
          {timeLeft ? (
            <div className="px-3 py-2 rounded bg-gradient-to-r from-white via-blue-100 to-blue-200 border border-blue-200 text-black text-sm">
              <span className="font-medium">Starts in:</span>{' '}
              <span className="tabular-nums">{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
            </div>
          ) : (
            <button onClick={() => navigate('/live')} className="bg-red-600 text-white px-4 py-2 rounded text-sm sm:text-base sm:w-auto">
              Live Now
            </button>
          )}
          <a href="https://luma.com/p8wpq25z" target="_blank" rel="noopener noreferrer"
            className="relative overflow-hidden bg-black cursor-pointer text-white px-4 py-2 rounded text-sm sm:text-base sm:w-auto group max-sm:text-center"
          >
            <span className="relative z-10 transition-opacity duration-200 group-hover:opacity-0">Register</span>
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out bg-[#01E101]"></span>
            <span className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-semibold max-sm:hidden">Join</span>
          </a>
         
        </div>

        {/* Mobile: Hamburger at far right */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded hover:bg-gray-100 active:bg-gray-200"
            aria-label="Toggle menu"
          >
            <img src={open ? Cancel : Hamburger} alt="menu" className="h-6 w-6" />
          </button>
        </div>

        {open && (
          <div className="w-full md:hidden">
            <div className="mt-2 flex flex-col gap-3 font-bold border-t border-gray-200 bg-white pt-3 px-2">
              <div className='flex flex-col gap-2'>
                {timeLeft ? (
                  <div className="px-3 py-2 rounded bg-gradient-to-r from-white via-blue-100 to-blue-200 border border-blue-200 text-black text-sm text-center">
                    <span className="font-medium">Starts in:</span>{' '}
                    <span className="tabular-nums">{timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s</span>
                  </div>
                ) : (
                  <button onClick={() => { navigate('/live'); setOpen(false); }} className="bg-red-600 text-white px-4 py-2 rounded">
                    Live Now
                  </button>
                )}
                <a href="https://luma.com/p8wpq25z" target="_blank" rel="noopener noreferrer"
                  className="relative overflow-hidden bg-black text-white px-4 py-2 rounded group text-center"
                >
                  <span className="relative z-10 transition-opacity duration-200 group-hover:opacity-0">Register</span>
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out bg-[#01E101]"></span>
                  <span className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-semibold max-sm:hidden">Join</span>
                </a>
               
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar