const AboutPage = () => {
  return (
    <div className="gap-6 md:w-[95%] px-4 md:px-8  py-6 md:py-12 bg-zinc-400 rounded-lg md:m-8">
      <h1 className="p-8 text-2xl text-center font-semibold">------ ABOUT US 👤------</h1>
    <div className="flex flex-col md:flex-row md:gap-8">
      <div className="border-2 border-gray-300 text-left px-6 py-6 w-full md:w-1/2 h-auto rounded-lg bg-slate-500 shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-white">History</h3>
        <p className="text-white">Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.</p>
      </div>
      <div className="border-2 border-gray-300 text-left px-6 py-6 w-full md:w-1/2 h-auto rounded-lg bg-zinc-700 shadow-lg">
        <h3 className="text-xl font-semibold mb-4 text-white">Mission</h3>
        <p className="text-white">To create a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
      </div>
      <div className="border-2 border-gray-300 text-left px-6 py-6 w-full md:w-1/2 h-auto rounded-lg bg-slate-500 shadow-lg mt-6 md:mt-0">
        <h3 className="text-xl font-semibold mb-4 text-white">Principal's</h3>
        <p className="text-white">At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.</p>
      </div>
      <div className="border-2 border-gray-300 text-left px-6 py-6 w-full md:w-1/2 h-auto rounded-lg bg-zinc-700 shadow-lg mt-6 md:mt-0">
        <h3 className="text-xl font-semibold mb-4 text-white">Infrastructure and Facilities</h3>
        <ul className="list-disc list-inside text-white">
          <li>State-of-the-art science and computer labs</li>
          <li>Spacious and well-equipped classrooms</li>
          <li>Library with a vast collection of books and digital resources</li>
          <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default AboutPage;
