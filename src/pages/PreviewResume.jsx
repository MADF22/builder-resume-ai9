import { useParams } from "react-router-dom"; // Impor useParams
import { useEffect, useState } from "react"; // Impor useEffect dan useState
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Template1 from "../components/Template1";
import Template2 from "../components/Template2";
import Template3 from "../components/Template3";

const PreviewResume = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const [data, setData] = useState(null); // State untuk menyimpan data resume
  const [loading, setLoading] = useState(true); // State untuk loading

  // Ambil data dari localStorage berdasarkan ID
  useEffect(() => {
    const resumeData = localStorage.getItem(`resume_${id}`);
    if (resumeData) {
      setData(JSON.parse(resumeData));
    }
    setLoading(false);
  }, [id]);

  const downloadPDF = () => {
    const input = document.getElementById("resume");
    if (!input) {
      alert("Resume content not found!");
      return;
    }

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("resume.pdf");
    });
  };

  // Jika data tidak ditemukan, tampilkan pesan error
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Loading...</h1>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-red-500 mb-4">
          Data resume tidak ditemukan.
        </h1>
        <p className="text-gray-600">
          Silakan kembali ke halaman edit dan coba lagi.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-6">
      {/* Bagian Preview Resume */}
      <div className="flex-1 overflow-y-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Preview Resume</h1>
        <div id="resume" className="bg-white p-6 rounded-lg shadow-lg">
          {data.template === 1 && <Template1 data={data} />}
          {data.template === 2 && <Template2 data={data} />}
          {data.template === 3 && <Template3 data={data} />}
        </div>
      </div>

      {/* Bagian Tombol Download */}
      <div className="p-6 bg-white border-t">
        <div className="flex justify-center">
          <button
            onClick={downloadPDF}
            className="bg-deep-purple-800 text-white px-6 py-2 rounded hover:bg-deep-purple-900 transition-colors">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewResume;
