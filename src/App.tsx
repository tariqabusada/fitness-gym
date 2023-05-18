import Navbar from "@/components/navbar";
import Home from '@/components/home';
import OurServices from '@/components/ourServices';
import Benefits from "@/components/benefits";
import ContactUs from "@/components/contactUs";
import Footer from "@/components/footer";
import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(()=> {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll)
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage = { setSelectedPage } />
      <Benefits setSelectedPage = { setSelectedPage } />
      <OurServices setSelectedPage = { setSelectedPage } />
      <ContactUs setSelectedPage = { setSelectedPage } />
      <Footer />
    </div>
  )
}

export default App
