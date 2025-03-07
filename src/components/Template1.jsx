const Template1 = ({ data }) => {
  return (
    <div className="bg-white p-4 sm:p-8">
      <div className="element-header-template-one border-b">
        <div className="text-center mb-4">
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-800">
            {data.name}
          </h1>
          <p className="text-base sm:text-lg text-gray-600">{data.title}</p>
          <div className="text-center mt-3 flex flex-col sm:flex-row sm:space-x-4">
            <span className="text-gray-600 font-medium text-sm">
              Email: {data.email}
            </span>
            <span className="text-gray-600 font-medium text-sm">
              Phone: {data.phone}
            </span>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="element-experince mt-4">
        <div className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 flex items-center">
            Experience
          </h2>
          <ul className="space-y-4">
            {data.experience.map((exp, index) => (
              <li key={index} className="text-gray-600">
                <div className="flex flex-col sm:flex-row justify-between">
                  <div className="company-element">
                    <h3 className="font-semibold text-base sm:text-lg">
                      {exp.company}
                    </h3>
                  </div>
                  <div className="year-element">
                    <p className="text-sm text-gray-500">{exp.year}</p>
                  </div>
                </div>
                <ul className="title-experience">
                  <li className="text-sm text-gray-500">{exp.job}</li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Education */}
      <div className="element-education">
        <div className="mb-8">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4 flex items-center">
            Education
          </h2>
          <ul className="space-y-4">
            {data.education.map((edu, index) => (
              <li key={index} className="text-gray-600">
                <div className="flex flex-col sm:flex-row justify-between">
                  <div className="element-school">
                    <h3 className="font-semibold text-base sm:text-lg">
                      {edu.school}
                    </h3>
                  </div>
                  <div className="element-year">
                    <p className="text-sm text-gray-500">{edu.year}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">{edu.major}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-4">
          Skills
        </h2>
        <ul className="list-disc list-inside text-gray-600">
          {data.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="element-power-by text-center py-6">
        <h6 className="text-sm text-gray-300">Template By Desain AI</h6>
      </div>
    </div>
  );
};

export default Template1;
