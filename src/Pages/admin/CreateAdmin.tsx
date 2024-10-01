import { Button, Col, Flex } from "antd";
import FGForm from "../../components/form/FGForm";
import FGInput from "../../components/form/FGInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useSineupMutation } from "../../redux/features/auth/authApi";
import { toast } from "sonner";

const CreateAdmin = () => {
    const defaultValues = {
        role: "admin",
      };

    const { control, handleSubmit } = useForm({defaultValues});
    const [sineup] = useSineupMutation()
    const onSubmit: SubmitHandler<FieldValues> = async(data) => {
        const admin = {
            name:data.name,
            email:data.email,
            phone:data.phone,
            password:data.password,
            address:data.address,
            role:data.role,
        }
        try{
            console.log(data)
            const res = await sineup(admin);
            console.log(res)
            if(res.error){
                toast.error('User is already exist')
            }else{
                toast.success('User is created successfully')
            }
        }catch(err){
            toast.error('Something went wrong')
        } 
    }


  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <FGForm onSubmit={handleSubmit(onSubmit)}>
          <FGInput
            control={control}
            type='text'
            name='name'
            label='Admin Name:'
            rules={{ required: 'Admin Name is required' }}
          />
          <FGInput
            control={control}
            type='email'
            name='email'
            label='Admin Email:'
            rules={{ required: 'Admin Email is required' }}
          />
          <FGInput
            control={control}
            type='password'
            name='password'
            label='Admin Password:'
            rules={{ required: 'Admin Password is required' }}
          />
          <FGInput
            control={control}
            type='number'
            name='phone'
            label='Admin Phone:'
            rules={{ required: 'Admin Phone is required' }}
          />
          <FGInput
            control={control}
            type='text'
            name='address'
            label='Admin address:'
            rules={{ required: 'Admin address is required' }}
          />
          <Button htmlType="submit">Submit</Button>
        </FGForm>
      </Col>
    </Flex>
  );
};

export default CreateAdmin;
