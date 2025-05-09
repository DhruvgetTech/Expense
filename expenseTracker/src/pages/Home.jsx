import React, { useEffect, useState } from 'react';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [textIndex, setTextIndex] = useState(0);

  const texts = ['Finsave AI', 'Your Personal Budgeting Expert'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSignIn = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
<div className='bg-gradient-to-br from-purple-800 via-indigo-800 to-gray-900'>
<div className="navbar shadow-sm ">
  <a className="btn btn-ghost text-white bg-transparent border-none text-xl mt-8">Finsave AI</a>
</div>
    <div className="min-h-screen flex items-center justify-center  px-4">
    
      <div className="max-w-md w-full bg-gray-800 bg-opacity-90 p-8 rounded-xl shadow-lg">
        {/* Animated Title */}
        <h1 className="text-3xl font-bold text-center text-pink-400 mb-6 animate-pulse transition-all duration-700">
          {texts[textIndex]}
        </h1>

        {/* Sign In Form */}
        <h2 className="text-xl font-semibold text-center mb-4 text-purple-300">
          Sign In
        </h2>
        <div className="space-y-5">
          <div>
            <label className="block mb-1 text-purple-300">Email</label>
            <div className="flex items-center border rounded px-3 py-2 bg-gray-700 focus-within:ring-2 focus-within:ring-purple-400">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent text-purple-200 placeholder-purple-400 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 text-purple-300">Password</label>
            <div className="flex items-center border rounded px-3 py-2 bg-gray-700 focus-within:ring-2 focus-within:ring-purple-400">
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-transparent text-purple-200 placeholder-purple-400 focus:outline-none"
              />
            </div>
          </div>

          <div className="text-right text-sm text-purple-300 hover:underline cursor-pointer">
            Forgot password?
          </div>

          <button
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-2 rounded-md transition duration-300 transform hover:scale-105 shadow-lg"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Home;
