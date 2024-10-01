import { FieldValues, useForm } from 'react-hook-form';
import Navbar from '../components/Navbar/Navbar';
import FGForm from '../components/form/FGForm';
import FGInput from '../components/form/FGInput';
import { Button } from 'antd';
import { toast } from 'sonner';
import SportsFooter from '../components/HomeComponents/SportsFooter';
import { useSineupMutation } from '../redux/features/auth/authApi';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const defaultValues = {
    role: "user",
  };
  const { control, handleSubmit } = useForm({defaultValues});
  const [sineup] = useSineupMutation()

    const onSubmit= async (data: FieldValues) => {
      // const toastId = toast.loading('You are successfully register')
      
          const user = {
            name: data.name,
            email: data.email,
            password: data.password,
            phone: data.phone,
            address: data.address,
            role: data.role,
        };
        
        try{
          console.log(data)
          const res = await sineup(user);
          console.log(res)
          if(res.error){
              toast.error('User is already exist')
          }else{
            toast.success('You are successfully register')

          }
          if(res.data){
            navigate('/login')
          }
      }catch(err){
        toast.error("Something went wrong")
      } 
 
      
      
  };
    return (
        <>
 <Navbar/>
  <div className="flex justify-center items-center h-screen bg-secondary">
  <div className="bg-white rounded-xl shadow-2xl p-10 w-full max-w-lg transform hover:scale-105 transition-transform duration-500">
    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Welcome to Sportix</h2>
    <p className="text-center text-gray-500 mb-8">Register and enjoy services</p>
    
    <FGForm onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="relative">
      <FGInput control={control} type="name" name="name" label="Full Name:" rules={{ required: 'Name is required' }}/>
      </div>
      <div className="relative">
      <FGInput control={control} type="email" name="email" label="Email Address:" rules={{ required: 'Email is required' }}/>
      </div>

      <div className="relative">
      <FGInput control={control} type="password" name="password" label="Password:" rules={{ required: 'Password is required' }}/>
      </div>
      <div className="relative">
      <FGInput control={control} type="number" name="phone" label="Phone Number:" rules={{ required: 'Phone number is required' }}/>
      </div>
      <div className="relative">
      <FGInput control={control} type="text" name="address" label="Address:" rules={{ required: 'Address is required' }}/>
      </div>
      

      <Button
        htmlType="submit"
        className="w-full py-5 px-4 rounded-full bg-gradient-to-r from-primary to-secondary text-white text-lg font-semibold shadow-lg hover:from-secondary hover:to-primary transition-colors duration-300"
      >
        Register
      </Button>
    </FGForm>
    
    <div className="text-center mt-6">
      {/* <Link to="/register" className="text-indigo-600 hover:text-indigo-500 font-medium text-sm"><span className='text-red-500'>Are you new?</span> Register Now</Link> */}
    </div>
  </div>
</div>
<SportsFooter/>
 </>
    );
};

export default Register;