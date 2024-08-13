'use client'
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdArrowDropDown } from "react-icons/md";
import { navItems } from "@/data";
import { FaSearch } from "react-icons/fa";
import SearchOverlay from "../search-overlay/SearchOverlay";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State for search overlay
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index: any) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const linkClasses = (path: string) =>
    pathname === path
      ? "text-primary font-semibold px-3 py-2 rounded-md text-base"
      : "text-foreground hover:text-primary font-medium px-3 py-2 rounded-md text-base";

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="bg-background shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-[150px]">
        <div className="flex items-center">
          <a href="/">
            <span className="text-3xl font-bold text-primary bg-gradient-to-r from-background to-primary p-2 rounded-xl shadow-lg">
              Quick<span className="text-secondary">Pay</span>
            </span>
          </a>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item, index) => (
            item.subItems ? (
              <div key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(index)}
                  className={linkClasses(item.href || '')}
                >
                  {item.name} <MdArrowDropDown className="inline-block" />
                </button>
                {dropdownOpen === index && (
                  <div className="absolute mt-2 w-48 bg-card shadow-lg z-10 rounded-md">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="block px-4 py-2 text-background hover:bg-background hover:text-foreground"
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
          ))}
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <FaSearch className="text-primary cursor-pointer" onClick={toggleSearch} />
          <Link
            href="/login"
            className="bg-secondary text-background font-semibold px-4 py-2 rounded-full hover:bg-primary hover:text-secondary"
          >
            Create Account
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
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

      <SearchOverlay isOpen={isSearchOpen} onClose={toggleSearch} /> {/* Use the SearchOverlay component */}

      <div className={`${isOpen ? "block" : "hidden"} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item, index) => (
            item.subItems ? (
              <div key={index} className="relative">
                <button
                  onClick={() => toggleDropdown(index)}
                  className="text-primary font-medium px-3 py-2 flex rounded-md text-base text-left relative w-full"
                >
                  <div>{item.name}</div>
                  <MdArrowDropDown className="ml-auto" />
                </button>
                {dropdownOpen === index && (
                  <div className=" bg-card shadow-lg rounded-md">
                    {item.subItems.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="text-background block px-4 py-2 text-base hover:bg-background hover:text-foreground"
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
                className="text-foreground font-medium px-3 py-2 rounded-md text-base block hover:bg-secondary hover:text-background"
              >
                {item.name}
              </Link>
            )
          ))}
          <Link
            href="/login"
            className="bg-secondary text-background block px-4 py-2 rounded-full text-center hover:bg-primary hover:text-secondary"
          >
            Create Account
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
