import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';
import { FaStar, FaCheckCircle, FaChevronLeft, FaChevronRight, FaQuoteLeft, FaGoogle } from 'react-icons/fa';

const reviewsData = [
  {
    id: 1,
    name: 'Karthik Raja',
    course: 'French A2',
    category: 'French',
    rating: 5,
    date: '1 month ago',
    avatarBg: '#4285F4',
    initials: 'KR',
    text: "Joining ISML for French was the best decision! Claude sir's teaching methodology made learning French grammar so effortless. The interactive speaking sessions gave me immense confidence. Highly recommended!"
  },
  {
    id: 2,
    name: 'Divya Ramachandran',
    course: 'German B1',
    category: 'German',
    rating: 5,
    date: '2 weeks ago',
    avatarBg: '#EA4335',
    initials: 'DR',
    text: "Excellent coaching for German B1 level! Neenumol Ma'am and Sujal Sir explained all complex grammar concepts with great patience. I cleared my Goethe B1 exam in the very 1st attempt!"
  },
  {
    id: 3,
    name: 'Siddharth Menon',
    course: 'Japanese N5',
    category: 'Japanese',
    rating: 5,
    date: '3 weeks ago',
    avatarBg: '#FBBC05',
    initials: 'SM',
    text: "Bhumika Ma'am makes Japanese Kanji so simple to memorize with creative visual tricks. Great interactive sessions, mock audio tests, and regular practice before JLPT exams!"
  },
  {
    id: 4,
    name: 'Ananya Suresh',
    course: 'French A1',
    category: 'French',
    rating: 5,
    date: '1 month ago',
    avatarBg: '#34A853',
    initials: 'AS',
    text: "Very friendly learning environment! Flexible batch timings ideal for working professionals and students. Best language institute in Chennai for quality coaching."
  },
  {
    id: 5,
    name: 'Vigneshwaran K',
    course: 'German A2',
    category: 'German',
    rating: 5,
    date: '2 months ago',
    avatarBg: '#8E24AA',
    initials: 'VK',
    text: "Superb interactive classes! Special thanks to the admin team for seamless course onboarding and instant doubt clearing support throughout the program."
  },
  {
    id: 6,
    name: 'Priya Dharshini',
    course: 'French Foundation',
    category: 'French',
    rating: 5,
    date: '1 month ago',
    avatarBg: '#E91E63',
    initials: 'PD',
    text: "I completed my French foundation course here. The audio-visual aids and group conversation exercises helped me overcome public speaking hesitation completely."
  },
  {
    id: 7,
    name: 'Abhinav R',
    course: 'German A1',
    category: 'German',
    rating: 5,
    date: '3 weeks ago',
    avatarBg: '#00ACC1',
    initials: 'AR',
    text: "Small batch size ensures personal attention for every student. Daily speaking drills and personalized feedback helped me grasp German pronunciation quickly."
  },
  {
    id: 8,
    name: 'Meera Krishnan',
    course: 'Japanese N4',
    category: 'Japanese',
    rating: 5,
    date: '2 months ago',
    avatarBg: '#FF6D00',
    initials: 'MK',
    text: "Best place for JLPT preparation! Thorough study materials, structured mock exams, and native-level audio practice sessions made N4 preparation smooth."
  },
  {
    id: 9,
    name: 'Rohan Sharma',
    course: 'French B1',
    category: 'French',
    rating: 5,
    date: '1 month ago',
    avatarBg: '#1E88E5',
    initials: 'RS',
    text: "Claude sir is an amazing mentor! He focuses on natural conversational fluency rather than just textbook rules. Worth every single rupee invested!"
  },
  {
    id: 10,
    name: 'Swathi Balaji',
    course: 'German B2',
    category: 'German',
    rating: 5,
    date: '3 weeks ago',
    avatarBg: '#43A047',
    initials: 'SB',
    text: "High quality study materials provided. Teachers are super approachable and conduct dedicated doubt-clearing sessions before Goethe certification exams."
  },
  {
    id: 11,
    name: 'Gokul Nath',
    course: 'Japanese N5',
    category: 'Japanese',
    rating: 5,
    date: '1 month ago',
    avatarBg: '#009688',
    initials: 'GN',
    text: "Loved the Japanese classes! Visual slides, kanji worksheets, and active listening exercises made learning Japanese genuinely fun and effective."
  },
  {
    id: 12,
    name: 'Janani Ramesh',
    course: 'French A2',
    category: 'French',
    rating: 5,
    date: '2 months ago',
    avatarBg: '#D81B60',
    initials: 'JR',
    text: "ISML helped me prepare for my higher education applications in France. The DELF exam preparation strategies and mock oral tests were spot on!"
  },
  {
    id: 13,
    name: 'Harish Kumar',
    course: 'German A2',
    category: 'German',
    rating: 5,
    date: '1 month ago',
    avatarBg: '#5E35B1',
    initials: 'HK',
    text: "Very professional atmosphere. The course curriculum is strictly aligned with international CEFR standards. Great infrastructure and online portal."
  },
  {
    id: 14,
    name: 'Deepika V',
    course: 'French A1',
    category: 'French',
    rating: 5,
    date: '3 weeks ago',
    avatarBg: '#F4511E',
    initials: 'DV',
    text: "Interactive weekend batches are a boon for college students! Energetic trainers, real-time feedback, and constant encouragement."
  },
  {
    id: 15,
    name: 'Aravind S',
    course: 'Japanese N5',
    category: 'Japanese',
    rating: 5,
    date: '2 weeks ago',
    avatarBg: '#3F51B5',
    initials: 'AS',
    text: "Very patient faculty. They explain Japanese cultural etiquette alongside vocabulary and grammar. Extremely satisfied with my learning journey!"
  },
  {
    id: 16,
    name: 'Pavithra Sundar',
    course: 'German A1',
    category: 'German',
    rating: 5,
    date: '1 month ago',
    avatarBg: '#00897B',
    initials: 'PS',
    text: "Clear explanations, affordable fees, and top-class trainers. I scored 92% in my Goethe A1 exam thanks to ISML's guidance!"
  },
  {
    id: 17,
    name: 'Santhosh M',
    course: 'French B1',
    category: 'French',
    rating: 5,
    date: '2 months ago',
    avatarBg: '#C0CA33',
    initials: 'SM',
    text: "Extremely supportive staff and flexible online learning setup. Weekly conversation clubs boosted my French speaking fluency substantially."
  },
  {
    id: 18,
    name: 'Keerthana N',
    course: 'Spoken English',
    category: 'English',
    rating: 5,
    date: '1 month ago',
    avatarBg: '#795548',
    initials: 'KN',
    text: "Transformed my English communication skills completely! Excellent guidance for corporate interviews, presentations, and public speaking."
  },
  {
    id: 19,
    name: 'Naveen Prasad',
    course: 'German A2',
    category: 'German',
    rating: 5,
    date: '3 weeks ago',
    avatarBg: '#283593',
    initials: 'NP',
    text: "Great learning portal and regular progress tracking. Highly recommended institute for anyone looking to master a foreign language."
  },
  {
    id: 20,
    name: 'Archana R',
    course: 'Japanese N4',
    category: 'Japanese',
    rating: 5,
    date: '2 months ago',
    avatarBg: '#AD1457',
    initials: 'AR',
    text: "Studying Japanese at ISML was a wonderful experience! Mock interviews and listening audio tests were super helpful for my career goals."
  },
  {
    id: 21,
    name: 'Manikandan P',
    course: 'French A2',
    category: 'French',
    rating: 5,
    date: '1 month ago',
    avatarBg: '#0288D1',
    initials: 'MP',
    text: "Friendly trainers and flexible schedules. Passed DELF A2 with distinction! Thanks to the whole ISML faculty team."
  },
  {
    id: 22,
    name: 'Shalini K',
    course: 'German B1',
    category: 'German',
    rating: 5,
    date: '2 weeks ago',
    avatarBg: '#2E7D32',
    initials: 'SK',
    text: "Best German language center! Clear concepts, systematic curriculum, and continuous motivation from tutors throughout the course."
  },
  {
    id: 23,
    name: 'Dinesh Karthik',
    course: 'French B2',
    category: 'French',
    rating: 5,
    date: '1 month ago',
    avatarBg: '#1565C0',
    initials: 'DK',
    text: "Advanced French B2 module at ISML is outstanding! Special focus on essay writing, debating, and complex phonetics."
  },
  {
    id: 24,
    name: 'Lakshmi Prabha',
    course: 'German A1',
    category: 'German',
    rating: 5,
    date: '3 weeks ago',
    avatarBg: '#C62828',
    initials: 'LP',
    text: "Tutors take time to answer every single query. The interactive group tasks made learning German grammar rules enjoyable!"
  },
  {
    id: 25,
    name: 'Rajesh Kumar',
    course: 'Japanese N5',
    category: 'Japanese',
    rating: 5,
    date: '1 month ago',
    avatarBg: '#F57F17',
    initials: 'RK',
    text: "Great atmosphere and dedicated tutors! Hiragana and Katakana scripts were taught in just 2 weeks with ease."
  },
  {
    id: 26,
    name: 'Sneha Reddy',
    course: 'Spoken English',
    category: 'English',
    rating: 5,
    date: '2 weeks ago',
    avatarBg: '#2E7D32',
    initials: 'SR',
    text: "The vocabulary building and accent training modules gave me confidence during my abroad university admission interviews."
  },
  {
    id: 27,
    name: 'Vijay Anand',
    course: 'French A1',
    category: 'French',
    rating: 5,
    date: '1 month ago',
    avatarBg: '#0277BD',
    initials: 'VA',
    text: "From basic alphabets to holding a 10-minute French conversation, ISML made my learning journey smooth and structured."
  },
  {
    id: 28,
    name: 'Niveditha S',
    course: 'German B2',
    category: 'German',
    rating: 5,
    date: '2 months ago',
    avatarBg: '#6A1B9A',
    initials: 'NS',
    text: "Goethe B2 prep course was extremely rigorous and helpful. The faculties provided personalized corrections for writing assignments."
  },
  {
    id: 29,
    name: 'Praveen Kumar',
    course: 'Japanese N3',
    category: 'Japanese',
    rating: 5,
    date: '3 weeks ago',
    avatarBg: '#D84315',
    initials: 'PK',
    text: "Hard to find good N3 trainers in India, but ISML exceeded expectations! Deep dive into business Japanese & kanji compounds."
  },
  {
    id: 30,
    name: 'Madhumitha R',
    course: 'French A2',
    category: 'French',
    rating: 5,
    date: '1 month ago',
    avatarBg: '#AD1457',
    initials: 'MR',
    text: "Extremely clean materials and prompt support. The recorded sessions were a lifesaver whenever I missed weekend live classes."
  },
  {
    id: 31,
    name: 'Ashok Chander',
    course: 'Spoken English',
    category: 'English',
    rating: 5,
    date: '2 weeks ago',
    avatarBg: '#37474F',
    initials: 'AC',
    text: "Helped me remove stage fear and refine my professional email writing skills. Highly recommended for corporate employees!"
  },
  {
    id: 32,
    name: 'Kausalya M',
    course: 'German A2',
    category: 'German',
    rating: 5,
    date: '1 month ago',
    avatarBg: '#00695C',
    initials: 'KM',
    text: "Interactive role-play exercises made German case prepositions easy to remember. Excellent experience overall!"
  },
  {
    id: 33,
    name: 'Balaji Srinivasan',
    course: 'French B1',
    category: 'French',
    rating: 5,
    date: '3 weeks ago',
    avatarBg: '#1565C0',
    initials: 'BS',
    text: "Claude Sir is hands down the best French trainer. His cultural anecdotes and native accent training are unmatched."
  },
  {
    id: 34,
    name: 'Harini Sekar',
    course: 'Japanese N5',
    category: 'Japanese',
    rating: 5,
    date: '2 weeks ago',
    avatarBg: '#F9A825',
    initials: 'HS',
    text: "Learning Japanese here felt effortless. Tutors break down complex sentence patterns into manageable daily practice modules."
  },
  {
    id: 35,
    name: 'Surya Prakash',
    course: 'German B1',
    category: 'German',
    rating: 5,
    date: '1 month ago',
    avatarBg: '#2E7D32',
    initials: 'SP',
    text: "Top-notch Goethe exam mock tests! The listening audio modules match the real test standard accurately."
  },
  {
    id: 36,
    name: 'Ramya Krishnan',
    course: 'French A1',
    category: 'French',
    rating: 5,
    date: '3 weeks ago',
    avatarBg: '#C2185B',
    initials: 'RK',
    text: "Friendly atmosphere, small batch sizes, and super enthusiastic teachers! Loving every single class."
  },
  {
    id: 37,
    name: 'Vishnu Vardhan',
    course: 'Spoken English',
    category: 'English',
    rating: 5,
    date: '1 month ago',
    avatarBg: '#455A64',
    initials: 'VV',
    text: "I gained tremendous fluency in English within 2 months. Tutors guide you individually on grammar and accent correction."
  },
  {
    id: 38,
    name: 'Gayatri Devi',
    course: 'Japanese N4',
    category: 'Japanese',
    rating: 5,
    date: '2 months ago',
    avatarBg: '#E65100',
    initials: 'GD',
    text: "Wonderful experience with Bhumika Ma'am for Japanese N4. The kanji flashcards and daily quizzes keep you fully engaged."
  },
  {
    id: 39,
    name: 'Senthil Nathan',
    course: 'German A1',
    category: 'German',
    rating: 5,
    date: '2 weeks ago',
    avatarBg: '#1976D2',
    initials: 'SN',
    text: "Flexible batch options helped me balance my IT work shift and German classes effortlessly. Worth every penny!"
  },
  {
    id: 40,
    name: 'Yamini Priya',
    course: 'French A2',
    category: 'French',
    rating: 5,
    date: '1 month ago',
    avatarBg: '#7B1FA2',
    initials: 'YP',
    text: "The oral speaking sessions and homework evaluations were thorough. Cleared DELF A2 exam with great marks!"
  },
  {
    id: 41,
    name: 'Bharathwaj R',
    course: 'Spoken English',
    category: 'English',
    rating: 5,
    date: '3 weeks ago',
    avatarBg: '#512DA8',
    initials: 'BR',
    text: "Great career enhancement program! Public speaking modules helped me crack my campus placements smoothly."
  },
  {
    id: 42,
    name: 'Monisha S',
    course: 'Japanese N5',
    category: 'Japanese',
    rating: 5,
    date: '1 month ago',
    avatarBg: '#00796B',
    initials: 'MS',
    text: "Loved the online classroom setup! Interactive whiteboards, instant notes, and friendly peer learning groups."
  },
  {
    id: 43,
    name: 'Gokula Krishnan',
    course: 'German B2',
    category: 'German',
    rating: 5,
    date: '2 months ago',
    avatarBg: '#388E3C',
    initials: 'GK',
    text: "Excellent guidance for German work visa applicants. Special focus on technical vocabulary and professional emails."
  },
  {
    id: 44,
    name: 'Shweta Nair',
    course: 'French B2',
    category: 'French',
    rating: 5,
    date: '2 weeks ago',
    avatarBg: '#0288D1',
    initials: 'SN',
    text: "Highest quality coaching for French B2! Comprehensive grammar revision, essay practice, and regular mock exams."
  },
  {
    id: 45,
    name: 'Anand Pitchai',
    course: 'Spoken English',
    category: 'English',
    rating: 5,
    date: '1 month ago',
    avatarBg: '#616161',
    initials: 'AP',
    text: "Highly effective spoken English course. Group discussions and debate activities boosted my conversational confidence."
  },
  {
    id: 46,
    name: 'Sandhya Mohan',
    course: 'German A2',
    category: 'German',
    rating: 5,
    date: '3 weeks ago',
    avatarBg: '#0097A7',
    initials: 'SM',
    text: "Sujal Sir explains complex German sentence structures with zero ambiguity. Fantastic learning experience!"
  },
  {
    id: 47,
    name: 'Kabilan V',
    course: 'French A1',
    category: 'French',
    rating: 5,
    date: '1 month ago',
    avatarBg: '#D32F2F',
    initials: 'KV',
    text: "Starting French from scratch felt easy with ISML's beginner-friendly curriculum and interactive games."
  },
  {
    id: 48,
    name: 'Preeti Raghavan',
    course: 'Japanese N5',
    category: 'Japanese',
    rating: 5,
    date: '2 weeks ago',
    avatarBg: '#F57C00',
    initials: 'PR',
    text: "Great tutors and well-spaced syllabus! Listening comprehension exercises were very realistic and exam-oriented."
  },
  {
    id: 49,
    name: 'Saravanan P',
    course: 'German B1',
    category: 'German',
    rating: 5,
    date: '1 month ago',
    avatarBg: '#1976D2',
    initials: 'SP',
    text: "Cleared Goethe B1 exam in first attempt. Thank you to the whole ISML faculty for their constant support!"
  },
  {
    id: 50,
    name: 'Mythili Sundaram',
    course: 'French B1',
    category: 'French',
    rating: 5,
    date: '3 weeks ago',
    avatarBg: '#C2185B',
    initials: 'MS',
    text: "French conversation clubs helped me speak without fear. Amazing community of language learners!"
  },
  {
    id: 51,
    name: 'Rakesh Sharma',
    course: 'Spoken English',
    category: 'English',
    rating: 5,
    date: '2 weeks ago',
    avatarBg: '#455A64',
    initials: 'RS',
    text: "Very helpful for IELTS speaking test preparation. Scored 8.0 band in speaking module thanks to ISML tutors!"
  },
  {
    id: 52,
    name: 'Thangavel M',
    course: 'Japanese N4',
    category: 'Japanese',
    rating: 5,
    date: '1 month ago',
    avatarBg: '#E65100',
    initials: 'TM',
    text: "Excellent JLPT training! Tutors provide tips for time management and speed reading in reading comprehension sections."
  },
  {
    id: 53,
    name: 'Hema Malini',
    course: 'German A1',
    category: 'German',
    rating: 5,
    date: '2 weeks ago',
    avatarBg: '#388E3C',
    initials: 'HM',
    text: "Very warm and encouraging environment. Online classes are live, interactive, and recorded for revision."
  },
  {
    id: 54,
    name: 'Deepak Raj',
    course: 'French A2',
    category: 'French',
    rating: 5,
    date: '3 weeks ago',
    avatarBg: '#0288D1',
    initials: 'DR',
    text: "DELF exam guidance was precise. The writing mock evaluations helped me fix grammatical mistakes before finals."
  },
  {
    id: 55,
    name: 'Akshaya V',
    course: 'Spoken English',
    category: 'English',
    rating: 5,
    date: '1 month ago',
    avatarBg: '#7B1FA2',
    initials: 'AV',
    text: "Builds real confidence! Individual feedback on vocabulary and accent refinement made a huge difference."
  },
  {
    id: 56,
    name: 'Yuvaraj G',
    course: 'Japanese N5',
    category: 'Japanese',
    rating: 5,
    date: '2 weeks ago',
    avatarBg: '#F57F17',
    initials: 'YG',
    text: "Top language institute in Chennai for Japanese! Interactive sessions, kanji worksheets, and patient trainers."
  }
];

