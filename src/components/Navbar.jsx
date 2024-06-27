import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo, logotext } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {  // Vous pouvez ajuster ce numéro pour changer à quel point vous voulez que le changement se produise
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <style>
        {`
          .nav-links:hover {
            color: #DAA520;  /* Marron clair au survol */
          }
          .nav-background {
            background-color: #ffffff; /* Fond bleu quand on commence à scroller */
            transition: background-color 0.3s;
          }
          .text-french {
            color: #DAA520; 
        `}
      </style>
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20  sm:opacity-[0.97] xxs:h-[12vh] ${isScrolled ? 'nav-background' : ''}`}>
      <div className="w-full flex justify-between items-center max-w-8xl ">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          <img
            src={logotext}
            alt="logo"
            className="sm:w-[270px] sm:h-[90px] w-[85px] h-[85px] -ml-[0.5rem] object-contain"
          />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-12 ">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-french' : 'text-eerieBlack'
              } hover:text-taupe text-[17px] font-medium font-poppins
                 tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
            <li className="bg-black text-white py-3 px-5 border-none cursor-pointer text-lg leading-tight">
              <button>Download CV</button>
            </li>
        </ul>
        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] absolute 
                top-0 left-0 w-screen h-[100vh] z-10 menu ${
                  toggle ? 'menu-open' : 'menu-close'
                }`}>
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className="list-none flex flex-col -gap-[1rem] 
                items-start justify-end mt-[10rem] -ml-[35px]">
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`${
                      active === nav.title ? 'text-french' : 'text-eerieBlack'
                    } text-[88px] font-bold font-arenq 
                      uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;