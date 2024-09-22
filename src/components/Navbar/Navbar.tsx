import { useState } from "react";
// import { FaDumbbell } from "react-icons/fa";
import { MdMenu, MdSportsVolleyball } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";
import ResponsiveMenu from "./ResponsiveMenu";
import { NavbarMenu } from "./NavbarMenue";
import SearchInput from "./SearchInput";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="items-center p-4 sm:p-8  flex justify-between  ">  {/* xl:p-20 2xl:p-24 py-8*/}
          {/* Logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <MdSportsVolleyball  className="text-primary"/>
            <p className="text-secondary">Sportix</p>
            {/* <p className="text-red-600">Gyme</p> */}
          </div>
          {/* Menu section */}
          <div className="hidden md:block uppercase">
            <ul className="flex items-center gap-6 text-gray-600">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a 
                    href={item.link}
                    className="inline-block py-1 px-3 hover:text-primary font-semibold"
                    >{item.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Icons section */}
          <div className="flex items-center gap-4">

          <SearchInput/>
            
            {/* <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
                <CiSearch />
            </button> */}
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
                <PiShoppingCartThin />
            </button>
            <NavLink to='/login' className="hover:bg-primary text-primary font-semibold hover:text-white rounded-md border-2 border-primary px-6 py-2 duration-200 hidden md:block">
                Login
            </NavLink>
          </div>
          {/* Mobile hamburger*/}
          <div className="md:hidden" onClick={()=> setOpen(!open)}>
            <MdMenu className="text-4xl"/>
          </div>
        </div>
        {/* Mobile Sidebar section  */}
        <ResponsiveMenu open={open}/>
      </nav>
    </>
  );
};

export default Navbar;


