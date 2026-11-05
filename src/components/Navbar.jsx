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
            ? "text-indigo-600 bg-indigo-50"
            : "text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
        }`;

    return (
        <header className="sticky top-0 z-50 bg-slate-900 ">

        </header>
    );
}
