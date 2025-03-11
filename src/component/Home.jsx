import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6 text-center">
        <h1 className="text-4xl font-bold text-gray-800">Connecting People Across Faiths & Interests</h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Connecting people of all faiths through events and community support. Welcome to the Communion App – a platform designed to bring people together through shared faith and common interests. Discover events, connect with like-minded individuals, and foster meaningful relationships.
        </p>
        <a href="/event">
          <button className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-3xl shadow-md hover:bg-blue-700 transition">
            Explore Events
          </button>
        </a>
      </div>
    </div>
  );
};



export default Home;
