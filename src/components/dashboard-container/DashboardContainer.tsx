import Header from '@/components/dashboard-header/DashboardHeader';
import React from 'react';

const DashboardContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main className="mt-16">{children}</main>
        </>
    );
}

export default DashboardContainer;
