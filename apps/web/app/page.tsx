import Image from "next/image";
import Header from "./components/Header";
import banner from '../public/images/banner.png'
import Container from "./components/Container";
import Footer from "./components/Footer";
import {Button} from '@mui/material'


export default function Page(): JSX.Element {
  return (
    <>
      <Header />
      <Container>
        <section className="flex">
          <div className="bg-amber-50 w-2/4 justify-center flex flex-col gap-6 p-8">
            <h1 className="font-semibold text-4xl">Create your free account, quick and easy</h1>
            <Button className="bg-primary text-black font-bold hover:bg-primary-hover w-1/3 py-2" variant="contained">Register free</Button>
          </div>
          <div className="w-2/4">
            <Image
              src={banner}
              alt="Banner image"
            />
          </div>
        </section>

        <section className="bg-white flex justify-center py-8 gap-8">
          <Image
            src={banner}
            alt="Banner image"
            width={200}
            height={200}
          />
          <h1 className="w-2/4 gap-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, possimus.</h1>
        </section>

        <section className="bg-primary flex justify-center py-10 gap-8">
          <Image
            src={banner}
            alt="Banner image"
            width={200}
            height={200}
          />
          <p className="w-2/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sunt, dolores mollitia molestiae architecto ut laborum iusto reiciendis optio, quis nam. Consectetur fugit rerum voluptatem perferendis. Consequuntur culpa amet officia?</p>
        </section>
        <section className="bg-primary flex justify-center py-10 gap-8">
          <Image
            src={banner}
            alt="Banner image"
            width={200}
            height={200}
          />
          <p className="w-2/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sunt, dolores mollitia molestiae architecto ut laborum iusto reiciendis optio, quis nam. Consectetur fugit rerum voluptatem perferendis. Consequuntur culpa amet officia?</p>
        </section>
      </Container>
      <Footer />
    </>
  );
}
