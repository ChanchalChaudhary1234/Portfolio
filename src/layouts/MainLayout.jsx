import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function MainLayout({ children }) {
  return (
    <div className="theme-page relative min-h-screen overflow-x-hidden">
      <div className="theme-grid pointer-events-none fixed inset-0 opacity-40" />

      <div className="theme-glow pointer-events-none fixed -left-36 -top-40 h-[430px] w-[430px] rounded-full blur-[90px]" />

      <div className="theme-glow pointer-events-none fixed -right-48 top-[280px] h-[400px] w-[400px] rounded-full blur-[110px] opacity-50" />

      <Navbar />

      <main id="top" className="relative z-10">
        {children}
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;