import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Header from '@/components/Header';
import Main from '@/components/Main';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import Link from 'next/link';
import type { GetStaticProps } from 'next';
import { Experience, PageInfo, Project, Skill, Social} from "@/typings";
import { fetchPageInfo } from '@/utils/fecthPageInfo'
import { fetchSkills } from '@/utils/fetchSkills'
import { fetchExperiences } from '@/utils/fetchExperiences'
import { fetchSocial } from '@/utils/fetchSocials'
import { fetchProjects} from '@/utils/fetchProjects'


const inter = Inter({ subsets: ['latin'] });
const Home=({pageInfo, experiences, projects, skills, socials}:Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Matt5246 portfolio</title>
      </Head>
      <Header socials={socials}/>
      <section id="main" className='snap-start'>
        <Main pageInfo={pageInfo}/>
      </section>
      <section id="about" className='snap-center'>
        <About pageInfo={pageInfo}/>
      </section>
      <section id="experience" className='snap-center'>
        <WorkExperience experience={experiences}/>
      </section>
      <section id="skills" className='snap-center'>
        <Skills skills={skills}/>
      </section>
      <section id="projects" className='snap-center'>
        <Projects projects={projects}/>
      </section>
      <section id="contact" className='snap-center'>
        <ContactMe/>
      </section>

      <Link href="#main">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0" 
            src="https://cdn.sanity.io/images/qngu94ol/production/d09c9c9ecca56a4bcf4646a65d34b038c8817d78-720x720.png"
            />
          </div>
        </footer>
      </Link>
      
    </div>    
  )
}
export default Home;
type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
  
};
export const getStaticProps: GetStaticProps<Props> = async () => {
  
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
}














