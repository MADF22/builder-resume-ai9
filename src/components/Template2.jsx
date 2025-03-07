import {
  FaBriefcase,
  FaEnvelope,
  FaPhone,
  FaGraduationCap,
  FaHistory,
  FaTools,
} from "react-icons/fa";
import DOMPurify from "dompurify";
const Template2 = ({ data }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold text-gray-800 flex items-center justify-center">
          {data.name}
        </h1>
        <p className="text-lg text-gray-600 flex items-center justify-center">
          <FaBriefcase className="mr-2" /> {data.title}
        </p>
      </div>
      <hr />
      {/* Contact Info */}
      <div className="py-4">
        <h2 className="text-xl font-semibold text-gray-700 mb-2 flex items-center">
          <FaEnvelope className="mr-2" /> Contact
        </h2>
        <div className="space-y-1">
          <p className="text-gray-600 flex items-center">
            <FaEnvelope className="mr-2" /> Email: {data.email}
          </p>
          <p className="text-gray-600 flex items-center">
            <FaPhone className="mr-2" /> Phone: {data.phone}
          </p>
        </div>
      </div>

      {/* Education */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2 flex items-center">
          <FaGraduationCap className="mr-2" /> Education
        </h2>
        <p className="text-gray-600">{data.education}</p>
      </div>

      {/* Experience */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-2 flex items-center">
          <FaHistory className="mr-2" /> Experience
        </h2>
        <p className="text-gray-600">{DOMPurify.sanitize(data.experience)}</p>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-2 flex items-center">
          <FaTools className="mr-2" /> Skills
        </h2>
        <ul className="list-disc list-inside text-gray-600">
          {data.skills.map((skill, index) => (
            <li key={index} className="flex items-center">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Template2;
