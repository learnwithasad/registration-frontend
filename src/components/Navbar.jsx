import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-[#F5F9FA]">
    <div className="max-w-[1200px] overflow-hidden mx-auto relative">
      <img
        src="MERN_Stack_Course_Banner.webp"
        alt="background"
        className="w-full h-full object-cover mb-10 mt-6 md:mb-0 md:mt-0"
      />
      <div className="absolute inset-0 z-10"></div>
      <div className="absolute flex flex-col items-center inset-0 z-20 px-3">

        <div className="absolute text-[13px] sm:text-[16px] flex justify-between  radius-top bottom-0  gap-1 ">
<NavLink
  to="/"
  className={({ isActive }) =>
    `px-2 sm:px-4 py-2 cursor-pointer text-white rounded 
     transition-all duration-300 hover:bg-[#ee4a6b]
     ${isActive ? 'bg-[#ee4a6b]' : 'bg-[#1ab69d]'}`
  }
>
  Registration
</NavLink>

<NavLink
  to="/id-card"
  className={({ isActive }) =>
    `px-2 sm:px-4 py-2 cursor-pointer text-white rounded 
     transition-all duration-300 hover:bg-[#ee4a6b]
     ${isActive ? 'bg-[#ee4a6b]' : 'bg-[#1ab69d]'}`
  }
>
  Download ID Card
</NavLink>
          <a href="https://skillssikhao.com/dashboard/" target="_blank">
            <button className="bg-[#1ab69d] rounded px-2 transition-all duration-300 hover:bg-[#ee4a6b] sm:px-4 py-2 cursor-pointer text-white active:bg-[#ee4a6b]">
              Dashboard
            </button>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
