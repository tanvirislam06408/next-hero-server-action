import Link from 'next/link';
import React from 'react';
import { ThemeSwitch } from './ThemeSwitch';

const Navbar = () => {
    return (
        <nav className='shadow'>
            <div className="flex justify-between mx-auto container">
                <h1 className='font-bold text-3xl py-3.5'>next-app</h1>
                <ul className='flex items-center gap-3.5'>
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/task'}>Task</Link></li>
                </ul>
                <ThemeSwitch/>
            </div>
        </nav>
    );
};

export default Navbar;