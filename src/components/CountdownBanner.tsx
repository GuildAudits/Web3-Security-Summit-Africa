import { useEffect, useState } from 'react'

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

export const CountdownBanner = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="w-full bg-gradient-to-r from-white via-green-200 to-green-500 border-t border-b border-green-500 py-4 shadow-lg">
      <div className="max-w-4xl mx-auto px-4">
        {timeLeft ? (
          <p className="text-center font-semibold text-black text-lg">
            Event starts in: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </p>
        ) : (
          <p className="text-center font-semibold text-black text-lg">
            Event Has Started!
          </p>
        )}
      </div>
    </div>
  )
}
