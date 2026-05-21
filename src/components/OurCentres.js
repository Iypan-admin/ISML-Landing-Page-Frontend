import React, { useRef, useState, useEffect } from 'react';
import './OurCentres.css';
import ce2 from '../assets/ce2.png';
import ce3 from '../assets/ce3.png';
import ce4 from '../assets/ce4.png';
import ce5 from '../assets/ce5.png';
// Importing additional images from assets if available, otherwise reuse
import c1 from '../assets/c1.jpeg';
import c2 from '../assets/c2.jpeg';
import c3 from '../assets/c3.jpeg';
import ismlLogo from '../assets/IsmlLogo.png';

const centres = [
  {
    id: 1,
    code: "ISMLTR",
    name: "ISML- Trichirappalli",
    location: "Tiruchirappalli-Tamil Nadu",
    isActive: true,
    address: "",
    image: ce2,
    courses: [],
    contact: "",
    description: "Established in March 2024, our inaugural branch is situated at 7TH CROSS STREET, THILLAI NAGAR. We pride ourselves on cultivating a student-friendly environment dedicated to delivering excellence in education. With a focus on personalized attention and top-tier instruction, our passionate team is committed to nurturing the academic and holistic growth of every individual. Our goal is to create a supportive and inspiring atmosphere where students are empowered to unleash their full potential through curiosity, critical thinking, and a love for learning.",
    buttonText: "Call for admission",
    mapLink: "https://g.co/kgs/zbnvndz"
  },
  {
    id: 8,
    code: "ISMLTJ",
    name: "ISML- Tanjore",
    location: "Tanjore-Tamil Nadu",
    isActive: true,
    address: "",
    image: ce2,
    courses: [],
    contact: "",
    description: "Our Tanjore center brings world-class language education to the historical city of Tanjore. We offer a range of modern language courses designed to meet the needs of students and professionals alike. With experienced faculty and a focus on communicative competence, we ensure our students gain the confidence to excel globally.",
    buttonText: "Call for admission",
    mapLink: "#"
  },
  {
    id: 2,
    code: "ISMLMD",
    name: "ISML- Madurai",
    location: "Madurai-Tamil Nadu",
    isActive: true,
    address: "",
    image: c1,
    courses: [],
    contact: "",
    description: "Our Madurai center brings world-class language education to the cultural capital of Tamil Nadu. We offer a range of modern language courses designed to meet the needs of students and professionals alike. With experienced faculty and a focus on communicative competence, we ensure our students gain the confidence to excel globally.",
    buttonText: "Call for admission",
    mapLink: "https://maps.app.goo.gl/Madurai"
  },
  {
    id: 3,
    code: "ISMLKK",
    name: "ISML- Karaikudi",
    location: "Karaikudi-Tamil Nadu",
    isActive: true,
    address: "",
    image: c2,
    courses: [],
    contact: "",
    description: "Located in the heart of Chettinad, our Karaikudi branch is dedicated to providing high-quality language training. We believe in empowering students through linguistic proficiency and cultural awareness, preparing them for diverse opportunities in the modern world.",
    buttonText: "Call for admission",
    mapLink: "https://maps.app.goo.gl/Karaikudi"
  },
  {
    id: 4,
    code: "ISMLAV",
    name: "ISML- Avinasi",
    location: "Avinasi-Tamil Nadu",
    isActive: true,
    address: "",
    image: c3,
    courses: [],
    contact: "",
    description: "Our Avinasi center serves as a hub for language enthusiasts in the region. We provide a supportive learning environment with modern facilities and expert guidance, helping students achieve their language learning goals effectively.",
    buttonText: "Call for admission",
    mapLink: "https://maps.app.goo.gl/Avinasi"
  },
  {
    id: 5,
    code: "ISMLVD",
    name: "ISML- Aruppukkottai",
    location: "Aruppukkottai-Tamil Nadu",
    isActive: false, 
    address: "",
    image: ce5,
    courses: [],
    contact: "",
    description: "Established in November 2024, our inaugural branch of Virudhunagar district is situated at 58/2, SBK College Rd, Vasantham Nagar. The centre offers a vibrant environment focused on academic excellence and personal growth. We provide personalized attention and exceptional instruction, fostering curiosity, critical thinking, and confidence in every student.",
    buttonText: "Call for admission",
    mapLink: "https://g.co/kgs/xWJVp77"
  },
  {
    id: 9,
    code: "ISMLCBE",
    name: "ISML- Coimbatore",
    location: "Coimbatore-Tamil Nadu",
    isActive: false,
    address: "",
    image: c1,
    courses: [],
    contact: "",
    description: "Our upcoming Coimbatore center will serve as a hub for language enthusiasts in the region. We provide a supportive learning environment with modern facilities and expert guidance, helping students achieve their language learning goals effectively.",
    buttonText: "Call for admission",
    mapLink: "#"
  },
  {
    id: 10,
    code: "ISMLPOL",
    name: "ISML- Pollachi",
    location: "Pollachi-Tamil Nadu",
    isActive: false,
    address: "",
    image: c2,
    courses: [],
    contact: "",
    description: "Expanding our reach to Pollachi, this center will offer top-tier language instruction and a student-friendly environment dedicated to delivering excellence in education.",
    buttonText: "Call for admission",
    mapLink: "#"
  },
  {
    id: 11,
    code: "ISMLPAL",
    name: "ISML- Pallavaram",
    location: "Pallavaram-Tamil Nadu",
    isActive: false,
    address: "",
    image: c3,
    courses: [],
    contact: "",
    description: "Our new center in Pallavaram is designed to provide high-quality language training, empowering students through linguistic proficiency and cultural awareness.",
    buttonText: "Call for admission",
    mapLink: "#"
  },
  {
    id: 12,
    code: "ISMLCHR",
    name: "ISML- Chromepet",
    location: "Chromepet-Tamil Nadu",
    isActive: false,
    address: "",
    image: ce3,
    courses: [],
    contact: "",
    description: "The Chromepet center will offer a dynamic and inclusive environment for learning, focusing on academic excellence and holistic development for all language learners.",
    buttonText: "Call for admission",
    mapLink: "#"
  },
  {
    id: 6,
    code: "ISMLCE",
    name: "ISML- Perumbakkam",
    location: "Perumbakkam-Tamil Nadu",
    isActive: false,
    address: "",
    image: ce3,
    courses: [],
    contact: "",
    description: "Established in November 2024, our Chengalpattu district (East Zone) branch is located at 13, Villa, Bscpl Bollineni Hillside Block-20c, Block, Bollineni Hillside Rd. Offering a dynamic and inclusive environment for learning. We focus on academic excellence and holistic development, providing personalized attention and high-quality instruction.",
    buttonText: "Call for admission",
    mapLink: "https://g.co/kgs/gyqRZsE"
  },
  {
    id: 7,
    code: "ISMLEL",
    name: "ISML- Eloor",
    location: "Eloor-Kerala",
    isActive: false,
    address: "",
    image: ce4,
    courses: [],
    contact: "",
    description: "Established in July 2024, our center franchise in situated at KJ tower, 2nd floor, pathalam, Eloor - 683501. Opening our new franchise center offers students an incredible opportunity to learn and explore modern languages in a dynamic and engaging environment. Our center is dedicated to providing students with the tools they need to master new languages.",
    buttonText: "Call for admission",
    mapLink: "https://g.co/kgs/1wpqEb2"
  }
];

