import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,

} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [openNav, setOpenNav] = React.useState(false);
 
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
 
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
       <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#23BE0A] font-bold border border-solid p-2 px-4 border-[#23BE0A]" : "font-bold"
              }
            >
              Home
                </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
          <NavLink
              to="/listedBooks"
              className={({ isActive }) =>
                isActive ? "text-[#23BE0A] font-bold border border-solid p-2 px-4 border-[#23BE0A]" : "font-bold"
              }
            >
             Listed Books
            </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
              to="/pagesToRead"
              className={({ isActive }) =>
                isActive ? "text-[#23BE0A] font-bold border border-solid p-2 px-4 border-[#23BE0A]" : "font-bold"
              }
            >
             Pages to Read
            </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
       <NavLink
              to="/exploreBooks"
              className={({ isActive }) =>
                isActive ? "text-[#23BE0A] font-bold border border-solid p-2 px-4 border-[#23BE0A]" : "font-bold"
              }
            >
             Explore Books
            </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
       <NavLink
              to="/aboutUs"
              className={({ isActive }) =>
                isActive ? "text-[#23BE0A] font-bold border border-solid p-2 px-4 border-[#23BE0A]" : "font-bold"
              }
            >
           About Us
            </NavLink>
      </Typography>
    </ul>
  );
 
    return (
       <div className="-m-6 max-h-[768px] w-[calc(100%+48px)]">
      <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-bold pl-6 text-xl"
          >
            Book Vibe
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-1">
              <Button
                variant="text"
                size="sm"
                className="hidden lg:inline-block px-8 py-3 bg-[#23BE0A] text-white rounded"
              >
                <span>Sign In</span>
              </Button>
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block px-8 py-3 bg-[#59C6D2] text-white rounded"
              >
                <span>Sign up</span>
              </Button>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="px-8 py-3 font-semibold rounded bg-[#59C6D2] text-white">
              <span>Sign In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="px-8 py-3 font-semibold rounded bg-[#59C6D2] text-white">
              <span>Sign up</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </div>
    );
};

export default Nav;

 
