const Educaion = () => {
  return (
    <div className="max-w-2xl mx-auto md:mt-5 leading-10">
      <h1 className="text-2xl py-5 text-center font-semibold text-gray-600">
        Education
      </h1>
      <div className="border-2 border-gray-500 p-5 rounded-lg bg-white">
        <div className="flex justify-between">
          <h1 className="text-black font-bold">
            Bachelor of Science in Computer Science
          </h1>
          <h1 className="font-bold">2019 - 2023</h1>
        </div>
        <h1 className="text-purple-700 text-lg font-bold hover:underline">
          American International University-Bangladesh (AIUB)
        </h1>
        <h1 className="text-gray-600">GPA: 3.55 out of 4.0</h1>
        <h1>Major in Software Engineering</h1>
        <ul className="list-disc ml-10 text-gray-600">
          <li>Software Requirment and Analysis</li>
          <li>Software Quality and Assurence</li>
          <li>Software Developement and Project Manegment</li>
          <li>Advance Database Management System</li>
        </ul>
      </div>
    </div>
  );
};
export default Educaion;
