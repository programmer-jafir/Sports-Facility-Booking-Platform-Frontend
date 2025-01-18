import { useState } from "react";
import SportsFooter from "../components/HomeComponents/SportsFooter";
import Navbar from "../components/Navbar/Navbar";
import { useGetAllFacilityQuery } from "../redux/features/admin/feacilityManagement";
import { useAppSelector } from "../redux/hooks";
import FacilityCard from "../components/Facility/FacilityCard";
import { Button } from "../components/ui/ui/button";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

const AllFacility = () => {
    const { data: facilitys, isLoading, isError } = useGetAllFacilityQuery(undefined);
  const searchTerm = useAppSelector((state) => state.search.searchTerm.toLowerCase());
  
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 9; 

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Ops something went wrong</p>;
  }

  
  const filteredfacilitys = facilitys?.data?.filter((facility: any) =>
    facility.name.toLowerCase().includes(searchTerm)
  );

 
  const totalItems = filteredfacilitys?.length || 0;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredfacilitys?.slice(startIndex, startIndex + itemsPerPage);

 
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div id="facility">
<Navbar/>
    <div className="bg-gray-100">
      <h1 className="text-4xl text-secondary font-bold text-center py-10">All Facilitys</h1>
      <div id="facilitys" className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100">
        
        {currentItems?.length === 0 ? (
          <p className="text-2xl text-red-500 font-semibold">
            No Facilitys found for "{searchTerm}"
          </p>
        ) : (
          
          currentItems?.map((facility: any) => (
            <FacilityCard key={facility._id} facility={facility} />
          ))
        )}
      </div>

      
      {totalPages > 1 && (
        <div className="flex justify-center items-center py-5">
          <Button
            className={`px-4 py-2 mx-1 bg-green-500 text-white rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'}`}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <GrFormPrevious />
          </Button>
          <span className="mx-2 text-lg">{`Page ${currentPage} of ${totalPages}`}</span>
          <Button
            className={`px-4 py-2 mx-1 bg-green-500 text-white rounded ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'}`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <MdNavigateNext />
          </Button>
        </div>
      )}
    </div>
<SportsFooter/>
    </div>
  );
};

export default AllFacility;