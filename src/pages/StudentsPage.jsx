import React from 'react';

const StudentsPage = () => {
  return (
    <div className="md:w-[95%] rounded-lg md:m-10 py-8 px-4 bg-zinc-400">
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold text-center mb-8">--------- STUDENTS 🧑🏻‍🎓--------</h1>
        
        <div className="mb-8  border-2 border-gray-300  bg-slate-300 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Life at Springdale</h2>
          <p className="text-gray-700">
            At Springdale, we offer a vibrant and engaging environment for students to explore their interests and passions. 
            Our students enjoy a wide range of extracurricular activities and have access to various clubs and societies.
          </p>
        </div>
        <div className='flex overflow-x-auto gap-4 snap-x py-4'>
          <div className=" border-2 border-gray-300  bg-slate-300 p-6 rounded-lg shadow-md w-80 snap-center">
            <h2 className="text-2xl font-semibold mb-4">Extracurricular Activities</h2>
            <ul className="list-disc list-inside pl-5 text-gray-700">
              <li>Music</li>
              <li>Dance</li>
              <li>Drama</li>
              <li>Art</li>
              <li>Sports</li>
              <li>Robotics</li>
              <li>Debate Club</li>
              <li>Science Club</li>
            </ul>
          </div>

          <div className=" border-2 border-gray-300  bg-slate-300 p-6 rounded-lg shadow-md w-80 snap-center">
            <h2 className="text-2xl font-semibold mb-4">Clubs and Societies</h2>
            <ul className="list-disc list-inside pl-5 text-gray-700">
              <li>Literary Society</li>
              <li>Environmental Club</li>
              <li>Astronomy Club</li>
              <li>Coding Club</li>
            </ul>
          </div>

          <div className=" border-2 border-white  bg-slate-300 p-6 rounded-lg shadow-md w-80 snap-center">
            <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
            <ul className="list-disc list-inside pl-5 text-gray-700">
              <li>John Smith - National Level Math Olympiad Winner</li>
              <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
              <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
            </ul>
          </div>
        </div>

        <div className="border border-zinc-500  bg-slate-100 p-6 rounded-lg shadow-md mt-8">
          <h2 className="text-2xl font-semibold mb-4">Student Council</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-300 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">President</h3>
              <p className="text-gray-700">Amy Parker, Grade 12</p>
            </div>
            <div className="bg-slate-300 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Vice President</h3>
              <p className="text-gray-700">Rajiv Mehta, Grade 11</p>
            </div>
            <div className="bg-slate-300 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Secretary</h3>
              <p className="text-gray-700">Lisa Wong, Grade 10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsPage;
