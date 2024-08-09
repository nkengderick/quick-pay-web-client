import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface Props {
    link: string
    name: string
    icon: IconDefinition
}

const NavBarLink: React.FC<Props> = ({ link, name, icon }) => {
    const urlPath = usePathname()
    return (
        <Link
            href={link}
            className={`${urlPath === link ? 'text-primary' : 'text-gray-500'}`}
        >
            <div className="flex flex-col cursor-pointer items-center gap-y-2">
                <FontAwesomeIcon icon={icon} className="h-5 w-5 mb-1" />
                <span className="text-sm font-medium">{name}</span>
            </div>
        </Link>
    )
}

export default NavBarLink
