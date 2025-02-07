/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useGetAllFacilityQuery } from '../../redux/features/admin/feacilityManagement';
import FacilityCard from '../Facility/FacilityCard';



const FeaturedSection: React.FC = () => {
      const { data: facilitys, isLoading, isError } = useGetAllFacilityQuery(undefined);
      console.log(facilitys?.data)
      console.log(isLoading)
      console.log(isError)
  
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
