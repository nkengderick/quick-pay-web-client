import React from 'react'
import AppLayout from '../AppLayout'
import DashboardContainer from '@/components/dashboard-container/DashboardContainer'
import Link from 'next/link'
import { profileData } from '@/data'
import { ProfileItem } from '@/types/profile.types'

const Profile = () => {
    return (
        <AppLayout>
            <DashboardContainer>
                <div className="p-6">
                    {profileData.map((section, index) => (
                        <div key={index} className="mb-6">
                            <h2 className="text-lg font-semibold mb-4">{section.section}</h2>
                            <div className="bg-white shadow-md rounded-lg">
                                {section.items.map((item: ProfileItem, i: number) => (
                                    <Link key={i} href={item.link} className="block p-4 border-b last:border-none flex items-center">
                                            <item.icon className="h-6 w-6 text-gray-500 mr-4"  />
                                        <div className="flex-1">
                                            <p className="text-sm font-medium">{item.label}</p>
                                            {item.value && <p className="text-sm text-gray-500">{item.value}</p>}
                                            {item.label === 'Mail' && item.isVerified && (
                                                <p className="text-xs text-red-500">Not Verified</p>
                                            )}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </DashboardContainer>
        </AppLayout>
    )
}

export default Profile