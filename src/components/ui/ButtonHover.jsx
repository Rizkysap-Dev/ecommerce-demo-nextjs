'use client'

import React from 'react'
import { motion } from 'framer-motion';

const ButtonHover = ({children, href, Content}) => {
    const [open, setOpen] = React.useState(false);
    
    const showDropdown = open && Content

    return (
        <div 
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            className='group h-fit w-fit hover:bg-gray-300 rounded-sm transition px-3 py-1'>
            <button href={href}>  
                <span>
                    {children}
                </span>
            </button>
            {showDropdown && (
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

export default ButtonHover