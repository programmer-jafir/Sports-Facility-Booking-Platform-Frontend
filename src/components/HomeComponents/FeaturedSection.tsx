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
    <section className="pt-12 ">
      <div className='container mx-auto'>
      <h2 className="lg:text-4xl sm:text-3xl text-secondary font-bold text-center lg:mb-0 mb-8">Featured Facilities</h2>
      <div className="flex flex-wrap justify-center items-center min-h-screen ">
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
