import Image from "next/image";
import "../app/globals.css";

import Header from "@/layout/header";
import Footer from "@/layout/footer";

export default function About() {
  return (
    <>
      <Header />

      <main className="bg-white">
        <div
          style={{
            backgroundImage: "linear-gradient(180deg,#ebf2ff 0,#fff 100%)",
          }}
        >
          <div className="p-14  pr-36 relative pt-36">
            <h4 className="text-2xl mb-4">
              The Deep Learning Development Platform
            </h4>
            <h1 className="text-7xl font-bold">
              Our mission is to empower AI developers with powerful tools for
              building innovative AI based solutions.
            </h1>

            <Image
              src="/about-main.png"
              fill
              objectFit="contain"
              // className="top-0"
            />
          </div>
        </div>

        <div className="p-14 flex justify-between mt-20">
          <div className="flex-1 mt-12">
            <h4 className="text-xl text-secondary mb-5">
              Crafting the Next Generation of AI
            </h4>
            <h1 className="text-5xl font-thin">
              Artificial intelligence lies at the core of the fourth Industrial
              Revolution.
            </h1>
          </div>
          <div className="relative flex-1 items-center justify-center flex">
            <Image
              src="/about-cube.svg"
              width={273}
              height={322}
              className=""
            />
          </div>
        </div>

        <div className="p-14 flex justify-between items-center">
          <div className="relative flex-1 flex justify-center">
            <Image src={"/about-circle.svg"} width={292} height={0} />
          </div>

          <div className="flex-1 flex justify-center p-20">
            <h1 className="text-4xl">
              Our goal at Deci is to enable more deep learning models to fully
              perform in production and fulfill their true potential.
            </h1>
          </div>
        </div>

        <div className="p-14 flex justify-between items-center">
          <div className="flex-1 flex justify-center p-20 pl-0">
            <h1 className="text-4xl">
              We took an innovative approach, using AI itself to craft the next
              generation of deep learning.
            </h1>
          </div>

          <div className="relative flex-1 flex justify-center">
            <Image src={"/about-circle-triangle.webp"} width={292} height={0} />
          </div>
        </div>

        <div className="px-24 text-center font-bold mt-10 mb-24">
          <h1 className="text-5xl">
            A multi-talented team with a shared passion for technology
          </h1>
        </div>

        <div className="relative h-[616px]">
          <Image src={"/about-team.webp"} fill className="top-0" />
        </div>

        <div className="p-14 flex mt-20">
          <div className="relative flex justify-center w-[315px]">
            <Image src={"/about-empty-circle.webp"} width={315} height={0} />
          </div>

          <div className="flex flex-col ml-10 w-4/5">
            <h1 className="text-4xl">
              Founded in 2019 by world recognized experts in AI, with an innate
              passion for creative innovation, we forged a talented team of deep
              learning researchers and engineers.
            </h1>

            <div className="flex mt-10 space-x-5">
              <p>
                Deci's team consists of top AI researcher with advanced academic
                degrees from prestigious universities, as well as exceptional
                backgrounds in elite units and leading tech companies.
              </p>
              <p>
                Our experts are fully dedicated to advancing the
                state-of-the-art and have co-authored dozens of publications in
                top-tier machine learning venues such as NeurIPS, ICML, ICLR,
                CVPR, and ACL.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-5xl">Meet Our Team</h2>
        </div>


        <div className="p-20">
          <div className="flex items-center justify-center">
          <div className="flex-1 text-center flex flex-col items-center justify-center">
              <div className="bg-primary rounded-full w-[232px] h-[232px] overflow-hidden">
                <Image src={'/Ofer-Baratz.webp'} width={232} height={0} />
              </div>
              <p className="mt-5 text-xl">Ofer Baratz</p>
              <p className="text-subtitleText">Deep Learning Product Manager</p>
            </div>
            <div className="flex-1 text-center flex flex-col items-center justify-center">
              <div className="bg-primary rounded-full w-[232px] h-[232px] overflow-hidden">
                <Image src={'/Natan-Bagrov.webp'} width={232} height={0} />
              </div>
              <p  className="mt-5 text-xl">Natan Bagrov</p>
              <p className="text-subtitleText">Deep Learning Research Engineer</p>
            </div>
            <div className="flex-1 text-center flex flex-col items-center justify-center">
              <div className="bg-primary rounded-full w-[232px] h-[232px] overflow-hidden">
              <Image src={'/Yael-B.webp'} width={232} height={0} />
              </div>
              <p  className="mt-5 text-xl">Yael Baron</p>
              <p className="text-subtitleText">Deep Learning Engineer</p>
            </div>

            <div className="flex-1 text-center flex flex-col items-center justify-center">
              <div className="bg-primary rounded-full w-[232px] h-[232px] overflow-hidden">
              <Image src={'/ben_ami.webp'} width={232} height={0} />
              </div>
              <p  className="mt-5 text-xl">Dvir Ben Ami</p>
              <p  className="text-subtitleText">VP Finance</p>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
