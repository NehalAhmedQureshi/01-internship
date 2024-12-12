import Image from "next/image";
import {Roboto} from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  weight: [ '700'],
});

export default function Home() {
  return (
    <>
    <h1 className="main text-4xl text-center mt-24">
      hello world
    </h1>
    <h1 className={`${roboto.className} text-4xl text-center pt-4`}>
      hello world
    </h1>
    </>
  );
}
