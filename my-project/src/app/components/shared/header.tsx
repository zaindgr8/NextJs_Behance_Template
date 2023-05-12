import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
     <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b bg-transparent pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border  lg:p-4 ">
          Zain Ul Abideen
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t p-5 bg-white from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none rounded-lg">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 text-black "
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"

              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div> 
  )
}