const CentreBrandedImage = ({ name }) => {
  // Extract only the location name from "ISML- Location"
  const branchName = name.replace('ISML- ', '');
  
  return (
    <div className="branded-centre-image">
      <div className="branded-logo-container">
        <img src={ismlLogo} alt="ISML Logo" className="branded-logo" />
      </div>
      <div className="branded-branch-box">
        {branchName}
      </div>
    </div>
  );
};

function OurCentres() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('active'); // 'active' or 'inactive'
  const carouselRef = useRef(null);
  const autoScrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  
  // Use a map to store refs by center ID
  const extraFrameRefs = useRef({});

  // Initialize refs for all centers
  useEffect(() => {
    centres.forEach(centre => {
      if (!extraFrameRefs.current[centre.id]) {
        extraFrameRefs.current[centre.id] = React.createRef();
      }
    });
  }, []);

  const filteredCentres = centres.filter(c => filter === 'active' ? c.isActive : !c.isActive);

  // Auto-scroll logic
  useEffect(() => {
    if (isPaused) return;

    const scroll = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        // If reached the end, reset to start, else scroll right
        if (scrollLeft + clientWidth >= scrollWidth - 5) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    };

    autoScrollRef.current = setInterval(scroll, 3000);

    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, [isPaused, filter]);

  // Handle drag scroll
  let isDown = false;
  let startX;
  let scrollLeft;

  const handleMouseDown = (e) => {
    isDown = true;
    setIsPaused(true); // Pause auto-scroll on interaction
    carouselRef.current.classList.add('active');
    startX = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft = carouselRef.current.scrollLeft;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };
  const handleMouseUp = () => {
    isDown = false;
    carouselRef.current.classList.remove('active');
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
    // Resume auto-scroll after a delay
    setTimeout(() => setIsPaused(false), 5000);
  };

  const handleTouchStart = (e) => {
    isDown = true;
    setIsPaused(true);
    startX = e.touches[0].pageX - carouselRef.current.offsetLeft;
    scrollLeft = carouselRef.current.scrollLeft;
  };
  const handleTouchMove = (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };
  const handleTouchEnd = () => {
    isDown = false;
    setTimeout(() => setIsPaused(false), 5000);
  };

  const handleTileClick = (id) => {
    setSelected(id);
    if (extraFrameRefs.current[id] && extraFrameRefs.current[id].current) {
      extraFrameRefs.current[id].current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="centres-page-root">
      <div className="centres-header-section">
        <h1 className="centres-title">Our Learning Centers</h1>
        <div className="centres-nav-tabs">
          <button 
            className={`centres-nav-btn ${filter === 'active' ? 'active-tab' : ''}`}
            onClick={() => {
              setFilter('active');
              setSelected(null);
            }}
          >
            Active Centers
          </button>
          <button 
            className={`centres-nav-btn ${filter === 'inactive' ? 'inactive-tab' : ''}`}
            onClick={() => {
              setFilter('inactive');
              setSelected(null);
            }}
          >
            Inactive Centers
          </button>
        </div>
      </div>

      <div className="centres-carousel-frame">
        <div className="centres-bg-text">
          <span>INDIAN SCHOOL FOR MODERN LANGUAGES INDIAN SCHOOL FOR MODERN LANGUAGES INDIAN SCHOOL FOR MODERN LANGUAGES INDIAN SCHOOL FOR MODERN LANGUAGES INDIAN SCHOOL FOR MODERN LANGUAGES INDIAN SCHOOL FOR MODERN LANGUAGES</span>
        </div>
        <div
          className="centres-carousel"
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {filteredCentres.map((centre) => (
            <div
              key={centre.id}
              className={`centre-tile${selected === centre.id ? ' selected' : ''}`}
              onClick={() => handleTileClick(centre.id)}
            >
              <div className="centre-tile-outer">
                <div className="centre-tile-inner">
                  <div className="centre-tile-img-container">
                    <CentreBrandedImage name={centre.name} />
                  </div>
                </div>
                <div className="centre-tile-info">
                  <div className="centre-tile-info-default">
                    <div className="centre-tile-title">{centre.name}</div>
                    <div className={`status-badge ${centre.isActive ? 'active' : 'inactive'}`}>
                      {centre.isActive ? 'Active' : 'Inactive'}
                    </div>
                  </div>
                  <div className="centre-tile-info-hover">
                    <div><strong>Centre Code:</strong> {centre.code}</div>
                    <div><strong>Centre Name:</strong> {centre.name}</div>
                    <div className={`status-badge ${centre.isActive ? 'active' : 'inactive'}`}>
                      {centre.isActive ? 'Active' : 'Inactive'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="centres-extra-frames">
        {filteredCentres.map((centre) => (
          <div
            className="centre-extra-frame"
            key={centre.id}
            ref={extraFrameRefs.current[centre.id]}
          >
            <div className="centre-extra-frame-left">
                <div className="centre-extra-frame-image-container">
                    <CentreBrandedImage name={centre.name} />
                </div>
                <p className="centre-code"><strong>Centre Code:</strong> {centre.code}</p>
                <p className="centre-name"><strong>Centre Name:</strong> {centre.name}</p>
                <div className={`status-badge ${centre.isActive ? 'active' : 'inactive'}`}>
                  {centre.isActive ? 'Active' : 'Inactive'}
                </div>
            </div>
            <div className="centre-extra-frame-right">
                <h2>{centre.location}</h2>
                <p>{centre.description}</p>
                <div className="centre-extra-frame-buttons">
                    <a 
                      href={centre.mapLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="isml-program-btn visit-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Visit
                    </a>
                    {centre.buttonText && (
                        <button 
                          className="isml-program-btn"
                          onClick={() => window.location.href = 'tel:+917338881781'}
                        >
                          {centre.buttonText}
                        </button>
                    )}
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurCentres;