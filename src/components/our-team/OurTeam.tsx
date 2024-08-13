import { teamData } from '@/data';
import React from 'react';
import HeaderCard from '../header-card/HeaderCard';

interface TeamProps {
    showAll: boolean;
}

const Team = ({ showAll }: TeamProps) => {

    // Determine the number of team members to display
    const membersToShow = showAll ? teamData.team : teamData.team.slice(0, 2);

    return (
        <>
            <HeaderCard title={teamData.title} subtitle={teamData.description} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {membersToShow.map((member, index) => (
                    <div key={index} className="p-6 bg-white rounded-lg shadow-lg flex items-center">
                        <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full object-cover mr-6" />
                        <div>
                            <h2 className="text-xl font-bold mb-2">{member.name}</h2>
                            <p className="text-gray-700 mb-4">{member.about}</p>
                            <div className="flex space-x-4">
                                {member.socialMedia.map((social, index) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                                            <IconComponent className="text-2xl text-gray-700 hover:text-gray-900" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Team;
