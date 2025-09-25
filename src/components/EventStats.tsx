import { Users, Mic, Star } from 'lucide-react'

export const EventStats = () => {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-8 justify-items-center md:flex md:items-start md:justify-between">
          <div className="flex flex-col items-center text-center md:items-center md:text-center flex-1">
            <div className="flex items-center gap-4">
              <Users className="w-10 h-10 sm:w-12 sm:h-12 text-amber-100 text-gray-600" />
              <div className="text-2xl font-bold text-gray-800">100+</div>
            </div>
            <div className="mt-2 text-gray-700">Attendee</div>
          </div>

          <div className="flex flex-col items-center text-center md:items-center md:text-center flex-1">
            <div className="flex items-center gap-4">
              <Mic className="w-10 h-10 sm:w-12 sm:h-12 text-amber-100 text-gray-600" />
              <div className="text-2xl font-bold text-gray-800">10+</div>
            </div>
            <div className="mt-2 text-gray-700">Speakers</div>
          </div>

          <div className="flex flex-col items-center text-center md:items-center md:text-center flex-1 col-span-2 md:col-span-1">
            <div className="flex items-center gap-4">
              <Star className="w-10 h-10 sm:w-12 sm:h-12 text-amber-100 text-gray-600" />
              <div className="text-2xl font-bold text-gray-800">6+</div>
            </div>
            <div className="mt-2 text-gray-700">Sponsors</div>
          </div>
        </div>
      </div>
      
    </section>
  )
}
