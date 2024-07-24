import { facultyMembers } from "../faculty";

const FacultyPage = () => {
  return (
    <div className="md:w-[95%] md:m-8 rounded-lg py-8 px-4 bg-zinc-400">
      <h1 className="text-2xl font-semibold text-center mb-8">----- OUR FACULTYS ------</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {facultyMembers.map((faculty, index) => (
          <div key={index} className="bg-blue-200 flex rounded-lg shadow-md overflow-hidden">
            <img src={faculty.imageUrl} alt={faculty.name} className="w-2/5 h-full "/>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{faculty.name}</h2>
              <p className="text-gray-600">{faculty.position}</p>
              <p className="text-gray-500 text-sm">{faculty.education}</p>
              <p className="text-gray-700 mt-2">{faculty.experience}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacultyPage;