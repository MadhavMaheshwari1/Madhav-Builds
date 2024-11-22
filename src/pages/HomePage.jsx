import React, { useRef, useEffect, useState } from 'react';
import MyImage1 from "../assets/Image.png";
import MyImage2 from "../assets/Me.jpg";
import displacementImage from "../assets/DisplacementImage.jpg";
import hoverEffect from 'hover-effect';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const HomePage = () => {
  const hoverContainerRef = useRef(null);
  let animationInstance = useRef(null);

  useEffect(() => {
    return () => {
      if (animationInstance.current) {
        animationInstance.current.dispose();
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (!animationInstance.current) {
      animationInstance.current = new hoverEffect({
        parent: hoverContainerRef.current,
        intensity: 0.8,
        image1: MyImage1,
        image2: MyImage2,
        displacementImage: displacementImage,
      });
    }
  };

  const handleMouseLeave = () => {
    if (animationInstance.current) {
      console.log(animationInstance.current);

      animationInstance.current.dispose();
      animationInstance.current = null;
    }
  };

  return (
    <div className="relative h-[100vh] max-w-[1850px] mx-auto py-8">
      <div className="flex flex-col max-w-[450px]">
        <div
          className="card__item"
          ref={hoverContainerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            backgroundImage: `url(${MyImage1})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '450px',
          }}
        >
        </div>
        <div className="flex flex-col justify-between h-[350px] w-full">
          <p className='text-2xl mt-6 leading-9 max-w-[450px]'>Interactive developer striving to craft memorable experiences on the digital canvas. Front-end addicted, Fullstack capable. Currently located in Dehradun.</p>
          <div className="flex space-x-4 cursor-pointer">
            <LinkedInIcon fontSize='large' />
            <GitHubIcon fontSize='large' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
