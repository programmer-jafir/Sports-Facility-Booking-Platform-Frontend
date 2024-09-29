import { Button, Col, Flex } from 'antd';
import FGForm from '../../components/form/FGForm';
import FGInput from '../../components/form/FGInput';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import FGSelect from '../../components/form/FGSelect';

const CreateUser = () => {
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data)
    }

    const Role =[
        {
            value: 'admin',
            lable: 'Admin',
    },
        {
            value: 'user',
            lable: 'User',
    },
]
    
    return (
        <Flex justify='center' align='center'>
        <Col span={6}>
        <FGForm onSubmit={onSubmit}>
            <FGInput type="text" name="name" label='User Name:'/>
            <FGInput type="email" name="email" label='User Email:'/>           
            <FGInput type="password" name="password" label='User password:'/>
            <FGInput type="number" name="phone" label='User Mobile Phone:'/>
            <FGInput type="text" name="address" label='User Address:'/>
            <FGSelect label='Role:' name='role' options={Role}/>
            <Button htmlType='submit'>Submit</Button>
        </FGForm>
        </Col>
        </Flex>
    );
};

export default CreateUser;