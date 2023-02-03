import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si";

const about = () => {
  return (
    <div className="min-h-[50vh]">
      <p className="text-4xl sm:text-5xl font-black text-neutral-300 mb-8">About Me</p>
      <p className="text-lg font-light text-neutral-400 leading-8">
        Hi! I&apos;m Piset. I&apos;m a Web developer from Cambodia 🇰🇭. 
        Over the years, I have built up a diverse range of skills, 
        qualities and attributes that guarantee I will perform highly in this role. 
        I have extensive experience working both alone and as part of a team on often time-sensitive, 
        challenging web development projects that require outstanding creative and technical capabilities and the ability to ensure all work is optimized across a wide range of platforms.
      </p>
      <div className="p-6" />

      <p className="text-3xl sm:text-3xl font-black text-neutral-300 mb-8">Social</p>
      <div className="flex space-x-4">
        <a href="https://github.com/iamcombo" target="_blank" rel="noreferrer">{SiGithub({className: 'h-8 w-8'})}</a>
        <a href="https://twitter.com/iamcomboo" target="_blank" rel="noreferrer">{SiTwitter({className: 'h-8 w-8'})}</a>
        <a href="https://www.linkedin.com/in/piset-heang" target="_blank" rel="noreferrer">{SiLinkedin({className: 'h-8 w-8'})}</a>
      </div>
    </div>
  );
}

export default about;