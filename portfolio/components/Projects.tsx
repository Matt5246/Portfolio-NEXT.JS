import * as React from 'react';
import {motion} from 'framer-motion'

export interface IAppProps {
}

export default function App (props: IAppProps) {
    const projects = [1,2];
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }} 
    transition={{ duration:1.5 }}
    className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        {projects.map((project) =>(
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                <motion.img
                initial={{ 
                y: -300,
                opacity: 0
                }}
                whileInView={{ opacity: 1, y: 0 }} 
                transition={{ duration:1.5 }}
                viewport={{ once: true}}
                src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/332123466_546084300956977_4517584310441823536_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=9YOV2NA0zFMAX_LycHJ&_nc_ht=scontent-waw1-1.xx&oh=03_AdSyBnKCU7quRQ7LQSbwYngYmo4WrsLseaKP0y6D61478Q&oe=643C6CF8"
                />
                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center'>Wpf project</h4>
                    <p className='text-lg text-center md:text-left'>

                    </p>
                </div>
            </div>
        ))}
      </div>
      <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>
    </motion.div>
  );
}
