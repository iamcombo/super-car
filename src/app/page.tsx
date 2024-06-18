import backdrop from '/public/magicpattern-mesh-gradient.png';
import Image from 'next/image';
import { SlLocationPin } from 'react-icons/sl';

import { Container, HelloTypeWriter, TechItem } from '@/components';
import { techStacks } from '@/constrants/tech-stack';

import type { Response } from '@/types';

export default async function Home() {
  const data: Response = await fetchGitRepo();

  return (
    <Container>
      <div className="mb-1 inline-block rounded-full bg-neutral-800 px-2 py-1">
        <div className="flex items-center space-x-1">
          <span>{SlLocationPin({ className: 'h-4 w-4' })}</span>
          <span className="text-sm">Phnom Penh, Cambodia</span>
        </div>
      </div>

      <HelloTypeWriter />

      <p className="my-4 text-lg font-light text-neutral-400">
        I am a Full-stack developer with a focus on web development and
        blockchain. Passionate about creating innovative solutions and
        leveraging the latest technologies.
      </p>

      <div className="py-6">
        <p className="mb-8 text-2xl font-extrabold sm:text-3xl">
          Things I&apos;ve Built
        </p>
        {data.response && (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {data?.response.map((item, index) => (
              <div key={index} className="rounded-xl bg-neutral-900 px-8 py-4">
                <p className="mb-2 text-lg font-bold">{item.name}</p>
                <p className="font-light text-neutral-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="my-6">
        <p className="mb-1 text-2xl font-extrabold sm:text-3xl">Technologies</p>
        <p className="mb-8 text-lg font-light text-neutral-400">
          I&apos;ve worked with a range technologies in the web development
          world.
          <br />
          From Frontend to Backend.
        </p>
        <div className="relative w-full rounded-xl">
          <Image
            fill
            alt=""
            src={backdrop}
            objectFit="cover"
            className="rounded-xl"
          />
          <div className="relative p-2">
            <div className="h-full w-full rounded-xl border border-gray-50 bg-gray-400 bg-opacity-20 bg-clip-padding p-4 backdrop-blur-md backdrop-filter">
              <ul className="z-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {techStacks.map(({ icon, text }, index) => (
                  <TechItem key={index} {...{ icon, text }} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

async function fetchGitRepo() {
  const res = await fetch(
    'https://gh-pinned-repos-api.ysnirix.xyz/api/get?username=iamcombo'
  );

  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}
