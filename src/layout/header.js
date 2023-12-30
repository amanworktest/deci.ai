import Image from 'next/image';
import Link from 'next/link';
import '../app/globals.css'

export default function Header() {
  return (
        <header className='sticky top-0 h-20 z-10 w-full bg-white p-5 px-14 border border-bottom border-borderColor flex flex-row justify-between'>

            <div className='flex flex-row space space-x-8 items-center'>
                <Image src={'/logo.svg'} width={100} height={100} className='mr-5' />
                <Link href="/" className='hover:text-primary'>Platform</Link>
                <Link href="/" className='hover:text-primary'>Technology</Link>
                <Link href="/" className='hover:text-primary'>Solutions</Link>
                <Link href="/" className='hover:text-primary'>Pricing</Link>
                <Link href="/" className='hover:text-primary'>Resources</Link>
                <Link href="/" className='hover:text-primary'>Community</Link>
                <Link href="/" className='hover:text-primary'>Company</Link>
            </div>

            <div className='flex-row space-x-8'>
                <Link href={'/login'} className='text-primary font-bold '>Log in</Link>
                <button
                    className='p-2 px-6 text-white bg-primary border border-2 border-primary rounded-lg hover:bg-white hover:text-primary'
                >Book a Demo</button>
            </div>
        </header>
  )
}
