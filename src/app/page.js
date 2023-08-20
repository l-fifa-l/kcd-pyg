'use client';

import Image from 'next/image';
import useDownloader from 'react-use-downloader';

export default function Home() {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();

  const fileUrl = '/badge.png';
  const filename = 'badge.png';
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30">
          <Image src="/logo.png" width={400} height={50} alt="logo of keras" />
        </p>
        <div className="fixed bottom-0 left-0 flex h-32 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://gdg.community.dev/gdg-prayagraj/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/logo2.png"
              alt="GDG Logo"
              className=""
              width={400}
              height={50}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-to-br before:from-transparent before:to-blue-700 before:opacity-10 after:from-sky-900 after:via-[#0141ff] after:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className=""
          src="/badge.png"
          alt="event badge"
          width={500}
          height={100}
          priority
        />
      </div>
      <button
        className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
        onClick={() => download(fileUrl, filename)}
      >
        <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
        <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
          <span className="relative text-white">Download Badge</span>
        </span>
      </button>

      <a
        href="https://play.google.com/store/apps/details?id=com.grinler.app"
        target="_blank"
        className=" mt-5 inline-block px-5 py-2 mx-auto text-white bg-blue-600 rounded-full hover:bg-blue-700 md:mx-0"
      >
        Download Grinler
      </a>
    </main>
  );
}
