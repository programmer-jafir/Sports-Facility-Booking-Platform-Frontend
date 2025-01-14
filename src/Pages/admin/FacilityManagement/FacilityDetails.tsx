import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "antd";
import Navbar from "../../../components/Navbar/Navbar";
import SportsFooter from "../../../components/HomeComponents/SportsFooter";
import { useDeleteaFacilityMutation, useGetaFacilityQuery, useGetAllFacilityQuery } from "../../../redux/features/admin/feacilityManagement";
import { toast } from "sonner";

const FacilityDetails: React.FC = () => {
  const { id } = useParams();
  const { data } = useGetaFacilityQuery(id as string);
  const [deletefacility] = useDeleteaFacilityMutation();
  const { refetch } = useGetAllFacilityQuery({ page: 1, filter: 'all' }); 
  const navigate = useNavigate();


  const handelDeletefacility = async (id: string) => {
    try {
      await deletefacility(id).unwrap();
      await refetch();
      toast.success('Facility is successfully deleted')
      navigate(-1);
    } catch (error) {
      toast.error("Failed to delete the facility");
    }
  };

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
            <div className="text-2xl font-bold text-green-600 mb-3">
              <span>Price Per Hour: </span>
              {data?.data?.pricePerHour}$
            </div>

            <Link
              className="bg-yellow-500 hover:bg-orange-600 text-white text-base font-medium rounded p-2 px-7 my-2 ml-5"
              to={`/facility/${data?.data?._id}`}
            >
              Edit
            </Link>
            <Button
              onClick={() => handelDeletefacility(data?.data?._id)}
              className="bg-red-500 hover:bg-red-600 text-white  text-base font-medium rounded py-5 px-5 my-2 ml-5"
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
    <SportsFooter/>
    </>
  );
};

export default FacilityDetails;