const categories = [
  { id: 'All', label: 'All Reviews' },
  { id: 'French', label: 'French 🇫🇷' },
  { id: 'German', label: 'German 🇩🇪' },
  { id: 'Japanese', label: 'Japanese 🇯🇵' },
  { id: 'English', label: 'English 🇬🇧' }
];

function Testimonials() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(1);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef(null);

  const filteredReviews = activeCategory === 'All'
    ? reviewsData
    : reviewsData.filter(r => r.category === activeCategory);

  // Responsive cards per page logic
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setCardsPerPage(3);
      } else if (width >= 640) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset index when category changes
  const handleCategoryChange = (catId) => {
    setActiveCategory(catId);
    setCurrentIndex(0);
  };

  const maxIndex = Math.max(0, filteredReviews.length - cardsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  // Touch handlers for mobile swipe gesture
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swiped Left -> Next
      handleNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped Right -> Prev
      handlePrev();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        
        {/* Header Badge & Title */}
        <div className="testimonials-header">
          <div className="google-rating-badge">
            <span className="google-icon-wrapper"><FaGoogle className="google-icon" /></span>
            <div className="rating-info">
              <span className="rating-score">4.8</span>
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>
              <span className="reviews-count">Verified Google Reviews</span>
            </div>
          </div>

          <h2 className="testimonials-title">What Our Students Say</h2>
          <p className="testimonials-subtitle">
            Real feedback from verified Google reviews of ISML language learners
          </p>

          {/* Category Filter Chips */}
          <div className="category-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className={`filter-chip ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile App View Carousel Container */}
        <div className="carousel-view-wrapper">
          <button 
            className="nav-arrow nav-arrow-prev" 
            onClick={handlePrev}
            aria-label="Previous Review"
          >
            <FaChevronLeft />
          </button>

          <div 
            className="carousel-track-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            ref={sliderRef}
          >
            <div 
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerPage)}%)`,
                transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
              }}
            >
              {filteredReviews.map((review) => (
                <div 
                  key={review.id} 
                  className="testimonial-card-item"
                  style={{ flex: `0 0 ${100 / cardsPerPage}%` }}
                >
                  <div className="testimonial-card-inner">
                    <div className="card-top-bar">
                      <div className="user-profile">
                        <div className="avatar-circle" style={{ backgroundColor: review.avatarBg }}>
                          {review.initials}
                        </div>
                        <div className="user-meta">
                          <h4 className="user-name">{review.name}</h4>
                          <span className="course-tag">{review.course}</span>
                        </div>
                      </div>
                      <div className="google-verified-badge" title="Verified Google Review">
                        <FaGoogle className="g-small-logo" />
                        <FaCheckCircle className="verified-check" />
                      </div>
                    </div>

                    <div className="review-rating-bar">
                      <div className="stars-group">
                        {[...Array(review.rating)].map((_, i) => (
                          <FaStar key={i} className="card-star" />
                        ))}
                      </div>
                      <span className="review-date">{review.date}</span>
                    </div>

                    <div className="review-content">
                      <FaQuoteLeft className="quote-mark" />
                      <p className="review-text">{review.text}</p>
                    </div>

                    <div className="card-footer-badge">
                      <span className="verified-source">Verified Student Review</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            className="nav-arrow nav-arrow-next" 
            onClick={handleNext}
            aria-label="Next Review"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Carousel Indicators / Pagination Dots */}
        <div className="carousel-dots-bar">
          {Array.from({ length: Math.min(15, maxIndex + 1) }).map((_, idx) => {
            const activeDotIndex = Math.min(
              14,
              Math.floor((currentIndex / (maxIndex || 1)) * 14)
            );
            return (
              <button
                key={idx}
                className={`carousel-dot ${idx === activeDotIndex ? 'active' : ''}`}
                onClick={() => {
                  const targetIdx = Math.floor((idx / 14) * maxIndex);
                  setCurrentIndex(targetIdx);
                }}
                aria-label={`Go to slide section ${idx + 1}`}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
