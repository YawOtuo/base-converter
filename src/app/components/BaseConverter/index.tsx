import TextInput from "../ui/input";
import { Form, Formik } from "formik";

import CustomButton from "../ui/Button";
import useBaseConverter from "./useBaseConverter";
import BaseResultSquare from "../BaseResultSquare";
import { useState } from "react";

function BaseConverter() {
  const { getAnswer, result, numberBase } = useBaseConverter();

  const [active, setActive] = useState();
  return (
    <div className="grid grid-cols-1  lg:grid-cols-2 h-full py-10 px-10 gap-10">
      <Formik
        initialValues={{
          number: 0,
          base: 10,
        }}
        onSubmit={(values) => {
          getAnswer(values?.number, values?.base);
        }}>
        {({ handleChange }) => (
          <Form className="flex flex-col gap-5 ">
            <TextInput
              name="base"
              onChange={handleChange}
              placeholder="base"
              label="base"
            />

            <TextInput
              name="number"
              onChange={handleChange}
              placeholder="number"
              label="number"
            />

            <div className="mt-4 w-full">
              <CustomButton type={"submit"} label="Convert" variant="convert" />
            </div>
          </Form>
        )}
      </Formik>

      <BaseResultSquare result={result} numberBase={numberBase} />
    </div>
  );
}

export default BaseConverter;
