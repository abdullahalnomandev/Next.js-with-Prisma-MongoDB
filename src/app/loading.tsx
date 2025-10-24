import React from 'react';

const LoadingPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                <div className="mt-4 text-lg text-gray-600 font-semibold">
                    loading....
                </div>
            </div>
        </div>
    );
};

export default LoadingPage;