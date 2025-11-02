import Navbar from './navbar';
import Link from 'next/link';

export const Header = () => {
    return (
        <header className='container flex items-center justify-between bg-orange-700/5 border-b border-orange-700/10 h-19 w-full sticky top-0 left-0 right-0 z-50 backdrop-blur-sm'>
                <Link href="/" className='font-extrabold text-2xl text-orange-700'>Ritter Realty LLC</Link>
                <Navbar />
        </header>
    );
};