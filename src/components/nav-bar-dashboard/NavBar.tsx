'use client'
import React from 'react'
import NavBarLink from './NavBarLink'
import { dashboardLink, MerchantLink } from '../../data'

interface NavBarProps {
    agent?: boolean;
}

interface Link {
    icon: any; 
    link: string;
    name: string;
}

const NavBar: React.FC<NavBarProps> = ({ agent }) => {

    const links: Link[] = agent === true ? MerchantLink : dashboardLink;

    return (
        <nav className="fixed w-full bottom-0 z-10 mb-6 bg-white shadow-md py-3">
            <section className="flex justify-between items-center px-8">
                {links.map((item, index) => (
                    <NavBarLink
                        key={index}
                        link={item.link}
                        name={item.name}
                        icon={item.icon}
                    />
                ))}
            </section>
        </nav>
    )
}

export default NavBar
