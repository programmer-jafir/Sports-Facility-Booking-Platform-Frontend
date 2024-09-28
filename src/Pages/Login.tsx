import { useLoginMutation } from '../redux/features/auth/authApi';
import { FieldValues, useForm } from 'react-hook-form';
import { Button, Row } from 'antd';
import { useAppDispatch } from '../redux/hooks';
import { setUser, TUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifytoken';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import FGForm from '../components/form/FGForm';
import FGInput from '../components/form/FGInput';

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
    <Row justify="center" align="middle" style={{ height:"100vh"}}>
    <FGForm onSubmit={onSubmit}>
      <FGInput type="email" name="email" label="Email:"/>
      <FGInput type="password" name="password" label="Password:"/>
    <Button htmlType="submit">Login</Button>
  </FGForm>
    </Row>
  );
};

export default Login;
