import type { NextComponentType } from 'next';

import Image from 'next/image';
import Link from 'next/link';

import { HiOutlineArrowNarrowRight } from '../Misc/Icons.collection';

const About: NextComponentType = () => {
  return (
    <div className="font-sen my-8 flex flex-row items-center justify-between px-3">
      <div>
        <p className="text-3xl font-bold text-white">Prajwal</p>
        <p className="mt-1 text-lg text-gray-300">
          Frontend Developer, Blogger and a Student
        </p>

        <p className="mt-4 text-gray-400">
          Building Web apps, proficient in Frontend.
        </p>

        <Link href="https://prajwalblog.vercel.app/" passHref>
          <a
            className="font-jost mt-4 flex cursor-pointer flex-row items-center gap-1 text-xl text-gray-400 duration-100 hover:ml-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read my Blog
            <HiOutlineArrowNarrowRight />
          </a>
        </Link>
      </div>

      <div className="custom:block hidden">
        <Image
          src="/assests/avatar.png"
          width="112"
          height="112"
          className="rounded-full"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default About;
