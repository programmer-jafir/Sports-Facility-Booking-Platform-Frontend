/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Col, Flex } from "antd";
import FGForm from "../../components/form/FGForm";
import FGInput from "../../components/form/FGInput";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSineupMutation } from "../../redux/features/auth/authApi";
import { toast } from "sonner";

// Define form data type
type AdminFormData = {
  name: string;
  email: string;
  phone: string;
  password: string;
  address: string;
  role: string;
};

const CreateAdmin = () => {
  const defaultValues: AdminFormData = {
    name: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    role: "admin",
  };

  const { control, handleSubmit } = useForm<AdminFormData>({ defaultValues });
  const [sineup] = useSineupMutation();

  const onSubmit: SubmitHandler<AdminFormData> = async (data) => {
    try {
      console.log(data);
      const res = await sineup(data);
      console.log(res);
      if (res.error) {
        toast.error("User already exists");
      } else {
        toast.success("User created successfully");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      toast.error("Something went wrong");
    }
  };

  return (
    <Flex justify="center" align="center">
      <Col span={6}>
        <FGForm onSubmit={(data) => handleSubmit(onSubmit)(data as any)}>
          <FGInput
            control={control}
            type="text"
            name="name"
            label="Admin Name:"
            rules={{ required: "Admin Name is required" }}
          />
          <FGInput
            control={control}
            type="email"
            name="email"
            label="Admin Email:"
            rules={{ required: "Admin Email is required" }}
          />
          <FGInput
            control={control}
            type="password"
            name="password"
            label="Admin Password:"
            rules={{ required: "Admin Password is required" }}
          />
          <FGInput
            control={control}
            type="number"
            name="phone"
            label="Admin Phone:"
            rules={{ required: "Admin Phone is required" }}
          />
          <FGInput
            control={control}
            type="text"
            name="address"
            label="Admin Address:"
            rules={{ required: "Admin Address is required" }}
          />
          <Button htmlType="submit">Submit</Button>
        </FGForm>
      </Col>
    </Flex>
  );
};

export default CreateAdmin;
