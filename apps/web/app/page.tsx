'use client'


import Image from "next/image";
import Header from "./components/Header";
import banner from '../public/images/banner.png'
import card from '../public/images/card_gif.gif'
import Container from "./components/Container";
import Footer from "./components/Footer";
import Card from "./components/Card";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SecurityIcon from '@mui/icons-material/Security';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Register from "./components/Drawer";
import { useEffect } from "react";


export default function Page(): JSX.Element {

  useEffect(()=> {
    
  })


  return (
    <>
      <Header />
      <Container>
        <section className="flex">
          <div className="bg-amber-50 w-2/4 justify-center flex flex-col gap-6 p-16">
            <h1 className="font-semibold text-4xl w-3/5">Create your free account, quick and easy. Try now!</h1>
            <div className="w-1/3">
              <Register text="Register Free"/>
            </div>
          </div>
          <div className="w-2/4">
            <Image
              src={banner}
              alt="Banner image"
            />
          </div>
        </section>

        <section className="flex items-start justify-center py-20">
          <Card
            title="Data Security"
            content="Here at Livebank, your data is 100% safe, enjoy the best services and we take care of your security"
            icon={<SecurityIcon className="text-gray-600 w-10 h-10" />}
          />
          <Card
            title="Anywhere, Any Time"
            content="Our services can be easily accessed from anywhere via our mobile app or the web"
            icon={<AccessTimeIcon className="text-orange-800 w-10 h-10" />}
          />
          <Card
            title="Certification"
            content="Certified and approved by the largest institutions in the world, and especially by our customers"
            icon={<WorkspacePremiumIcon className="text-green-600 w-10 h-10" />}
          />
        </section>

        <section className="bg-primary flex items-center justify-center py-10 gap-20">
          <Image
            src={card}
            alt="Banner image"
          />
          <h2 className="w-fullfont-bold text-xl"><img src="https://readme-typing-svg.herokuapp.com?font=Helvetica&weight=700&size=28&pause=1000&color=000000&width=650&lines=+Manage+your+money%2C+finances+and+investments;+Simple%2C+practical+and+safe;Don't+be+left+out%2C+order+your+Livebank+card+now!" alt="Typing SVG" /></h2>
        </section>
      </Container>
      <Footer />
    </>
  );
}
