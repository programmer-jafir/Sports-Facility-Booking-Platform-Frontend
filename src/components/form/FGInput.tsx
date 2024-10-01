import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  rules?: object;
  control: any;
};

const FGInput = ({ control, type, name, label, rules }: TInputProps) => {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <Form.Item 
          label={label}
          validateStatus={error ? `${'error'}` : ''}
            help={error ? error.message : null}
          >
            <Input {...field} type={type} id={name} />
          </Form.Item>
        )}
      />
    </div>
  );
};

export default FGInput;
