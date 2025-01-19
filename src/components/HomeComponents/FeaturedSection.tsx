import React from 'react';
import { motion } from 'framer-motion'; // Framer Motion for animation
import { useGetAllFacilityQuery } from '../../redux/features/admin/feacilityManagement';
import FacilityCard from '../Facility/FacilityCard';

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
    image: 'https://images.pexels.com/photos/9739475/pexels-photo-9739475.jpeg', // Replace with actual image path
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
      const { data: facilitys, isLoading, isError } = useGetAllFacilityQuery(undefined);
      console.log(facilitys?.data)
  
  return (
    <section className="py-16 bg-gray-100">
      <div className='container mx-auto'>
      <h2 className="text-3xl text-secondary font-bold text-center mb-12">Featured Facilities</h2>
      <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100">
        {
          
          facilitys?.data?.slice(0, 3).map((facility: any) => (
            <FacilityCard key={facility._id} facility={facility} />
          )
        )}
      </div>

      </div>
    </section>
  );
};

export default FeaturedSection;
