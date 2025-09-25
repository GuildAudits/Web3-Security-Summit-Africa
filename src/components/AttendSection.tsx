import { Camera } from 'lucide-react'
import Guild from '../assets/standing.jpg'
import { motion } from 'framer-motion'

export const AttendSection = () => {
  
  return (
    <div className="bg-white py-16 px-4 mx-auto max-w-7xl">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg overflow-hidden">
              <img
                src={Guild} 
                alt="Event Photo"
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-4 left-4">
                <span className="text-white text-2xl font-bold">
                  WEB3 SECURITY SUMMIT AFRICA
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="border-2 border-gray-700/30 hover:border-gray-700/70 transition-colors duration-200 rounded-lg p-8 bg-white max-w-md w-full">
              <div className="text-center space-y-6">
                
                <div className="flex justify-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-black">Attend the Summit</h3>
                
                <p className="text-gray-800 leading-relaxed">
                  Whether you're new to Web3 security or an experienced auditor, the WEB3 SECURITY SUMMIT AFRICA offers the perfect opportunity to learn, connect, and grow within Africa’s leading blockchain security ecosystem.
                </p>
                
                <a href="https://luma.com/p8wpq25z" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold cursor-pointer transition-colors w-full">
                  Click to Register
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
