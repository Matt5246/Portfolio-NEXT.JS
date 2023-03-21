import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Main from '@/components/Main'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Matt5246's portfolio</title>
      </Head>
      <Header/>
      <section id="main" className='snap-start'>
        <Main/>
      </section>
      <section id="about" className='snap-center'>
        <About/>
      </section>
      <section id="experience" className='snap-center'>
        <WorkExperience/>
      </section>
      <section id="skills" className='snap-center'>
        <Skills/>
      </section>
      <section id="projects" className='snap-center'>
        <Projects/>
      </section>
      <section id="contactme" className='snap-center'>
        <ContactMe/>
      </section>

      <Link href="#main">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0" src="https://jmiandro.files.wordpress.com/2017/09/upv0vy8.jpg?w=1200"
            />
            
          </div>
        </footer>
      </Link>

    </div>    
  )
}
