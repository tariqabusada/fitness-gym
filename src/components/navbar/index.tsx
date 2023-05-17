import { useState, useEffect } from "react"
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from '@/assets/Logo.png'

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const [isMenuToggled, setMenuToggled] = useState<boolean>(false);
  return <nav>
  <div 
    className= {`${flexBetween} fixed top-0 z-30 w-full py-6`}
  >
    <div className={`${flexBetween} mx-auto w-5/6`}>
      <div className={`${flexBetween} w-full gap-16`}>
        {/* LEFT SIDE */}
        <img alt="logo" src={Logo} width={'180px'} height={'120px'}/>

        {/* RIGHT SIDE */}
        {isAboveMediumScreens ? (<div className={`${flexBetween} w-full`}>
          <div className={`${flexBetween} gap-8 text-sm`}>
            <Link 
              page= "Home" 
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              />
            <Link 
              page= "Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              />
            <Link 
              page= "Our Services"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
          <div className={`${flexBetween} gap-8`}>
            <Link 
              page= "Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              />
          </div>
        </div>
        ) : (
          <div>
            <button
              className="rounded-full bg-secondary-500 p-2"
              onClick={() => setMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className = "h-6 w-6 text-white" />
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
    </nav>
}

export default Navbar