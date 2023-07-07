import * as React from 'react';
import {motion} from "framer-motion"
import {urlFor} from "@/sanity";
import {Experience} from "@/typings";

type Props = {
  experience: Experience;
}

export default function App ({experience}:Props) {
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
      src={urlFor(experience?.companyImage).url()}
      alt={experience?.jobTitle}
      
      />
      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light'>Student of Computer Science</h4>
        <p className='flex space-x-2 my-2'>side character</p>
        <div className='flex space-x-2 my-2'>
          {experience?.technologies.map(technology => (
            <img
              key={technology._id}
              className='w-10 h-10 '
              src={urlFor(technology?.image).url()}
              />

          ))}
          </div>
        <p className='py-5 text-gray-300'>{new Date(experience.dateStarted).toDateString()} - {experience.isCurrentlyWorkingHere ? 'Present' : new Date(experience.dateEnded).toDateString()}
        
        
        </p>
        
        <ul className='list-disc space-y-4 ml-5 text-lg max-h-96 pr-5 w-4/5 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80'>
          {experience?.points?.map((point, i)=> (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
