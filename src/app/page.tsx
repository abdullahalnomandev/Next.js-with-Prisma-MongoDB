import React from 'react';
const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-white">
            <div className="max-w-2xl mx-auto px-6 text-center">
                <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">
                    Welcome to <span className="text-indigo-600">Remiq</span>
                </h1>
                <p className="mt-4 text-lg text-gray-600">
                    Your next-generation platform for seamless collaboration and productivity.
                </p>
                <div className="mt-8 flex gap-4 justify-center">
                    <button className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
                        Get Started
                    </button>
                    <button className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
