import { useState } from "react";
import { useParams } from "react-router-dom";
import Template1 from "../components/Template1";
import Template2 from "../components/Template2";
import Template3 from "../components/Template3";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Input, Typography } from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import { ClipboardPen } from "lucide-react";
import Modal from "../ui/Modal";
const EditResume = () => {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    email: "",
    phone: "",
    education: [],
    experience: [],
    skills: [],
  });

  const { template } = useParams();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddEducation = () => {
    setFormData({
      ...formData,
      education: [...formData.education, { school: "", year: "", major: "" }],
    });
  };

  const handleRemoveEducation = (index) => {
    const updatedEducation = formData.education.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      education: updatedEducation,
    });
  };

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = formData.education.map((edu, i) =>
      i === index ? { ...edu, [field]: value } : edu,
    );
    setFormData({
      ...formData,
      education: updatedEducation,
    });
  };

  // Fungsi untuk Experience
  const handleAddExperience = () => {
    setFormData({
      ...formData,
      experience: [...formData.experience, { company: "", year: "", job: "" }],
    });
  };

  const handleRemoveExperience = (index) => {
    const updatedExperience = formData.experience.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      experience: updatedExperience,
    });
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = formData.experience.map((exp, i) =>
      i === index ? { ...exp, [field]: value } : exp,
    );
    setFormData({
      ...formData,
      experience: updatedExperience,
    });
  };

  const downloadPDF = () => {
    const input = document.getElementById("resume-preview");
    if (!input) {
      alert("Resume content not found!");
      return;
    }

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("resume.pdf");
    });
  };

  return (
    <div className="element__edit">
      <div className="flex flex-wrap md:flex-nowrap h-full p-4 md:p-6 gap-4">
        {/* Bagian Kiri: Form Edit */}
        <div className="w-full md:w-1/3 bg-white p-6 rounded-lg border">
          <h1 className="text-2xl font-bold mb-4">Edit Resume</h1>
          <form className="space-y-4">
            {/* Input Name */}
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-1 font-medium font-satoshi">
                Nama Lengkap
              </Typography>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nama Lengkap"
                className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
            </div>

            {/* Input Title */}
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-1 font-medium font-satoshi">
                Position Jobs
              </Typography>
              <Input
                type="text"
                name="title"
                placeholder="Position"
                value={formData.title}
                onChange={handleChange}
                className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
            </div>

            {/* Input Email */}
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-1 font-medium font-satoshi">
                Email Address
              </Typography>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
            </div>

            {/* Input Phone */}
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-1 font-medium font-satoshi">
                Phone Number
              </Typography>
              <Input
                type="text"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
            </div>

            {/* Input Experience */}
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-3 font-medium font-satoshi">
                Experience
              </Typography>

              {formData.experience.map((exp, index) => (
                <div
                  key={index}
                  className="space-y-2 mb-4 p-3 border rounded-lg">
                  <Input
                    type="text"
                    placeholder="Company Name"
                    value={exp.company}
                    onChange={(e) =>
                      handleExperienceChange(index, "company", e.target.value)
                    }
                    className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                  <Input
                    type="text"
                    placeholder="Year"
                    value={exp.year}
                    onChange={(e) =>
                      handleExperienceChange(index, "year", e.target.value)
                    }
                    className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                  <Input
                    type="text"
                    placeholder="Job Title"
                    value={exp.job}
                    onChange={(e) =>
                      handleExperienceChange(index, "job", e.target.value)
                    }
                    className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                  <div className="flex items-center space-x-3 py-3">
                    <button
                      type="button"
                      onClick={() => handleRemoveExperience(index)}
                      className="border border-indigo-800 text-indigo-800 px-2 py-2 rounded flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                    </button>
                    <div className="element-prompt">
                      <Modal />
                    </div>
                  </div>
                </div>
              ))}
              <div className="flex space-x-2 items-center">
                <div className="py-4">
                  <IconButton
                    className="shadow-none bg-purple-900"
                    type="button"
                    onClick={handleAddExperience}>
                    <ClipboardPen size={20} strokeWidth={1.25} />
                  </IconButton>
                </div>
              </div>
            </div>

            {/* Input Education */}
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-3 font-medium font-satoshi">
                Education
              </Typography>
              {formData.education.map((edu, index) => (
                <div
                  key={index}
                  className="space-y-2 mb-4 p-3 border rounded-lg">
                  <Input
                    type="text"
                    placeholder="School Name"
                    value={edu.school}
                    onChange={(e) =>
                      handleEducationChange(index, "school", e.target.value)
                    }
                    className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                  <Input
                    type="text"
                    placeholder="Year"
                    value={edu.year}
                    onChange={(e) =>
                      handleEducationChange(index, "year", e.target.value)
                    }
                    className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                  <Input
                    type="text"
                    placeholder="Major"
                    value={edu.major}
                    onChange={(e) =>
                      handleEducationChange(index, "major", e.target.value)
                    }
                    className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveEducation(index)}
                    className="border border-indigo-800 text-indigo-800 px-3 py-1 rounded flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              ))}
              <div className="py-4">
                <IconButton
                  className="shadow-none bg-purple-900"
                  type="button"
                  onClick={handleAddEducation}>
                  <ClipboardPen size={20} strokeWidth={1.25} />
                </IconButton>
              </div>
            </div>

            {/* Input Skills */}
            <div>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-3 font-medium font-satoshi">
                Skill
              </Typography>
              <Input
                type="text"
                name="skills"
                placeholder="Enter your skills (comma separated)"
                value={formData.skills.join(",")}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    skills: e.target.value.split(","),
                  })
                }
                className="appearance-none !border-t-blue-gray-200 placeholder:text-blue-gray-300 placeholder:opacity-100 focus:!border-t-gray-900 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
              />
            </div>
          </form>

          {/* Tombol Simpan dan Preview */}
        </div>

        {/* Bagian Kanan: Preview Resume */}
        <div className="w-full md:w-2/3 p-2 border rounded-xl bg-white ">
          <h1 className="text-2xl font-bold mb-4">Preview Resume</h1>
          <div id="resume-preview" className="bg-white p-2 rounded-lg">
            {template === "1" && <Template1 data={formData} />}
            {template === "2" && <Template2 data={formData} />}
            {template === "3" && <Template3 data={formData} />}
          </div>
          {/* Tombol Download PDF */}
          <div className="mt-4 flex justify-center">
            <button
              onClick={downloadPDF}
              className="bg-deep-purple-800 text-white px-6 py-2 rounded hover:bg-deep-purple-900 transition-colors">
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditResume;
