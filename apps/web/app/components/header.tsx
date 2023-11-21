'use client'

import { useEffect, useState } from "react";
import logo from '../../public/images/logo.svg'
import Link from "next/link";
import Image from "next/image";
import Register from "./drawer";
import { getSession } from "next-auth/react";
import ButtonLogout from "./buttonLogout";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [session, setSession]: any | null = useState()
  
  const getCurrentSession = async () => {
    const session = await getSession()
    .then(data => setSession(data?.access))
    return session
  }
  useEffect(()=> {
   getCurrentSession()
  }, [])
  

  return (
    <div className="flex items-center justify-between py-2 px-8 sticky top-0 bg-white w-full z-10 border-b border-slate-200">
      <Link href={'/'}>
        <Image
          src={logo}
          width={100}
          alt="Logo image"
          className="bg-primary rounded-lg"
        />
      </Link>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
              <li className="my-8 uppercase">
                <Link href={'/'} onClick={() => setIsNavOpen(false)}>
                  Home
                </Link>
              </li>
              <li className="my-8 uppercase">
                <Link href={'/about'} onClick={() => setIsNavOpen(false)}>
                  About
                </Link>
              </li>
              <li className="my-8 uppercase" onClick={() => setIsNavOpen(false)}>
                <Register text="Open Account"/>
              </li>
            </ul>
          </div>
        </section>
        {session ? 
        <ul className="DESKTOP-MENU hidden space-x-8  items-center lg:flex font-semibold">
          <li>
            <Link href={'/'} className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href={'/about'} className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <ButtonLogout/>
          </li>
        </ul> : <ul className="DESKTOP-MENU hidden space-x-8  items-center lg:flex font-semibold">
          <li>
            <Link href={'/'} className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href={'/about'} className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href={'/login'} className="underline hover:bg-yellow-100 p-3 rounded-lg">
              Área do cliente
            </Link>
          </li>
          <li>
            <Register text="Register" />
          </li>
        </ul>}
        
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}