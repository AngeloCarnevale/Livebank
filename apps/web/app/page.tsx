"use client";

import Image from "next/image";
import banner from "../public/images/banner.png";
import card from "../public/images/card_gif.gif";
import Container from "./components/container";
import Card from "./components/card";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SecurityIcon from "@mui/icons-material/Security";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Register from "./components/drawer";

export default function Page(): JSX.Element {
  return (
    <>
      <Container>
        <section className="flex">
          <div className="bg-amber-50 w-2/4 justify-center flex flex-col gap-6 p-16">
            <h1 className="font-semibold text-4xl w-3/5">
              Create your free account, quick and easy. Try now!
            </h1>
            <div className="w-1/3">
              <Register text="Register Free" />
            </div>
          </div>
          <div className="w-2/4">
            <Image src={banner} alt="Banner image" className="h-full"/>
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
          <Image src={card} alt="Card image" />
          <h2 className="font-bold text-4xl">
            Order your card now!
          </h2>
        </section>
      </Container>
    </>
  );
}
