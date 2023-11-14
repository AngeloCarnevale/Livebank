'use client'

import Image from "next/image";
import logo from "../../public/images/logo.svg";
import Link from "next/link";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation"; 


export default function Header(): JSX.Element {
  const router = useRouter()

  return (
    <header className="">
      <nav className="p-4">
        <ul className="flex justify-between items-center px-4">
          <li>
            <Link href="/">
              <Image
                src={logo}
                alt="Logo Livebank image"
                width={95}
                className="bg-primary rounded-lg hover:bg-primary-hover"
              />
            </Link>
          </li>
          <li>
            <Button onClick={()=> void router.push("/login")} className="bg-primary text-black font-bold hover:bg-primary-hover py-2 rounded-md w-full">
              Login
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
