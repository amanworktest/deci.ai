import "../app/globals.css";
import Image from "next/image";
import Link from "next/link";

import Header from "@/layout/header";
import Footer from "@/layout/footer";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center w-3/5 m-auto px-10">
        <h1 className="text-7xl font-semibold mb-10 mt-20">Contact Us</h1>
        <p className="text-xl font-medium text-center">
          Interested in hearing more about Deci's deep learning platform or have
          a question? We'd love to hear from you. Contact us and we'll get back
          to you!
        </p>
      </div>

      <div className="relative">
        <Image src="/cube.png" width={190} height="0" className="absolute z-[-1] top-[-25px] left-[-37px]" />
      </div>

      <div className="w-full p-12 mt-5">
        <div className="flex flex-row basis-1/2">
          <div className="bg-white mr-4 rounded-2xl p-10 w-full">
            <h3 className="text-3xl mb-7">Fill the form below</h3>

            <div className="flex flex-row basis-1/2">
              <div className="w-full mr-3">
                <label className="text-grayFont text-base">First Name *</label>
                <input className="w-full outline outline-outlineColor rounded p-3 mt-1" />
              </div>
              <div className="w-full">
                <label className="text-grayFont">Last Name *</label>
                <input className="w-full outline outline-outlineColor rounded p-3 mt-1" />
              </div>
            </div>

            <div className="flex flex-row mt-5">
              <div className="w-full">
                <label className="text-grayFont">Company*</label>
                <input className="w-full outline outline-outlineColor rounded p-3 mt-1" />
              </div>
            </div>

            <div className="flex flex-row mt-5">
              <div className="w-full">
                <label className="text-grayFont">Email*</label>
                <input className="w-full outline outline-outlineColor rounded p-3 mt-1" />
              </div>
            </div>

            <div className="flex flex-row mt-5">
              <div className="w-full">
                <label className="text-grayFont">Phone Number*</label>
                <input className="w-full outline outline-outlineColor rounded p-3 mt-1" />
              </div>
            </div>

            <div className="mt-5 text-grayFont">
              <label>I'd like to be contacted via</label>

              <div className="flex flex-col mt-1">
                <label for="one">
                  <input
                    className="mr-1"
                    type="radio"
                    id="one"
                    name="contactVia"
                    value="email"
                  />
                  Email
                </label>

                <label for="two">
                  <input
                    className="mr-1"
                    type="radio"
                    id="two"
                    name="contactVia"
                    value="phone"
                  />
                  Phone
                </label>
              </div>
            </div>

            <div className="flex flex-row mt-5">
              <div className="w-full">
                <label className="text-grayFont">Message*</label>
                <textarea className="w-full outline outline-outlineColor rounded p-3 mt-1" />
              </div>
            </div>

            <div className="mt-5 flex items-start">
              <input type="checkbox" className="mr-2 mt-1.5" />
              <p className="text-grayFont">
                By registering, you confirm that you agree to the processing of
                your personal data by Deci as described in the{" "}
                <Link href="/" className="text-primary underline hover:text-[#15171A]">
                  Privacy Policy
                </Link>
                .*
              </p>
            </div>

            <div className="mt-5">
              <button className="bg-primary p-3 px-9 uppercase text-white rounded-lg hover:bg-blackBackground">
                {" "}
                Send{" "}
              </button>
            </div>
          </div>

          <div className="ml-4 rounded-xl w-full overflow-hidden">
            <div className="relative w-full h-2/5">
              <Image
                src={"/contact-us-image.webp"}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative w-full h-3/5">
              <Image
                src={"/contact-map-image.png"}
                layout="fill"
                objectFit="cover"
              />
              <h4 className="text-white absolute top-10 left-16 text-2xl">
                Deci AI
              </h4>
              <p className="text-white absolute top-20 left-16">
                +972 3 3751969 <br />
                +1 650 448 1069 <br />
                info@deci.ai
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-10">
        <h4 className="text-5xl font-bold text-primary text-center mb-8">
          Get in touch
        </h4>

        <div className="flex flex-row items-center justify-center space-x-7 mb-24">
          <Link href={"/"}>
            <Image src="/linkedin.svg" width={48} height={48} className="hover:opacity-85 transition-all duration-300 hover:scale-110" />
          </Link>
          <Link href={"/"}>
            <Image src="/twitter.svg" width={48} height={48} className="hover:opacity-85 transition-all duration-300 hover:scale-110" />
          </Link>
          <Link href={"/"}>
            <Image src="/vimeo.svg" width={48} height={48} className="hover:opacity-85 transition-all duration-300 hover:scale-110" />
          </Link>
          <Link href={"/"}>
            <Image src="/youtube.svg" width={48} height={48} className="hover:opacity-85 transition-all duration-300 hover:scale-110" />
          </Link>
          <Link href={"/"}>
            <Image src="/facebook.svg" width={48} height={48} className="hover:opacity-85 transition-all duration-300 hover:scale-110" />
          </Link>
        </div>



      </div>

      <Footer />
    </>
  );
}
