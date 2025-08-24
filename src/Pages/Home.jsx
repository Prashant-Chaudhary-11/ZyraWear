import { useEffect, useState } from 'react';
import { Why } from '../Pages/Why';
import { Experience } from './Experience';
import { Material } from './Material';
import { Top } from './Top';

const bgImages = [
  'welcome.jpg',
  'welcome_cloths.jpg',
  'welcome_girl.jpg'
];
export const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bgImages.length);
    }, 6000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  const currentBg = bgImages[currentIndex];

  return (
    <div>
      <div
        className='welcome d-flex flex-column align-items-center justify-content-start text-center px-5 pb-5'
        style={{ backgroundImage: `url(${currentBg})` }}
      >
        <h1 className='mainHeading'>
          Redefine Your Wardrobe<br /> with Effortless Style
        </h1>
        <h4 className='secondaryHeading'>
          Step into the world of ZyraWear<br /> — where fashion meets comfort, and every outfit tells a story.
        </h4>
      </div>
      <Why />
      <Experience/>
      <Top/>
      <Material/>
    </div>
  );
};
