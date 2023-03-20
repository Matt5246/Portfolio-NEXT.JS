import * as React from 'react';
import { SocialIcon } from 'react-social-icons';
import {motion} from "framer-motion";

export interface IAppProps {
}

export default function Header (props: IAppProps) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }} 
      transition={{
        duration:1,
      }}
      className='flex flex-row items-center'>
        <SocialIcon url="https://www.youtube.com/channel/UCM2zh5RhfG7ikUBwFfsRMcg" 
        fgColor='gray'
        bgColor='transparent' 
        />
        <SocialIcon url="https://github.com/Matt5246" 
        fgColor='gray'
        bgColor='transparent' 
        />
      </motion.div>
      <motion.div 
      initial={{
        x: 500,
        opacity: 0,
        scale: 0.5
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }} 
      transition={{
        duration: 1,
      }}
      className='flex flex-row items-center text-gray-300 cursor-pointer'>
        <SocialIcon url="" 
        network='email'
        fgColor='gray'
        bgColor='transparent' 
        />
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
            Get In Touch
        </p>
      </motion.div>
      
    </header>
  );
}
