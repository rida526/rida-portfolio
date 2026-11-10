import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const linkClass = ({ isActive }) =>
        `block px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive
            ? "text-white bg-indigo-600"
            : "text-slate-300 hover:text-white hover:bg-slate-800"
        }`;

    return (
        <header className="sticky top-0 z-50 bg-slate-900/90  backdrop-blur border-b border-slate-800">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">

                <Link to="/" className="flex items-center gap-2.5 group">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-[#1C232A] shadow-md shadow-[#6CB8E8]/20 transition-transform duration-300 group-hover:scale-105">
                        RA
                    </div>

                    <div className="flex flex-col leading-tight">
                        <span className="text-base font-bold tracking-tight text-white">
                            Rida Akram
                        </span>
                        <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-gray-400">
                            Software Engineer
                        </span>
                    </div>
                </Link>
                <ul className="hidden md:flex items-center gap-2">
                    {
                        Links.map((l) =>
                            <li key={l.to}>
                                <NavLink to={l.to} className={linkClass}>
                                    {l.label}
                                </NavLink>
                            </li>)
                    }

                </ul>
                {/* only for mobile screen */}
                <button className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu"
                    aria-expanded={isOpen}>
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>

                </button>


            </nav>

            {isOpen && (
                <ul className="md:hidden border-t border-slate-800 bg-slate-900 px-4 py-2 space-y-1">
                    {
                        Links.map((l) => (
                            <li key={l.to}>
                                <NavLink to={l.to} className={linkClass} onClick={() => setIsOpen(false)}>
                                    {l.label}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            )}

        </header>
    );
}
