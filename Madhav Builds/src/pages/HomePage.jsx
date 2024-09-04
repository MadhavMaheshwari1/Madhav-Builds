import React, { useRef, useState, useEffect } from 'react';
import { FaBars } from "react-icons/fa6";
import heroImage1 from '../assets/hero-element-3.png';
import heroImage2 from '../assets/hero-element-1.png';

const HomePage = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  const [activeLink, setActiveLink] = useState('Home');
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = [homeRef.current, aboutRef.current, portfolioRef.current, contactRef.current];

    const options = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.getAttribute('id'));
        }
      });

      // Check if the navbar should become sticky
      setIsSticky(window.scrollY > homeRef.current.offsetHeight);
    }, options);

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const handleClick = (event, sectionId) => {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveLink(sectionId);
    setIsMobileMenuOpen(true); // Close mobile menu on link click
  };

  return (
    <>
      {/* Home Section with Navbar inside it */}
      <section ref={homeRef} id="Home" className='h-[100vh] relative bgImage w-full'>
        <img src={heroImage1} className="hidden xl:block xl:w-[60px] xl:h-[60px] hero__element hero__element--3 filter grayscale-[10%]" alt="" />
        <img src={heroImage2} className="hidden xl:block xl:w-[50px] xl:h-[50px] hero__element hero__element--1 filter grayscale-[10%]" alt="" />
        {/* <img src={heroImage} className="hidden xl:block xl:w-[60px] xl:h-[60px] hero__element hero__element--3 filter grayscale-[10%]" style={{ filter: 'grayscale(50%)' }}  alt="" />
        <img src={heroImage} className="hidden xl:block xl:w-[60px] xl:h-[60px] hero__element hero__element--3 filter grayscale-[10%]" style={{ filter: 'grayscale(50%)' }}  alt="" /> */}
        <div className={`px-14 flex flex-col gap-5 w-full justify-between h-auto py-5 items-center ${isSticky ? 'navbar--sticky' : ''}`}>
          <div className='flex justify-between gap-8 text-white md:text-xl font-bold w-full'>
            <h1 className='text-white text-xl md:text-4xl'>mmdev</h1>
            <div className="xl:flex hidden gap-4 items-center">
              <a
                href="#Home"
                onClick={(e) => handleClick(e, 'Home')}
                className={`link md:text-2xl ${activeLink === 'Home' ? 'text-blue' : ''}`}
              >
                Home
              </a>
              <a
                href="#About"
                onClick={(e) => handleClick(e, 'About')}
                className={`link md:text-2xl ${activeLink === 'About' ? 'text-blue' : ''}`}
              >
                About
              </a>
              <a
                href="#Portfolio"
                onClick={(e) => handleClick(e, 'Portfolio')}
                className={`link md:text-2xl ${activeLink === 'Portfolio' ? 'text-blue' : ''}`}
              >
                Portfolio
              </a>
              <a
                href="#Contact"
                onClick={(e) => handleClick(e, 'Contact')}
                className={`link md:text-2xl ${activeLink === 'Contact' ? 'text-blue' : ''}`}
              >
                Contact
              </a></div>
            <div className='xl:hidden text-white text-xl md:text-2xl cursor-pointer flex items-center' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <FaBars />
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className={`xl:hidden flex flex-col gap-2 bg-white w-full rounded-md`}>
              <a
                href="#Home"
                onClick={(e) => handleClick(e, 'Home')}
                className={`link ${activeLink === 'Home' ? 'text-blue' : ''} px-5 py-2 border-black border-b-2`}
              >
                Home
              </a>
              <a
                href="#About"
                onClick={(e) => handleClick(e, 'About')}
                className={`link ${activeLink === 'About' ? 'text-blue' : ''}  px-5 py-2 border-black border-b-2`}
              >
                About
              </a>
              <a
                href="#Portfolio"
                onClick={(e) => handleClick(e, 'Portfolio')}
                className={`link ${activeLink === 'Portfolio' ? 'text-blue' : ''}  px-5 py-2 border-black border-b-2`}
              >
                Portfolio
              </a>
              <a
                href="#Contact"
                onClick={(e) => handleClick(e, 'Contact')}
                className={`link ${activeLink === 'Contact' ? 'text-blue' : ''}  px-5 py-2`}
              >
                Contact
              </a>
            </div>
          )}
        </div>
        <div className="flex w-full">
          <div className="flex w-1/2 items-center justify-center">
          
          </div>
          <div className="flex w-1/2"></div>
        </div>


      </section>
      <section ref={aboutRef} id="About" className='h-[100vh] bg-lime-400'>
        <h1>About Section</h1>
      </section>
      <section ref={portfolioRef} id="Portfolio" className='h-[100vh] bg-lime-600'>
        <h1>Portfolio Section</h1>
      </section>
      <section ref={contactRef} id="Contact" className='h-[100vh] bg-lime-700'>
        <h1>Contact Section</h1>
      </section>
    </>
  );
};

export default HomePage;
