import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EditResume from "./pages/EditResume";
import PreviewResume from "./pages/PreviewResume";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:template?" element={<EditResume />} />
        <Route path="/preview" element={<PreviewResume />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
