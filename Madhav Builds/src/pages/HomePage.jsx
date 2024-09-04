import React, { useRef, useState, useEffect } from 'react';
import { FaBars } from "react-icons/fa6";
import heroImage1 from '../assets/hero-element-3.png';
import heroImage2 from '../assets/hero-element-2.png';
import heroImage3 from '../assets/hero-element-1.png';
import ShivJi from '../assets/shivJi.png'

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
      <section ref={homeRef} id="Home" className='min-h-[100vh] h-auto relative bgImage w-full'>
        <img src={heroImage1} className="hidden xl:block xl:w-[60px] xl:h-[60px] hero__element hero__element--1" alt="" />
        <img src={heroImage2} className="hidden xl:block xl:h-[70px] hero__element hero__element--2" alt="" />
        <img src={heroImage3} className="hidden xl:block hero__element hero__element--3" alt="" />
        {/* <img src={heroImage} className="hidden xl:block xl:w-[60px] xl:h-[60px] hero__element hero__element--3 filter grayscale-[10%]" style={{ filter: 'grayscale(50%)' }}  alt="" />
        <img src={heroImage} className="hidden xl:block xl:w-[60px] xl:h-[60px] hero__element hero__element--3 filter grayscale-[10%]" style={{ filter: 'grayscale(50%)' }}  alt="" /> */}
        <div className={`md:px-20 px-8 flex flex-col gap-5 w-full justify-between h-auto py-5 items-center ${isSticky ? 'navbar--sticky' : ''}`}>
          <div className='flex justify-between gap-8 text-white md:text-xl font-bold w-full'>
            <h1 className='text-white text-xl md:text-5xl'>mmdev</h1>
            <div className="xl:flex hidden gap-20 items-center">
              <a
                href="#Home"
                onClick={(e) => handleClick(e, 'Home')}
                className={`link md:text-3xl ${activeLink === 'Home' ? 'text-blue' : ''}`}
              >
                Home
              </a>
              <a
                href="#About"
                onClick={(e) => handleClick(e, 'About')}
                className={`link md:text-3xl ${activeLink === 'About' ? 'text-blue' : ''}`}
              >
                About
              </a>
              <a
                href="#Portfolio"
                onClick={(e) => handleClick(e, 'Portfolio')}
                className={`link md:text-3xl ${activeLink === 'Portfolio' ? 'text-blue' : ''}`}
              >
                Portfolio
              </a>
              <a
                href="#Contact"
                onClick={(e) => handleClick(e, 'Contact')}
                className={`link md:text-3xl ${activeLink === 'Contact' ? 'text-blue' : ''}`}
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
        <div className="md:px-20 px-8 flex xl:flex-row flex-col w-full min-h-[100vh] h-auto" >
          <div className="flex flex-col xl:w-1/2 w-full justify-center md:text-left text-center md:items-start items-center text-white xl:h-[700px] md:h-[500px] h-[400px]">
            <h1 className='md:text-4xl sm:text-2xl text-xl font-semibold mb-4 xl:mt-0 mt-8'>Hello,I&apos;m</h1>
            <div className='md:text-7xl sm:text-4xl text-2xl font-bold mb-8'>Madhav <span style={{ color: 'var(--text-blue)' }}>Maheshwari</span></div>
            <div className='md:text-4xl sm:text-2xl text-xl font-semibold mb-8'>A Passionate Frontend React Developer</div>
            <div className='flex w-full md:justify-between justify-center gap-4'>
              <a className="md:py-3 md:px-6 px-3 py-1 rounded-md md:text-2xl sm:text-lg text-md" style={{ backgroundColor: 'var(--bg-blue)' }} href="#Contact"
                onClick={(e) => handleClick(e, 'Contact')} >HIRE ME</a>
              <a className="md:text-2xl sm:text-lg text-md flex items-center mx-4" href="#Portfolio"
                onClick={(e) => handleClick(e, 'Portfolio')}>VIEW MY PORTFOLIO</a>
            </div>
          </div>
          <div className="flex xl:w-1/2 w-full"><img src={ShivJi} className='justify-center border-2 border-white w-full blob xl:h-[750px] mb-12 md:h-[500px] h-[400px] object-cover' alt="" /></div>
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
