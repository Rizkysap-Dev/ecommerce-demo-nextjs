'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const UnderlineHover = ({children, href, Content}) => {
    const [open, setOpen] = React.useState(false);

    const showUnderline = open && Content

  return (
    <div 
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className='group h-fit w-fit'>
        <Link href={href} className='relative'>  
            <span>
                {children}
            </span>
            <span
                style={{
                    transform: open ? 'scaleX(1)' : 'scaleX(0)',
                }}
                className='absolute -bottom-1 -left-[1px] -right-[1px] h-[2px] origin-left rounded-full bg-gray-800 transition-transform duration-300 ease-out' />
        </Link>
        {showUnderline && (
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 , ease: 'easeOut'}} 
                className='absolute top-12 left-0 w-full z-20'>
                    <div className='pt-5'>
                        <div className='mb-10 w-full shadow rounded-lg p-2 bg-gray-100'>
                            {Content}
                        </div> 
                    </div>
            </motion.div>
        )}
    </div>
  )
}

export default UnderlineHover