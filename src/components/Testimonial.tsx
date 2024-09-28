

// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { LeftOutlined, RightOutlined } from '@ant-design/icons';

// interface Testimonial {
//   id: number;
//   name: string;
//   role: string;
//   quote: string;
//   rating: number;
//   image: string;
// }

// const testimonials: Testimonial[] = [
//   {
//     id: 1,
//     name: 'John Doe',
//     role: 'Professional Footballer',
//     quote: 'The facilities here are amazing, and booking them has never been easier!',
//     rating: 5,
//     image: '/assets/john-doe.jpg',
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     role: 'Tennis Coach',
//     quote: 'Excellent courts and smooth booking experience. I highly recommend this platform!',
//     rating: 4,
//     image: '/assets/jane-smith.jpg',
//   },
//   {
//     id: 3,
//     name: 'Mike Johnson',
//     role: 'Amateur Swimmer',
//     quote: 'I love the convenience of booking pools for my training sessions!',
//     rating: 5,
//     image: '/assets/mike-johnson.jpg',
//   },
//   {
//     id: 4,
//     name: 'Sara Lee',
//     role: 'Yoga Instructor',
//     quote: 'Amazing yoga studios and friendly environment!',
//     rating: 5,
//     image: '/assets/sara-lee.jpg',
//   },
// ];

// const TestimonialSection: React.FC = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const testimonialCount = testimonials.length;

//   // Function to auto-scroll
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialCount);
//     }, 3000);

//     return () => clearInterval(intervalId); // Clean up on component unmount
//   }, [testimonialCount]);

//   // Function to go to the previous testimonial
//   const prevTestimonial = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? testimonialCount - 1 : prevIndex - 1
//     );
//   };

//   // Function to go to the next testimonial
//   const nextTestimonial = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialCount);
//   };

//   return (
//     <section className="py-16 bg-gray-100">
//       <div className="container mx-auto relative">
//         <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>

//         {/* Testimonial Container */}
//         <div className="relative overflow-hidden flex justify-center items-center">
//           {/* Left Arrow */}
//           <button
//             className="absolute left-0 bg-gray-800 text-white p-2 rounded-full shadow-lg"
//             onClick={prevTestimonial}
//           >
//             <LeftOutlined />
//           </button>

//           {/* Testimonial Cards */}
//           <motion.div
//             className="flex"
//             key={testimonials[currentIndex].id}
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3, ease: 'easeInOut' }}
//             onMouseEnter={() => clearInterval(window.autoScroll)}
//             onMouseLeave={() => (window.autoScroll = setInterval(nextTestimonial, 3000))}
//           >
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={testimonial.id}
//                 className={`bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center transition-transform ${
//                   index === currentIndex ? 'block' : 'hidden'
//                 }`}
//               >
//                 <motion.img
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   className="w-24 h-24 rounded-full mb-4"
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.4 }}
//                 />
//                 <p className="italic text-gray-700 mb-4">"{testimonial.quote}"</p>
//                 <h4 className="text-lg font-bold">{testimonial.name}</h4>
//                 <p className="text-sm text-gray-500">{testimonial.role}</p>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Right Arrow */}
//           <button
//             className="absolute right-0 bg-gray-800 text-white p-2 rounded-full shadow-lg"
//             onClick={nextTestimonial}
//           >
//             <RightOutlined />
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialSection;














import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { StarFilled } from '@ant-design/icons';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Professional Footballer',
    quote: 'The facilities here are amazing, and booking them has never been easier!',
    rating: 5,
    image: '/assets/john-doe.jpg', // Replace with actual image path
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Tennis Coach',
    quote: 'Excellent courts and smooth booking experience. I highly recommend this platform!',
    rating: 4,
    image: '/assets/jane-smith.jpg',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Amateur Swimmer',
    quote: 'I love the convenience of booking pools for my training sessions!',
    rating: 5,
    image: '/assets/mike-johnson.jpg',
  },
];

const TestimonialSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const controls = useAnimation();

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  // Automatically rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  // Animation for fading in the testimonial
  const testimonialVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  // Stop auto-slide on hover and resume after
  const pause = () => clearInterval(window.intervalId);
  const resume = () => (window.intervalId = setInterval(nextTestimonial, 5000));

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Users Say</h2>

        {/* Displaying current testimonial */}
        <motion.div
          className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg"
          onMouseEnter={() => pause()}
          onMouseLeave={() => resume()}
          key={testimonials[current].id}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={testimonialVariants}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={testimonials[current].image}
            alt={testimonials[current].name}
            className="w-24 h-24 rounded-full mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          />
          <p className="italic text-gray-700 mb-4">"{testimonials[current].quote}"</p>
          
          {/* Displaying star rating */}
          <div className="flex justify-center mb-4">
            {Array(testimonials[current].rating).fill(0).map((_, idx) => (
              <StarFilled key={idx} className="text-yellow-500" />
            ))}
          </div>

          <h4 className="text-lg font-bold">{testimonials[current].name}</h4>
          <p className="text-sm text-gray-500">{testimonials[current].role}</p>
        </motion.div>

        {/* Controls to switch testimonials manually */}
        <div className="mt-8 flex justify-center gap-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${index === current ? 'bg-blue-600' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

