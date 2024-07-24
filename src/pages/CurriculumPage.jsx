import React from 'react';

const CurriculumPage = () => {
  return (
    <div className="md:w-[95%] py-8 px-4 bg-zinc-400 md:m-8 rounded-lg">
      <div className="container mx-auto  md:p-10 bg-zinc-400">
        <h1 className="text-2xl font-semibold text-center mb-8">--------- ACADEMICS 📚--------</h1>
        <div className=' rounded-lg mb-8 bg-slate-500'>
          <h1 className="text-3xl font-semibold text-left p-5  mb-8">Curriculum</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
          <div className=' p-4 rounded-lg border-2 border-gray-300'>
          <h2 className="text-2xl font-semibold mb-4 text-white">Primary (Grades 1-5)</h2>
          <ul className="list-disc list-inside pl-5 text-white">
            <li>English</li>
            <li>Mathematics</li>
            <li>Science</li>
            <li>Social Studies</li>
            <li>Art</li>
            <li>Physical Education</li>
          </ul>
        </div>
        <div className=" p-4 rounded-lg border-2 border-gray-300">
          <h3 className="text-2xl font-semibold mb-4 text-white">Secondary (Grades 6-10)</h3>
          <ul className="list-disc list-inside pl-5 text-white">
            <li>English</li>
            <li>Mathematics</li>
            <li>Science (Physics, Chemistry, Biology)</li>
            <li>Social Studies</li>
            <li>Computer Science</li>
            <li>Physical Education</li>
            <li>Art</li>
          </ul>
        </div>
        </div>

        <div className="mb-8 bg-slate-500 p-6 rounded-lg shadow-md ">
          <h2 className="text-2xl font-semibold mb-4">Senior Secondary (Grades 11-12)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className=" p-4 rounded-lg border-2 border-gray-300">
              <h3 className="text-lg font-semibold mb-2 text-white">Science Stream</h3>
              <ul className="list-disc list-inside pl-5 text-white">
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Biology</li>
                <li>Mathematics</li>
                <li>Computer Science</li>
                <li>English</li>
              </ul>
            </div>
            <div className=" p-4 rounded-lg border-2 border-gray-300">
              <h3 className="text-lg font-semibold mb-2 text-white">Commerce Stream</h3>
              <ul className="list-disc list-inside pl-5 text-white">
                <li>Accountancy</li>
                <li>Business Studies</li>
                <li>Economics</li>
                <li>Mathematics</li>
                <li>English</li>
              </ul>
            </div>
          </div>
        </div>
        </div>

        <div className="mb-8 bg-slate-500 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Teaching Methodologies</h2>
          <p className="text-white">
            We use a blend of traditional and modern teaching techniques to cater to different learning styles.
          </p>
        </div>

        <div className="bg-slate-500 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Educational Resources</h2>
          <p className="text-white">
            Digital classrooms, interactive learning modules, and access to online educational platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurriculumPage;
