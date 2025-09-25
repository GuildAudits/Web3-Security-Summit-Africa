import { Calendar, Mic } from 'lucide-react'
import { motion } from 'framer-motion'


export const EventCards = () => {
  return (
    <div className="bg-white py-16 px-4 mx-auto max-w-7xl">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <motion.div
            className="border-2 border-gray-700/30 hover:border-gray-700/70 transition-colors duration-200 rounded-lg p-8 bg-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-8 h-8 bg-black rounded flex items-center justify-center flex-shrink-0 mt-1">
                <Calendar className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black">Event Overview</h3>
            </div>

            <div className="space-y-4">
              <p className="text-gray-800 leading-relaxed">
                The <strong>WEB3 SECURITY SUMMIT AFRICA</strong> is a 1-day hybrid event — both physical and virtual — focused on education, collaboration, and innovation in blockchain security.
              </p>

              <ul className="space-y-2 text-gray-800">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Security-focused workshops
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Networking opportunities
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Panel discussions with security experts
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Expert-led technical sessions
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Community engagement sessions
                </li>
              </ul>

              <p className="text-gray-800 leading-relaxed pt-2">
                The summit is tailored for security auditors, developers, and blockchain professionals looking to explore the latest trends, tools, and best practices in Web3 security.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="border-2 border-gray-700/30 hover:border-gray-700/70 transition-colors duration-200 rounded-lg p-8 bg-white"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-8 h-8 bg-black rounded flex items-center justify-center flex-shrink-0 mt-1">
                <Mic className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-black">Be a Speaker</h3>
            </div>

            <div className="space-y-6">
              <p className="text-gray-800 leading-relaxed">
                Are you an expert in blockchain security, auditing, or smart contract development?  
                Share your knowledge with the community at <strong>WEB3 SECURITY SUMMIT AFRICA</strong> and help drive security awareness and education across the continent.
              </p>

              <a href="https://forms.gle/sw9wkubF92MK4SRb8" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold cursor-pointer transition-colors">
                Click to Register
              </ a>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
