import { Link } from "react-router-dom";

interface facilityCardProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  facility:any;
}

const FacilityCard: React.FC<facilityCardProps> = ({ facility }) => {

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-xl bg-white m-4">
      <Link to={`/facility-details/${facility._id}`} className="block">
      <img className="w-[400px] h-[300px] object-cover rounded-t-2xl" src={facility.img} alt={facility.name} />
      <div className="px-6 py-4"> 
        <div className="font-bold text-2xl mb-2">{facility.name}</div>
      </div>
      </Link>
      <div className="px-6 pt-4 pb-2">
        <span className="block  font-medium text-sm mr-2 mb-2">Price Per Hour: <span className='text-primary font-bold text-xl'>{facility.pricePerHour}$</span></span>
        
        <div className="flex justify-center">
        <Link className='bg-primary hover:bg-secondary hover:text-white text-white text-base font-medium rounded-full p-2 px-7 my-2 justify-center' to={`/facility-details/${facility._id}` }>View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default FacilityCard;
