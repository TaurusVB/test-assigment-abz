import { FC } from "react";

interface ITitleProps {
  text: string;
}

const Title: FC<ITitleProps> = ({ text }) => {
  return (
    <h2 id="users" className="text-[40px]/[40px] mb-[50px]">
      {text}
    </h2>
  );
};

export default Title;
