import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Notes</h1>
      <Link to="/notes">
        <button className="bg-white text-black font-bold p-3 rounded shadow">
          <img src="data:image/png;base64,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" 
          className="w-fit h-fit " />
          Create Notes
        </button>
      </Link>
    </div>
  );
}

export default Home;