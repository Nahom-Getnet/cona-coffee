import Navbar from "./Navbar";
import Footer from "../sections/Footer";

import FloatingWhatsapp from "../common/FloatingWhatsapp";
import BackToTop from "../common/BackToTop";

function Layout({ children }) {
  return (
    <>
      <Navbar />

      <main>
        {children}
      </main>

      <Footer />

      <FloatingWhatsapp />
      <BackToTop />
    </>
  );
}

export default Layout;