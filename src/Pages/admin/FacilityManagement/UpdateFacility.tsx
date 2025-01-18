import { FormEvent, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEditFacilityMutation, useGetAllFacilityQuery } from '../../../redux/features/admin/feacilityManagement';
import { Button, Input } from 'antd';
import SportsFooter from '../../../components/HomeComponents/SportsFooter';
import Navbar from '../../../components/Navbar/Navbar';
import { toast } from 'sonner';


const UpdateFacility = () => {
  const [img, setImg] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [pricePerHour, setpricePerHour] = useState('');
  const [location, setLocation] = useState('');


  const [editfacility, { data, isLoading, isError, isSuccess }] = useEditFacilityMutation();
  const {  refetch  } = useGetAllFacilityQuery({ page: 1, filter: 'all' });
  const navigate = useNavigate() 

  console.log({ data, isLoading, isError, isSuccess });

  const { id } = useParams();



  const handleUpdate = async (e: FormEvent) => {
    e.preventDefault();
    const facilityDetails: any = {};
    if (img) facilityDetails.img = img;
    if (name) facilityDetails.name = name;
    if (description) facilityDetails.description = description;
    if (pricePerHour) facilityDetails.pricePerHour = pricePerHour;
    if (location) facilityDetails.location = location;

console.log(facilityDetails)
    try {
     await editfacility({ _id: id, updatedfacility: facilityDetails }).unwrap();

      toast.success('Edit facility added successfully');
  
      navigate(-1);
      
    } catch (isError) {
      toast.error('Failed to edit facility');
    }
    refetch();
  };

  return (
    <div>
      <Navbar/>
      <div className="flex justify-center items-center min-h-screen my-10">
      <div className="w-full max-w-md bg-sky-100 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-center text-secondary">Edit Facility</h2>
        <form onSubmit={handleUpdate} className="space-y-4 items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="img">Facility Image</label>
            <Input
              onChange={e => setImg(e.target.value)}
              value={img}
              type="url"
              id="img"
              name="img"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">Facility Name</label>
            <Input
              onChange={e => setName(e.target.value)}
              value={name}
              type="text"
              id="name"
              name="name"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="description">Facility Description</label>
            <textarea
              onChange={e => setDescription(e.target.value)}
              value={description}
              id="description"
              name="description"
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="price">Facility Price</label>
            <Input
              onChange={e => setpricePerHour(e.target.value)}
              value={pricePerHour}
              type="number"
              id="price"
              name="price"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="catagory">Facility Location</label>
            <Input
              onChange={e => setLocation(e.target.value)}
              value={location}
              type="text"
              id="catagory"
              name="catagory"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <Button
              htmlType="submit"
              className="w-full py-5 px-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-lg font-semibold shadow-lg hover:from-secondary hover:to-primary transition-colors duration-300"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
    <SportsFooter/>
    </div>
  );
};

export default UpdateFacility;
