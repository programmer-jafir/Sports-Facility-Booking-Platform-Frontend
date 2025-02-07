/* eslint-disable @typescript-eslint/no-unused-vars */
import { useLoginMutation } from '../redux/features/auth/authApi';
import { FieldValues } from 'react-hook-form';
import { Button } from 'antd';
import { useAppDispatch } from '../redux/hooks';
import { setUser, TUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifytoken';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import FGForm from '../components/form/FGForm';
import FGInput from '../components/form/FGInput';
import Navbar from '../components/Navbar/Navbar';
import SportsFooter from '../components/HomeComponents/SportsFooter';

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();


      const [login] = useLoginMutation ();    

      const onSubmit= async (data: FieldValues) => {
        const toastId = toast.loading('Logging in')
        try{
          const userInfo = {
              email: data.email,
              password: data.password,
          };
        const res = await login(userInfo).unwrap();
          const user = verifyToken(res.token) as TUser;
          dispatch(setUser({user: user, token: res.token}))
          toast.success('Logged in', {id: toastId, duration: 2000})
          navigate(`/${user.role}/dashboard`)
        }catch(err){
          toast.error("Something went wrong", {id: toastId, duration: 2000})
        }
    };

  return (

 <>
 <Navbar/>
  <div className="flex justify-center items-center h-screen bg-secondary">
  <div className="bg-white rounded-xl shadow-2xl p-10 w-full max-w-lg transform hover:scale-105 transition-transform duration-500">
    <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Welcome Back!</h2>
    <p className="text-center text-gray-500 mb-8">Please login to your account</p>
    <div className="space-y-6">
    <FGForm onSubmit={onSubmit} >
      <div className="relative">
      <FGInput type="email" name="email" label="Email Address:" control={undefined}/>
      </div>

      <div className="relative">
      <FGInput type="password" name="password" label="Password:" control={undefined}/>
      </div>

      <Button
        htmlType="submit"
        className="w-full py-5 px-4 rounded-full ndary text-secondary text-lg font-semibold shadow-lg hover:from-secondary hover:to-primary transition-colors duration-300"
      >
        Login
      </Button>
    </FGForm>
    </div>
    <div className="text-center mt-6">
      <Link to="/register" className="text-indigo-600 hover:text-indigo-500 font-medium text-sm"><span className='text-red-500'>Are you new?</span> Register Now</Link>
    </div>
  </div>
</div>
<SportsFooter/>
 </>
  );
};

export default Login;
