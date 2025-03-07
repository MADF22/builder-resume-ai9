import Image from "../assets/image/HeroImage.jpeg";
import ModalTemplate from "./ModalTemplate";

export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-12">
      {/* Bagian Kiri */}
      <div className="container mx-auto w-full md:w-1/2 text-center md:text-left py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Resume Builder
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Many resume builders claim to be free, only to charge you when it’s
          time to download your resume. With Jobscan’s resume builder, you can
          create and download unlimited ATS-compatible resumes—without reaching
          for your wallet. Build my resume now
        </p>
        <button className="bg-deep-purple-800 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-deep-purple-900 transition">
          <ModalTemplate />
        </button>
      </div>

      {/* Bagian Kanan */}
      <div className="w-full h-full md:w-1/2 mt-6 md:mt-0 flex justify-end">
        <img
          src={Image}
          alt="HeroImage"
          className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
