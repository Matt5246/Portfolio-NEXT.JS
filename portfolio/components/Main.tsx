import * as React from 'react';
import {Cursor, useTypewriter} from "react-simple-typewriter"
import BackgroundCircles from '@/components/BackgroundCircles'
import Link from 'next/link';

export interface IAppProps {
}

export default function Main (props: IAppProps) {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name is Paul",
      "my nick name is matt5246",
      "im react front end developer",
    ],
    loop: true,
    delaySpeed: 2000,
  })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles/>
      <img
      className='relative rounded-full h-32 w-32 mx-auto object-cover'
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span>{text}</span>
          <Cursor cursorColor='#F7AB0A'/>
        </h1>
        <div className='pt-5'>
          <Link href="#about"><button className='mainButton'>Experience</button></Link>
          <Link href="#experience"><button className='mainButton'>About</button></Link>
          <Link href="#skills"><button className='mainButton'>Skills</button></Link>
          <Link href="#projects"><button className='mainButton'>Projects</button></Link>
        </div>
      </div>
    </div>
  );
}
