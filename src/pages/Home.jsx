import HeroSection from "../ui/HeroSection";
import TemplateSection from "../ui/TemplateSection";
import FaqSection from "../ui/FaqSection";
const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection />
      <TemplateSection />
      <FaqSection />
    </div>
  );
};

export default Home;
