import { Button, Col, Flex } from 'antd';
import FGForm from '../../components/form/FGForm';
import FGInput from '../../components/form/FGInput';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useAddFacilityMutation } from '../../redux/features/admin/feacilityManagement';
import { toast } from 'sonner';

const CreateFacility = () => {
    const { control, handleSubmit } = useForm();
    const [addFacility] = useAddFacilityMutation()
    const onSubmit: SubmitHandler<FieldValues> = async(data) => {
        const facility = {
            name:data.name,
            description:data.description,
            pricePerHour:data.pricePerHour,
            location:data.location,
            img:data.img,
        }
        try{
            console.log(data)
            const res = await addFacility(facility);
            console.log(res)
                toast.success('Facility create successfully')
        }catch(err){
            toast.error('Something went wrong')
        } 
    }


    return (
        <Flex justify='center' align='center'>
        <Col span={6}>
        <FGForm onSubmit={handleSubmit(onSubmit)}
        >
            <FGInput
            control={control}
            type='text'
            name='name'
            label='Facility Name:'
            rules={{ required: 'Facility Name is required' }}
          />
          <FGInput
            control={control}
            type='text'
            name='description'
            label='Facility Description:'
            rules={{ required: 'Description is required' }}
          />
          <FGInput
            control={control}
            type='number'
            name='pricePerHour'
            label='Price per hour:'
            rules={{ required: 'Price is required' }}
          />
          <FGInput
            control={control}
            type='text'
            name='location'
            label='Location:'
            rules={{ required: 'Location is required' }}
          />
          <FGInput
            control={control}
            type='url'
            name='img'
            label='Image URL:'
            rules={{ required: 'Image URL is required' }}
          />
            <Button htmlType='submit'>Submit</Button>
        </FGForm>
        </Col>
        </Flex>
    );
};

export default CreateFacility;