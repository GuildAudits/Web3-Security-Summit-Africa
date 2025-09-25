import { useEffect, useState } from 'react'
import { MapPin, Calendar } from 'lucide-react'
import BoxBurst from '../assets/box_burst.png'



const calculateTimeLeft = () => {
  const eventDate = new Date('2025-11-08T00:00:00')
  const now = new Date()
  const difference = eventDate.getTime() - now.getTime()

  if (difference <= 0) {
    return null 
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

export const Herosection = () => {

  const [ timeLeft,setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative mx-auto max-w-7xl mt-16 sm:mt-20 lg:mt-24 px-4 sm:px-6 lg:px-8">
      <div
        className="h-full flex items-center relative bg-white"
      >
        {/* Right-side decorative image */}
        <img
          src={BoxBurst}
          alt=""
          aria-hidden
          className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-48 lg:w-80 xl:w-96 opacity-90 pointer-events-none select-none"
        />
        <div className="w-full">
          <div className="container mx-auto">
            <div className="max-w-4xl md:pl-2 lg:pl-4">
              <h1 className="text-black text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] md:text-left text-center">
                WEB3 SECURITY SUMMIT AFRICA
              </h1>

              <div className="mt-4 md:text-left text-center text-gray-900 text-base sm:text-lg flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center gap-2">
                  <Calendar className="text-green-500 w-5 h-5" />
                  <span>November 8, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="text-green-500 w-5 h-5" />
                  <span>Lagos State, Nigeria.</span>
                </div>
                
              </div>

              <p className="text-black mt-4 sm:mt-6 text-base sm:text-lg md:text-xl md:text-left text-center max-w-2xl sm:max-w-3xl mx-auto md:mx-0">
              ​The Web3 Security Summit Africa is a premier gathering of blockchain builders, security researchers, and industry leaders across the continent. This event will spotlight the most critical challenges in Web3 security, from smart contract vulnerabilities and DeFi exploits to cross-chain bridge risks and MEV, while showcasing solutions that make decentralized systems safer.              </p>

              <div className="flex md:justify-start justify-center mt-6 sm:mt-8 gap-3 sm:gap-4 flex-wrap">
              <a href="https://luma.com/p8wpq25z" target="_blank" rel="noopener noreferrer"

                  className="relative overflow-hidden bg-black cursor-pointer text-white px-6 sm:px-8 py-3 rounded font-semibold group w-full sm:w-auto text-center"
                >
                  <span className="relative z-10 transition-opacity duration-200 group-hover:opacity-0">Register</span>
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out bg-[#01E101]"></span>
                  <span className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">Join</span>
                </a>
                
              </div>

              {timeLeft && (
                <div className="mt-6 flex md:justify-start justify-center gap-4 sm:gap-6 text-black flex-wrap">
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-extrabold">{timeLeft.days}</div>
                    <div className="text-xs sm:text-sm uppercase tracking-wide text-gray-700">Days</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-extrabold">{timeLeft.hours}</div>
                    <div className="text-xs sm:text-sm uppercase tracking-wide text-gray-700">Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-extrabold">{timeLeft.minutes}</div>
                    <div className="text-xs sm:text-sm uppercase tracking-wide text-gray-700">Minutes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-extrabold">{timeLeft.seconds}</div>
                    <div className="text-xs sm:text-sm uppercase tracking-wide text-gray-700">Seconds</div>
                  </div>
                </div>
              )}

              <div className="mt-6 md:text-left text-center text-sm text-gray-600">
                Follow us for updates: <a href="https://x.com/GuildAcademy_" className="underline-offset-2 hover:underline">@GuildAcademy_</a>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  )
}
