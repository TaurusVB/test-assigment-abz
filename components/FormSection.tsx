"use clint";

import Form from "./Form";
import Section from "./Section";

const FormSection = () => {
  return (
    <Section>
      <h2 id="signUp" className="text-[40px]/[40px] mb-[50px]">
        Working with POST request
      </h2>
      <Form />
    </Section>
  );
};

export default FormSection;
