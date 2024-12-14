import Image from "next/image";
import { MapPin } from "lucide-react";
import { Container } from "@/core/components/layout";
import {
  HelloTypeWriter,
  PinnedRepoItem,
  TechItem,
  fetchGitRepo,
} from "@/feature/home";

import backdrop from "/public/magicpattern-mesh-gradient.png";
import { techStacks } from "@/core/constants";

export default async function Home() {
  const data = await fetchGitRepo();

  return (
    <Container className="max-w-2xl px-8 md:px-0 md:py-16 lg:py-8">
      <div className="mb-1 inline-block rounded-full bg-neutral-800 px-2 py-1">
        <div className="flex items-center space-x-1">
          <MapPin width={14} height={14} />
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
              <PinnedRepoItem
                key={index}
                name={item.name}
                description={item.description}
              />
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
