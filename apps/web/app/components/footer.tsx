import Image from "next/image";
import logo from "../../public/images/logo.svg";
import badgeGooglePlay from "../../public/images/google-play-badge.png";
import badgeAppStore from "../../public/images/app-store-badge.svg";


export default function Footer(): JSX.Element {
  return (
    <footer className="bg-black text-white justify-between flex bottom-0 w-full py-16 px-24 max-sm:py-4 px-0 max-sm:flex-col max-sm:pb-10">
      <div className="w-4/6 border-r border-w border-gray-700 max-sm:border-none max-sm:flex max-sm:justify-center max-sm:w-full ">
        <div className="w-4/6 flex flex-col gap-8 text-left">
          <Image
            src={logo}
            alt="Logo site image"
            width={100}
            height={100}
            className="bg-primary rounded-md right-0"
          />
          <ul className="flex flex-col gap-1">
            <li>Home</li>
            <li>About Livebank</li>
            <li>Download App</li>
          </ul>
          <p>
            Copyright © {new Date().getFullYear()} Livebank. All rights
            reserved Livebank Payment Institution S.A. - Electronic currency
            issuer - CNPJ nº 00.001.001/0001-01. Av. Oliveira Rod, nº 123 - São
            Paulo/SP
          </p>
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
    </footer>
  );
}
