"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useParams, usePathname } from 'next/navigation'
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Image from "next/image";
import FlyoutMenuSections from "./FlyoutMenuSections";
import { buyerMenuContent, sellerMenuContent, serviceMenuContent, blogMenuContent, tenantMenuContent } from "./Menu";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Gurugaon');
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const pathname = usePathname();
  const isHomePage = pathname === '/' || pathname === '/blog'

  const getSections = (menu) => {
    switch (menu) {
      case "buyer":
        return buyerMenuContent.sections;
      case "seller":
        return sellerMenuContent.sections;
      case "tenant":
        return tenantMenuContent.sections;
      case "blog":
        return blogMenuContent.sections;
      case "services":
        return serviceMenuContent.sections;
      default:
        return [];
    }
  };

  const Menu = ({ handleMenuHover, handleMenuClick,setHoveredMenu,setSelectedMenu }) => {

    const handleMouseEnter = (menu, event) => {
      handleMenuHover(menu);
      handleMenuClick(menu, event); // Pass event parameter to handleMenuClick
    };
  
    const handleMouseLeave = () => {
      setHoveredMenu(null);
      setSelectedMenu(null);
      handleMenuClick(null,null);
      handleMenuHover(null)
    };
  
    return (
      <>
        <p
          onMouseEnter={(e) => handleMouseEnter("buyer", e)} // Pass event parameter
          onMouseLeave={handleMouseLeave}
          onClick={() => handleMenuClick("buyer", null)} // Pass null event parameter
        >
          <a href="#">Buyer</a>
        </p>
        <p
          onMouseEnter={(e) => handleMouseEnter("seller", e)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleMenuClick("seller", null)}
        >
          <a href="#">Seller</a>
        </p>
        <p
          onMouseEnter={(e) => handleMouseEnter("tenant", e)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleMenuClick("tenant", null)}
        >
          <a href="#">Tenant</a>
        </p>
        <p
          onMouseEnter={(e) => handleMouseEnter("blog", e)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleMenuClick("blog", null)}
        >
          <a href="#">Blog</a>
        </p>
        <p
          onMouseEnter={(e) => handleMouseEnter("services", e)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleMenuClick("services", null)}
        >
          <a href="#">Services</a>
        </p>
      </>
    );
  };
  

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = (menu, event) => {
    setSelectedMenu( menu);
    if (event) {
      const rect = event.target.getBoundingClientRect();
      setMenuPosition({ top: rect.bottom, left: rect.left });
    }
  };

  const handleMenuHover = (menu, event) => {
    setHoveredMenu(menu);
    if (event) {
      const rect = event.target.getBoundingClientRect();
      setMenuPosition({ top: rect.bottom, left: rect.left });
    }
  };
  
  const handleClickOutside = () => {
    setSelectedMenu(null);
  };
  
  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  return (
    <div className={`navbar${isHomePage ? "" : "Page"}${scrolled ? " scrolled" : ""}`}>
      <div className="navbar-links">
        <div className="navbar-links__logo">
          <Image
            alt="Logo"
            src="/lda.png"
            height={20}
            width={40}
            className="IMG"
          />
          <h3 className="font-[Poppins] text-white">Deal Acres</h3>
        </div>
        <select value={selectedLocation} onChange={handleLocationChange} className="text-white bg-transparent font-bold">
        <option className="text-black" value="Gurugaon">Gurugaon</option>
        <option className="text-black"value="Delhi">Delhi</option>
        <option className="text-black"value="Mumbai">Mumbai</option>
      </select>
        <div className="navbar-links__container">
        <Menu
        handleMenuClick={handleMenuClick}
        handleMenuHover={handleMenuHover}
        setHoveredMenu={setHoveredMenu}
        setSelectedMenu={setSelectedMenu}
      />
        </div>
        <div className="navbar-sign">
          <Link
            href="#"
            className=" text-sm sm:text-base md:text-lg text-center   font-light  text-white sm:font-normal md:font-medium shadow-blue-200 shadow-sm bg-blue-500 p-2 sm:p-2 rounded-3xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200"
          >
            Post Your Property{" "}
            <span className="text-yellow-500 text-sm sm:text-xl font-bold">Free</span>
          </Link>
          <Link
            href="#"
            className="mx-3 text-base hover:rounded-2xl p-2     bg-gradient-to-r
           hover:from-blue-700 hover:to-indigo-600 rounded-3xl text-white font-medium hover:font-bold"
          >
            Sign In
          </Link>
          <button type="button">Sign Up</button>
        </div>
      </div>
     
      {(selectedMenu && hoveredMenu) && (
          <div
            className="flyout-menu-container mt-6"
            style={{ top: menuPosition.top, left: menuPosition.left }}
            onClick={handleClickOutside}
          >
            <FlyoutMenuSections sections={getSections(selectedMenu || hoveredMenu)} />
          </div>
        )}
        <div className="hidden">
      {toggleMenu ? (
        <RiCloseLine
          color="#fff"
          size={45}
          className='close'
          onClick={() => {
            setToggleMenu(false);
          }}
        />
      ) : (
        <RiMenu3Line
          color="#fff"
          size={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />
      )}
      {toggleMenu && (
        <div className="navbar-menu_container">
          <div className="navabr-menu_container-links">
            <Menu />
            <div className="navbar-menu_container-links-sign">
              <p>Sign In</p>
              <h5>Post your Property</h5>
              <button type="button">Sign Up</button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div >
  );
};

export default Navbar;