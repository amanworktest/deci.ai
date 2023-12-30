import Image from "next/image";
import Link from "next/link";
import "../app/globals.css";

export default function Footer() {
  return (
    <footer className="w-full bg-blackBackground p-12 text-white ">
      <div className=" flex">
        <div className="flex-2">
          <Image
            src={"/footer-logo.svg"}
            width={100}
            height={100}
            className="mb-40"
          />

          <p className="text-blackBackgroundText">Stay Up to Date. Join our Newsletter!</p>

          <div className="bg-[#ffffff1a] rounded-xl p-3 mt-3 flex">
            <input
              placeholder="Email"
              className="ml-2 outline-none bg-transparent w-full placeholder-gray-300"
            />

            <button className="bg-primary py-2 px-5 rounded-lg text-sm text-white transition-all duration-300 hover:bg-blackBackground">
              Subscribe
            </button>
          </div>

          <div className="flex my-5">
            <input type="checkbox" className="mr-2" />
            <p className="text-blackBackgroundText">By registering, you accept our&nbsp;
                <Link href="/" className="text-primary underline hover:text-white">
                    Privacy Policy
                </Link>
            .</p>
          </div>

          <p className="text-xs mt-16 text-blackBackgroundText">
            This site is protected by reCAPTCHA and the Google&nbsp;
            <Link href={"/"} className="underline">
              Privacy <br /> Policy
            </Link>
            &nbsp;and&nbsp;
            <Link href={"/"} className="underline">
              Terms of Service
            </Link>
            &nbsp;apply.
          </p>
        </div>
        <div className="flex-1 flex flex-col">
          <Link href={"/"} className="text-blackBackgroundText hover:text-white">Technology</Link>
        </div>
        <div className="flex-1 flex flex-col space-y-8">
          <Link href={"/"} className="text-blackBackgroundText hover:text-white">Pricing</Link>
          <Link href={"/"} className="text-blackBackgroundText hover:text-white">Resources</Link>
          <Link href={"/"} className="text-blackBackgroundText hover:text-white">Blog</Link>
        </div>
        <div className="flex-1 flex flex-col space-y-8">
          <Link href={"/about"} className="text-blackBackgroundText hover:text-white">About</Link>
          <Link href={"/"} className="text-blackBackgroundText hover:text-white">Careers</Link>
          <Link href={"/"} className="text-blackBackgroundText hover:text-white">Newsroom</Link>
          <Link href={"/contact"} className="text-blackBackgroundText hover:text-white">Contact Us</Link>
        </div>
        <div className="flex-1 flex flex-col items-center">
          <Image src={"/iso.webp"} height={120} width={120} className="" />

          <p className="text-center mt-5 text-blackBackgroundText">
            Deci is ISO 27001
            <br />
            Certified
          </p>
        </div>
      </div>

      <div className="border w-full border-[#FFFFFF1F] my-16"></div>

      <div className="flex justify-between text-xs mt-20">
        <div className="flex space-x-5">
          <p className="text-blackBackgroundText"> &copy; 2023 Deci</p>
          <Link href={"/"} className="text-blackBackgroundText hover:text-white">Privacy Policy</Link>
          <Link href={"/"} className="text-blackBackgroundText hover:text-white">Terms of use</Link>
        </div>
        <div className="flex space-x-2">
          <span className="bg-white rounded-full w-8 h-8 flex items-center justify-center transition-opacity duration-500 hover:opacity-70">
            <Link href={"/"}>
              <Image src="/linkedin-black.svg" width={20} height={20} />
            </Link>
          </span>
          <span className="bg-white rounded-full w-8 h-8 flex items-center justify-center transition-opacity duration-500 hover:opacity-70">
            <Link href={"/"}>
              <Image src="/twitter-black.svg" width={20} height={20} />
            </Link>
          </span>
          <span className="bg-white rounded-full w-8 h-8 flex items-center justify-center transition-opacity duration-500 hover:opacity-70">
            <Link href={"/"}>
              <Image src="/medium-black.svg" width={20} height={20} />
            </Link>
          </span>
          <span className="bg-white rounded-full w-8 h-8 flex items-center justify-center transition-opacity duration-500 hover:opacity-70">
            <Link href={"/"}>
              <Image src="/vimeo-black.svg" width={20} height={20} />
            </Link>
          </span>
          <span className="bg-white rounded-full w-8 h-8 flex items-center justify-center transition-opacity duration-500 hover:opacity-70">
            <Link href={"/"}>
              <Image src="/youtube-black.svg" width={20} height={20} />
            </Link>
          </span>
          <span className="bg-white rounded-full w-8 h-8 flex items-center justify-center transition-opacity duration-500 hover:opacity-70">
            <Link href={"/"}>
              <Image src="/facebook-black.svg" width={12} height={12} />
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
