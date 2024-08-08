'use client'
import { SetStateAction, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdArrowDropDown } from "react-icons/md";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // Track which dropdown is open
  const pathname = usePathname(); // Get the current path

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index: any) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const linkClasses = (path: string) =>
    pathname === path
      ? "text-navy font-semibold px-3 py-2 rounded-md text-base"
      : "text-navy hover:text-navy font-medium px-3 py-2 rounded-md text-base";

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Features', href: '#features' },
    {
      name: 'Pages',
      subItems: [
        { name: 'Pricing', href: '#pricing' },
        { name: 'Contact Us', href: '#contact' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'FAQs', href: '#faqs' },
      ],
    }
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center">
          <Link href="/">
            <img
              src="/logo.png" // Replace with your logo's path
              alt="QuickPay"
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item, index) => (
            item.subItems ? (
              <div key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(index)}
                  className={linkClasses(item.href || '')}
                >
                  {item.name} <MdArrowDropDown />
                </button>
                {dropdownOpen === index && (
                  <div className="absolute mt-2 w-48 bg-white shadow-lg">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className={linkClasses(subItem.href)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={index}
                href={item.href}
                className={linkClasses(item.href)}
              >
                {item.name}
              </Link>
            )
          )
          )}
        </div>
        <div className="hidden md:flex items-center">
          <Link
            href="/login"
            className="font-semibold px-4 py-2 rounded-full"
          >
            Register
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-navy focus:outline-none focus:ring-2 focus:ring-inset focus:ring-navy"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} md:hidden`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item, index) => (
            item.subItems ? (
              <div key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="text-navy font-medium px-3 py-2 flex rounded-md text-base text-left relative"
                >
                  <div>{item.name}</div>
                 <div className="absolute right-0 top-8"><MdArrowDropDown /></div>
                </button>
                {dropdownOpen === index && (
                  <div className="absolute mt-2 w-full bg-white shadow-lg">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="text-navy block px-4 py-2 rounded-md text-base"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={index}
                href={item.href}
                className="text-navy font-medium px-3 py-2 rounded-md text-base block"
              >
                {item.name}
              </Link>
            )
          ))}
          <Link
            href="/login"
            className="bg-navy text-white block px-4 py-2 rounded-full text-center"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
