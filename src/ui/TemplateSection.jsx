import { Link } from "react-router-dom";
import Template1 from "../assets/image/Resume 1.jpg";
import Template2 from "../assets/image/Frame 2.jpg";
import Template3 from "../assets/image/image 8.jpg";
import Template4 from "../assets/image/Frame 3.jpg";

export default function TemplateSection() {
  return (
    <div className="container mx-auto px-16 md:px-16 lg:px-8">
      <div className="title-heading-content text-center py-12">
        <h1 className="text-3xl md:text-3xl font-bold text-gray-900">
          Explore 4 impactful resume templates
        </h1>
        <h6 className="text-md text-gray-500 py-2">
          Win over recruiters by choosing one of our well-designed templates
        </h6>
      </div>

      {/* Template Pilihan */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Card 1 */}
        <div className="group bg-white rounded-lg border hover:shadow-xl transition-shadow duration-300 overflow-hidden relative">
          <img
            src={Template1}
            alt="Template 1"
            className="w-full h-80 object-cover"
          />

          <Link
            to="/edit/1"
            className="absolute inset-x-0 bottom-4 mx-auto w-max bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Use Template
          </Link>
        </div>

        {/* Card 2 */}
        <div className="group bg-white rounded-lg border hover:shadow-xl transition-shadow duration-300 overflow-hidden relative">
          <img
            src={Template2}
            alt="Template 2"
            className="w-full h-80 object-cover"
          />

          <button
            className="absolute inset-x-0 bottom-4 mx-auto w-max bg-gray-400 text-white px-6 py-2 rounded-full opacity-50 cursor-not-allowed"
            disabled>
            Coming Soon
          </button>
        </div>

        {/* Card 3 */}
        <div className="group bg-white rounded-lg border hover:shadow-xl transition-shadow duration-300 overflow-hidden relative">
          <img
            src={Template3}
            alt="Template 3"
            className="w-full h-80 object-cover"
          />

          <button
            className="absolute inset-x-0 bottom-4 mx-auto w-max bg-gray-400 text-white px-6 py-2 rounded-full opacity-50 cursor-not-allowed"
            disabled>
            Coming Soon
          </button>
        </div>

        {/* Card 4 */}
        <div className="group bg-white rounded-lg border hover:shadow-xl transition-shadow duration-300 overflow-hidden relative">
          <img
            src={Template4}
            alt="Template 4"
            className="w-full h-80 object-cover"
          />

          <button
            className="absolute inset-x-0 bottom-4 mx-auto w-max bg-gray-400 text-white px-6 py-2 rounded-full opacity-50 cursor-not-allowed"
            disabled>
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  );
}
