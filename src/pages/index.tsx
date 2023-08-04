import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { ListItem } from '@/components/ListItem';
import {
	SiSolidity,
	SiGit,
	SiMongodb,
	SiNextdotjs as SiNextDotJs,
	SiNodedotjs as SiNodeDotJs,
	SiPostgresql,
	SiReact,
	SiStyledcomponents as SiStyledComponents,
	SiTailwindcss,
	SiTypescript,
	SiYarn,
  SiPowershell,
} from 'react-icons/si';
import useSWR from 'swr';
import { SlLocationPin } from 'react-icons/sl';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

const inter = Inter({ subsets: ['latin'] })

type PinnedRepo = {
  owner: string;
  repo: string;
  description: string;
  language: string;
  languageColor: string;
  stars: string;
  forks: string;
};
const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = 
    useSWR<PinnedRepo[], Error>(
      'https://gh-pinned.nxl.sh/api/user/iamcombo', 
      fetcher, 
      { refreshInterval: 5000 }
    );
  const [text, count] = useTypewriter({
    words: [
      "Hey, I'm Piset 👋",
    ],
    loop: true,
    delaySpeed: 2000
  })

  return (
    <div>
      <div className='bg-neutral-700 inline-block py-1 px-2 mb-1 rounded-full'>
        <div className='flex items-center space-x-1'>
          <span>{SlLocationPin({className: 'h-4 w-4'})}</span>
          <span className='text-sm'>Phnom Penh, Cambodia</span>
        </div>
      </div>
      <p className='text-4xl font-black sm:text-5xl'>
        {text}
        <Cursor cursorColor='#F7AB0A' />
      </p>
      <div className='p-2'/>
      <p className='font-light text-lg text-neutral-400'>I am a Full-stack developer with a focus on web development and blockchain. Passionate about creating innovative solutions and leveraging the latest technologies.</p>
      <div className='p-8' />

      <p className='text-2xl sm:text-3xl font-extrabold mb-8'>Things I&apos;ve Built</p>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        {data?.map((element: PinnedRepo, index: number) => 
          <div key={index} className='bg-neutral-900 rounded-lg px-8 py-4'>
            <p className='text-lg font-bold mb-2'>{element.repo}</p>
            <p className='font-light text-neutral-400'>{element.description}</p>
          </div>
        )}
      </div>
      <div className='p-8' />

      <p className='text-2xl sm:text-3xl font-extrabold mb-1'>Technologies</p>
      <p className='text-neutral-400 text-lg font-light mb-8'>I&apos;ve worked with a range technologies in the web development world.<br />From Frontend to Backend.</p>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <ListItem icon={SiGit} text="Git" />
        <ListItem icon={SiNodeDotJs} text="Node.js" />
        <ListItem icon={SiTypescript} text="TypeScript" />
        <ListItem icon={SiReact} text="React.js" />
        <ListItem icon={SiNextDotJs} text="Next.js" />
        <ListItem icon={SiNestjs} text="Nest.js" />
        <ListItem icon={SiPowershell} text="Shell" />
        <ListItem icon={SiYarn} text="Yarn" />
        <ListItem icon={SiTailwindcss} text="TailwindCSS" />
        <ListItem icon={SiStyledComponents} text="styled-components" />
        <ListItem icon={SiPostgresql} text="Postgres" />
        <ListItem icon={SiMongodb} text="Mongo" />
      </ul>
      <div className={styles.center} />
    </div>
  )
}
