import * as React from 'react';
import {motion} from "framer-motion"

export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <article className='flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <motion.img
      initial={{ 
        opacity: 0,
        y: -100 
      }}
      whileInView={{ 
        opacity: 1,
        y:0
      }} 
      viewport={{
        once:true
      }}
      transition={{ duration:1.2 }}
      className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Student of Computer Science</h4>
        <p className='flex space-x-2 my-2'>side character</p>
        <div className='flex space-x-2 my-2'>
          <img className="h-10 w-10" src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"></img>
          <img className="h-10 w-10" src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"></img>
          </div>
        <p className='py-5 text-gray-300'>Started work... - Ended...</p>
        
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
          <li>Summary points</li>
        </ul>
      </div>
    </article>
  );
}
