import React from 'react'
import { motion } from 'framer-motion'

const LogoAnimation = ({children, href}) => {
  return (
    <>
        <motion.a 
            initial={'initial'} 
            whileHover={'hovered'} 
            href={href} 
            style={{ lineHeight: 0.9}}
            className='relative block uppercase overflow-hidden sm:text-xl md:text-2xl lg:text-4xl font-bold text-gray-800 whitespace-nowrap'>
            <div>
                {children.split('').map((char, index) => {
                    return <motion.span 
                        key={index}
                        variants={{
                            initial: { y: 0 },
                            hovered: { y: '-100%' }
                        }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className='inline-block'
                        >
                        {char}
                    </motion.span>
})}
            </div>
            <div className='absolute inset-0'>
                {children.split('').map((char, index) => {
                    return <motion.span 
                        key={index}
                        variants={{
                            initial: { y: '100%' },
                            hovered: { y: 0 }
                        }}
                        transition={{ duration: 0.3, delay: index * 0.03, ease: 'easeInOut' }}
                        className='inline-block'
                        >
                        {char}
                    </motion.span>
})}
            </div>
        </motion.a>
    </>
  )
}

export default LogoAnimation