const AdmissionsPage = () => {
  return (
    <div className="md:w-[95%] md:m-8 rounded-lg py-8 px-4 bg-zinc-400">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-center mb-8">----- ADMISSIONS 🎟️------</h1>
        
        {/* Admissions Process */}
        <div className="mb-8 bg-zinc-600 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Admission Process</h2>
          <p className="text-white mb-4">
            Admission forms are available for download. Submit the completed form along with required documents at the school office.
          </p>
          <a 
            href="/public/School Admission Form Template.pdf" 
            download 
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Download Admission Form
          </a>
        </div>

        {/* Admission Criteria */}
        <div className="mb-8 bg-zinc-600 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Admission Criteria</h2>
          <p className="text-white">
            Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
          </p>
        </div>

        {/* Important Dates */}
        <div className="bg-zinc-600 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Important Dates</h2>
          <ul className="list-disc list-inside pl-5 text-white">
            <li><strong>Admission Form Availability:</strong> March 1st</li>
            <li><strong>Last Date for Submission:</strong> March 31st</li>
            <li><strong>Entrance Test:</strong> April 15th</li>
            <li><strong>Announcement of Results:</strong> April 30th</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsPage;
