import { Button, Col, Flex } from 'antd';
import FGForm from '../../components/form/FGForm';
import FGInput from '../../components/form/FGInput';
import { FieldValues, SubmitHandler } from 'react-hook-form';

const CreateFacility = () => {
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data)
    }
    return (
        <Flex justify='center' align='center'>
        <Col span={6}>
        <FGForm onSubmit={onSubmit}>
            <FGInput type="text" name="name" label='Facility Name:'/>
            <FGInput type="text" name="discription" label='Facility Description:'/>           
            <FGInput type="text" name="number" label='Price per houre:'/>
            <FGInput type="text" name="location" label='Location:'/>
            <Button htmlType='submit'>Submit</Button>
        </FGForm>
        </Col>
        </Flex>
    );
};

export default CreateFacility;