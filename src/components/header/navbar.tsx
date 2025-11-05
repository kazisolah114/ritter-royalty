import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
    const navs = [
        { name: 'Home', link: '/' },
        { name: 'Listings' },
        { name: 'About', link: '/about' },
        { name: 'Contact', link: '/contact' },
    ]
    return (
        <ul className='flex items-center gap-6 max-md:hidden'>
            {navs.map((nav, index) => (
                <li key={index} className='font-medium'>
                    {nav.link ?
                        <Link href={`${nav.link}`}>{nav.name}</Link>
                        :
                        <button className='flex items-center gap-1 cursor-pointer'>{nav.name} <ChevronDown size={16} /></button>
                    }
                </li>
            ))}
        </ul>
    );
};

export default Navbar;