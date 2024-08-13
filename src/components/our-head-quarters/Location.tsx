import { locations } from '@/data';
import React from 'react';

interface LocationProps {
    locationIndex: number;
}

const Location: React.FC<LocationProps> = ({ locationIndex }) => {
    const { address, googleMapUrl } = locations[locationIndex];

    return (
        <div className="rounded-lg overflow-hidden shadow-lg">
            <h3 className="text-xl font-semibold mb-4">{address}</h3>
            <iframe
                title="location-map"
                width="100%"
                height="450"
                loading="lazy"
                allowFullScreen
                src={googleMapUrl}
                className="border-none"
            ></iframe>
        </div>
    );
};

export default Location;
