import Navbar from "./Navbar";


import FloatingWhatsapp from "../common/FloatingWhatsapp";
import BackToTop from "../common/BackToTop";

function Layout({ children }) {
  return (
    <>
      <Navbar />

      <main>
        {children}
      </main>

      <FloatingWhatsapp />
      <BackToTop />
    </>
  );
}

export default Layout;