import Image from "next/image";
import logo from "../../public/images/logo.svg";
import badgeGooglePlay from "../../public/images/google-play-badge.png";
import badgeAppStore from "../../public/images/app-store-badge.svg";
import Link from "next/link";


export default function Footer(): JSX.Element {
  return (
    <footer className="bg-black text-white">
      <div className="flex justify-between bottom-0 w-full py-16 px-24 max-sm:py-6 px-0 max-sm:flex-col max-sm:pb-10 max-sm:px-0">
        <div className="w-4/6 border-r border-w border-gray-700 max-sm:border-none max-sm:flex max-sm:justify-center max-sm:w-full max-sm:pb-20">
          <div className="w-4/6 flex flex-col gap-8 max-sm:items-center">
            <Image
              src={logo}
              alt="Logo site image"
              width={100}
              height={100}
              className="rounded-md right-0 bg-primary"
            />
            <ul className="flex flex-col gap-1">
              <li>
                <Link href={'/'}>
                  Home
                </Link>
              </li>
              <li>
                <Link href={'/about'}>
                  About Livebank
                </Link>
              </li>
              <li>
                <Link href={'/download'}>
                  Download App
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-2/6 max-sm:w-full">
          <div className="flex flex-col justify-center items-center px-8 gap-4 max-sm:text-center">
            <h1 className="font-bold text-5xl w-2/4 max-sm:text-2xl max-sm:w-full">Download Now!</h1>
            <button>
              <Image
                src={badgeGooglePlay}
                alt="Badge Google Play image"
                width={300}
              />
            </button>
            <button className="px-5">
              <Image
                src={badgeAppStore}
                alt="Badge App Store image"
                width={260}
              />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-zinc-800 text-center py-5">
        <p>
          Copyright © {new Date().getFullYear()} Livebank. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
