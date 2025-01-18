import { Link } from "react-router-dom";
import { Button } from 'antd';
import { useDeleteaFacilityMutation, useGetAllFacilityQuery } from '../../../redux/features/admin/feacilityManagement';
import { toast } from "sonner";


interface FacilityCardAdminProps {
  facility:any;
}


const FacilityCardAdmin: React.FC<FacilityCardAdminProps> = ({ facility }) => {
    
    const [deletefacility] = useDeleteaFacilityMutation();
  const { refetch } = useGetAllFacilityQuery({ page: 1, filter: 'all' });




  const handelDeletefacility = async (id: string) => {
    try {
      await deletefacility(id).unwrap();
      await refetch();
      toast.success('Facility is successfully deleted')
    } catch (error) {
      toast.error("Failed to delete the facility");
    }
  };
  
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-green-50 m-4 shadow-xl">
      <Link to={`/facility-details/${facility._id}`} className="block">
      <img className="w-[400px] h-[300px] object-cover rounded-2xl" src={facility.img} alt={facility.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2">{facility.name}</div>
      </div>
      </Link>
      <div className="px-6 pt-4 pb-2">
        <span className="block  font-medium text-sm mr-2 mb-2">Price Per Hour: <span className='text-primary font-bold text-xl'>{facility.pricePerHour}$</span></span>
        <span className="block font-medium text-sm mr-2 mb-2">
          Description: { <span className="text-gray-800 font-bold">{facility.description}</span>}
        </span>
        <span className="block font-medium text-sm mr-2 mb-2">
          Location: { <span className="text-gray-800 font-bold">{facility.location}</span>}
        </span>
        
        
       
        <Link className='bg-yellow-500 hover:bg-orange-600 text-white text-base font-medium rounded p-2 px-7 my-2 ml-5' to={`/facility/${facility._id}` }>Edit</Link>
        <Button
              onClick={() => handelDeletefacility(facility._id)}
              className="bg-red-500 hover:bg-red-600 text-white  text-base font-medium rounded py-5 px-5 my-2 ml-5"
            >
              Delete
            </Button>
      </div>
    </div>
  );
};

export default FacilityCardAdmin;
