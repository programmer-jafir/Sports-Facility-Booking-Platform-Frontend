import React from 'react';
import { motion } from 'framer-motion'; // Framer Motion for animation

interface Facility {
  id: number;
  name: string;
  description: string;
  image: string;
}

const facilities: Facility[] = [
  {
    id: 1,
    name: 'Soccer Field',
    description: 'State-of-the-art field with artificial turf, perfect for both practice and competitive matches.',
    image: '/assets/soccer-field.jpg', // Replace with actual image path
  },
  {
    id: 2,
    name: 'Tennis Court',
    description: 'High-quality tennis courts with night lighting, ideal for players of all skill levels.',
    image: '/assets/tennis-court.jpg',
  },
  {
    id: 3,
    name: 'Swimming Pool',
    description: 'Olympic-sized swimming pool with temperature control and professional lifeguard services.',
    image: '/assets/swimming-pool.jpg',
  },
];

const FeaturedSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Facilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-4">
          {facilities.map((facility) => (
            <motion.div
              key={facility.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <img
                src={facility.image}
                alt={facility.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{facility.name}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
