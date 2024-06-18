import Image from 'next/image';
import { SlLocationPin } from 'react-icons/sl';

import { HelloTypeWriter, TechItem } from '@/components';
import { techStacks } from '@/constrants/tech-stack';

import type { Response } from '@/types';

export default async function Home() {
  const data: Response = await getData();

  return (
    <main className="mx-auto min-h-screen w-full max-w-2xl px-8 md:px-0 md:py-16 lg:py-8">
      <div className="mb-1 inline-block rounded-full bg-neutral-700 px-2 py-1">
        <div className="flex items-center space-x-1">
          <span>{SlLocationPin({ className: 'h-4 w-4' })}</span>
          <span className="text-sm">Phnom Penh, Cambodia</span>
        </div>
      </div>

      <HelloTypeWriter />

      <div className="p-2" />

      <p className="text-lg font-light text-neutral-400">
        I am a Full-stack developer with a focus on web development and
        blockchain. Passionate about creating innovative solutions and
        leveraging the latest technologies.
      </p>

      <div className="p-8" />

      <p className="mb-8 text-2xl font-extrabold sm:text-3xl">
        Things I&apos;ve Built
      </p>

      {data.response ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {data?.response.map((item, index) => (
            <div key={index} className="rounded-lg bg-neutral-900 px-8 py-4">
              <p className="mb-2 text-lg font-bold">{item.name}</p>
              <p className="font-light text-neutral-400">{item.description}</p>
            </div>
          ))}
        </div>
      ) : (
        ''
      )}

      <div className="p-8" />

      <p className="mb-1 text-2xl font-extrabold sm:text-3xl">Technologies</p>
      <p className="mb-8 text-lg font-light text-neutral-400">
        I&apos;ve worked with a range technologies in the web development world.
        <br />
        From Frontend to Backend.
      </p>
      <div className="relative w-full rounded-xl">
        <Image
          fill
          alt=""
          src="/magicpattern-mesh-gradient.png"
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
    </main>
  );
}

async function getData() {
  const res = await fetch(
    'https://gh-pinned-repos-api.ysnirix.xyz/api/get?username=iamcombo'
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
