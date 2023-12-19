import { FC } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface IRadioInputProps {
  name: string;
  id: string;
  label: string;
  type?: string;
  register: UseFormRegister<FieldValues>;
  defaultChecked: boolean;
}

const RadioInput: FC<IRadioInputProps> = ({
  id,
  label,
  register,
  type,
  name,
  defaultChecked,
}) => {
  return (
    <div className="flex items-center ">
      <input
        defaultChecked={defaultChecked}
        type={type}
        id={id}
        value={id}
        {...register(name)}
        className="w-5 h-5  checked:accent-sky-700 rounded cursor-pointer"
      />
      <label className="ml-3 cursor-pointer" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default RadioInput;
