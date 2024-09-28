import { useLoginMutation } from '../redux/features/auth/authApi';
import { useForm } from 'react-hook-form';
import { Button } from 'antd';
import { useAppDispatch } from '../redux/hooks';
import { setUser } from '../redux/features/auth/authSlice';
import { verifyToken } from '../utils/verifytoken';

const Login = () => {
  const dispatch = useAppDispatch()

  //  "email": "robina@gmail.com",
  // "password": "abce1235"
  //  "email": "web@programming-hero.com",
  // "password": "programming-hero"
    const { register, handleSubmit } = useForm({
        defaultValues: {
          email: 'robina@gmail.com',
          password: 'abce1235',
        },
      });

      const [login, { error }] = useLoginMutation ();    

      const onSubmit= async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        };
      const res = await login(userInfo).unwrap();
        console.log("response =>",res)
        const user = verifyToken(res.token);

        dispatch(setUser({user: user, token: res.token}))
        
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <div>
      <label htmlFor="email">Email: </label>
      <input type="email" id="email" {...register('email')}/>
    </div>
    <div>
      <label htmlFor="password">Password: </label>
      <input type="password" id="password" {...register('password')}/>
    </div>
    <Button htmlType="submit">Login</Button>
  </form>
  );
};

export default Login;
