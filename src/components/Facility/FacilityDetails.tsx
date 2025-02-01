import React from "react";
import {  Link, useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SportsFooter from "../HomeComponents/SportsFooter";
import {  useGetaFacilityQuery } from "../../redux/features/admin/feacilityManagement";
import { Button } from "../ui/ui/button";


const FacilityDetails: React.FC = () => {
  const { id } = useParams();
  const { data } = useGetaFacilityQuery(id as string);


  return (
    <>
    <Navbar/>
    <div className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-10">
        <div className="flex-shrink-0">
          <img
            className="rounded-lg shadow-lg w-full h-96 object-cover"
            src={data?.data?.img}
            alt={data?.data?.name}
          />
        </div>

        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              {data?.data?.name}
            </h1>
            <p className="mt-4 text-gray-700">{data?.data?.description}</p>
            <span className="block text-gray-700 font-medium text-sm mr-2 mb-2">
              Location: {data?.data?.location}
            </span>
          </div>

          <div className="mt-8">
            <div className="text-2xl font-bold text-primary mb-3">
              <span>Price Per Hour: </span>
              {data?.data?.pricePerHour}$
            </div>
          </div>
          <div className="flex justify-center">
                  <Link className='bg-primary hover:bg-secondary hover:text-white text-white text-base font-medium rounded p-2 px-7 my-2 justify-center' to={`/booking/${data?.data?._id}` }>Book Now</Link>
                  </div>
        </div>
      </div>
    </div>
    <SportsFooter/>
    </>
  );
};

export default FacilityDetails;
