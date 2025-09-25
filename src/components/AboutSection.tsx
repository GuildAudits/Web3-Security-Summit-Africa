import { Link } from 'lucide-react'
import Guild from '../assets/woman.jpg'
import { motion } from 'framer-motion'

export const AboutSection = () => {
  return (
    <div className="bg-white py-16 px-4 mx-auto max-w-7xl">
      <h1 className="text-3xl md:text-4xl font-bold text-green-500 text-center mb-8">
        Empowering Auditors, Securing Blockchains
      </h1>
      <div className="container mx-auto">
              <h1 className="text-gray-800  font-bold text-center mb-10">
              The WEB3 SECURITY SUMMIT AFRICA is a 1-day  event dedicated to advancing Web3 security in Africa.
              Organized for security auditors, researchers, developers, and blockchain professionals, the summit features in-depth workshops, expert panels, and networking sessions aimed at strengthening the Web3 ecosystem.
              It brings together leading minds from across Africa and beyond to collaborate, learn, and drive innovation in blockchain security.
              </h1>        
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
 
  <motion.div
    className="space-y-8"
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
   
    <div className="border-2 border-gray-700/30 hover:border-gray-700/70 transition-colors duration-200 rounded-lg p-6 bg-white">
      <div className="flex items-start space-x-4">
        <div className="w-8 h-8 bg-black rounded flex items-center justify-center flex-shrink-0 mt-1">
          <Link className="w-4 h-4 text-white" />
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-bold text-black">Our Mission at WEB3 SECURITY SUMMIT AFRICA</h3>
          <p className="text-gray-800 leading-relaxed">
            At WEB3 SECURITY SUMMIT AFRICA, we believe that education and security are essential pillars for blockchain adoption across Africa.
          </p>
          <p className="text-gray-800 leading-relaxed">
            That's why we created the <strong>WEB3 SECURITY SUMMIT AFRICA</strong> , a platform designed to  connect, and empower Web3 security auditors and professionals, fostering a stronger and safer blockchain ecosystem.
          </p>
        </div>
      </div>
    </div>
  </motion.div>

  {/* Right Section - Image */}
  <motion.div
    className="relative"
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.3 }}
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

</div>

</div>
    </div>
  )
}
