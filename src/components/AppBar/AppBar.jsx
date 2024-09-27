// import * as React from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";

// const pages = ["Products", "Pricing", "Blog"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// function MyAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <AppBar position="static"   >
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: "none", md: "flex" },
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             LOGO
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: "bottom",
//                 horizontal: "left",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "left",
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{ display: { xs: "block", md: "none" } }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography sx={{ textAlign: "center" }}>{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: "flex", md: "none" },
//               flexGrow: 1,
//               fontFamily: "monospace",
//               fontWeight: 700,
//               letterSpacing: ".3rem",
//               color: "inherit",
//               textDecoration: "none",
//             }}
//           >
//             LOGO
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: "white", display: "block" }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>
//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: "45px" }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: "top",
//                 horizontal: "right",
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography sx={{ textAlign: "center" }}>
//                     {setting}
//                   </Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default MyAppBar;
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "./SideBar";
import Backdrop from "../Elements/BackDrop";
// Assets
// import LogoIcon from "../../assets/svg/Logo";
// import BurgerIcon from "../../assets/svg/BurgerIcon";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Track login state

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);
  // Simulate login/logout state for demonstration purposes
  const handleLogout = () => {
    setIsLoggedIn(false); // Set to false when the user logs out
  };

  const handleLogin = () => {
    setIsLoggedIn(true); // Set to true when the user logs in
  };
  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate whiteBg"
        style={y > 100 ? { height: "60px" } : { height: "80px" }}
      >
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            {/* <LogoIcon /> */}
            <h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
              Track Io .
            </h1>
          </Link>
          <BurderWrapper
            className="pointer"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            {/* <BurgerIcon /> */}
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            {!isLoggedIn ? (
              <>
                <li className="semiBold font15 pointer">
                  <Link
                    activeClass="active"
                    style={{ padding: "10px 15px" }}
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    Home
                  </Link>
                </li>
                <li className="semiBold font15 pointer">
                  <Link
                    activeClass="active"
                    style={{ padding: "10px 15px" }}
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    Services
                  </Link>
                </li>
                <li className="semiBold font15 pointer">
                  <Link
                    activeClass="active"
                    style={{ padding: "10px 15px" }}
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    Projects
                  </Link>
                </li>
                <li className="semiBold font15 pointer">
                  <Link
                    activeClass="active"
                    style={{ padding: "10px 15px" }}
                    to="blog"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    Blog
                  </Link>
                </li>
                <li className="semiBold font15 pointer">
                  <Link
                    activeClass="active"
                    style={{ padding: "10px 15px" }}
                    to="pricing"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    Pricing
                  </Link>
                </li>
              
              </>
            ) : (
              <>
                {/* Show Profile and Logout when user IS logged in */}
                <li className="semiBold font15 pointer">
                  <Link
                    activeClass="active"
                    style={{ padding: "10px 15px" }}
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-80}
                  >
                    Contact
                  </Link>
                </li>
              </>
            )}
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            {!isLoggedIn ? (
              <>
                {/* Show Login and Get Started links when user is NOT logged in */}
                <li className="semiBold font15 pointer">
                  <a href="/sign-in" style={{ padding: "10px 30px 10px 0" }}>
                    Log in
                  </a>
                </li>
                <li className="semiBold font15 pointer flexCenter">
                  <a
                    href="/sign-up"
                    className="radius8 lightBg"
                    style={{ padding: "10px 15px" }}
                  >
                    Get Started
                  </a>
                </li>
              </>
            ) : (
              <>
                {/* Show Profile and Logout when user IS logged in */}
                <li className="semiBold font15 pointer">
                  <a href="/profile" style={{ padding: "10px 30px 10px 0" }}>
                    Profile
                  </a>
                </li>
                <li className="semiBold font15 pointer flexCenter">
                  <button
                    className="radius8 lightBg"
                    style={{ padding: "10px 15px" }}
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;


