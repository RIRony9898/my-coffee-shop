import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Dynamic Section */}
      <div className="grow"></div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
