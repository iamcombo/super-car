import { GitHubIcon, LinkedInIcon, TwitterIcon } from "@/core/components/icon";
import { Container } from "@/core/components/layout";

const AboutPage = () => {
  return (
    <Container className="max-w-2xl px-8 md:px-0 md:py-16 lg:py-8">
      <p className="mb-8 text-4xl font-black text-neutral-300 sm:text-5xl">
        About Me
      </p>
      <p className="text-lg font-light leading-8 text-neutral-400">
        Hi! I&apos;m Piset. I&apos;m a Full-Stack developer from Cambodia 🇰🇭. As
        a Full-Stack Developer with over three years of experience in web
        development, I have a deep understanding of both front-end and back-end
        technologies, including blockchain, React/Next.js, and various backend
        languages.
      </p>
      <br />
      <p className="text-lg font-light leading-8 text-neutral-400">
        In my previous roles, I have had the opportunity to design and develop a
        variety of web applications using cutting-edge technologies. My
        experience in web development has allowed me to build a responsive and
        user-friendly interfaces that provide seamless user experiences.
        Additionally, my experience in building scalable and secure server-side
        applications has helped me integrate databases and third-party APIs to
        deliver high-quality web applications.
      </p>
      <br />
      <p className="text-lg font-light leading-8 text-neutral-400">
        I am also passionate about staying up-to-date with the latest web
        development trends and technologies. I am always looking for new
        challenges that can help me grow as a developer and expand my knowledge
        and skills. I am excited about the opportunity to work with a team of
        talented developers to create innovative and high-quality web
        applications.
      </p>
      <div className="p-6" />

      <p className="mb-8 text-3xl font-black text-neutral-300 sm:text-3xl">
        Social
      </p>
      <div className="mb-6 flex space-x-4">
        <a href="https://github.com/iamcombo" target="_blank" rel="noreferrer">
          <GitHubIcon width={32} height={32} fill="#FFF" />
        </a>
        <a
          href="https://twitter.com/iamcomboo"
          target="_blank"
          rel="noreferrer"
        >
          <TwitterIcon width={32} height={32} fill="#FFF" />
        </a>
        <a
          href="https://www.linkedin.com/in/piset-heang"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon width={32} height={32} fill="#FFF" />
        </a>
      </div>
    </Container>
  );
};

export default AboutPage;
