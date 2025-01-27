
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold cursor-pointer">MyCrypto</span>
        </Link>
        <div className="space-x-4">
          <Link href="#about">Chi Siamo</Link>
          <Link href="#tokenomics">Tokenomics</Link>
          <Link href="#roadmap">Roadmap</Link>
          <Link href="#team">Team</Link>
          <Link href="#contact">Contatti</Link>
        </div>
      </div>
    </nav>
  );
}
