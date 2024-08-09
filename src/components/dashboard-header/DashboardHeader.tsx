import React from 'react';

const Header = () => {
    return (
        <header className="bg-white p-4 shadow-md flex items-center justify-between">
            <div className="flex items-center">
                {/* User Info */}
                <div className="flex items-center space-x-3">
                    <img
                        src="/path-to-your-image.jpg"
                        alt="User Avatar"
                        className="w-12 h-12 rounded-full"
                    />
                    <div>
                        <h1 className="text-lg font-semibold">NKENGBEZA Derick</h1>
                        <p className="text-sm text-gray-500">Lorem ipsum, dolor sit</p>
                    </div>
                </div>
            </div>
            <div>
                {/* Verification badge */}
                <span className="text-sm font-medium text-green-500">Verified</span>
            </div>
        </header>
    );
}

export default Header;
