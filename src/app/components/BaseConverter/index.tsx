import TextInput from "../ui/input";
import { Form, Formik } from "formik";

import CustomButton from "../ui/Button";
import useBaseConverter from "./useBaseConverter";
import BaseResultSquare from "../BaseResultSquare";
import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import * as Yup from "yup";

function BaseConverter() {
  const { getAnswer, result, numberBase, error, setError } = useBaseConverter();

  const validationSchema = Yup.object().shape({
    number1: Yup.string().required("Number is required"),
    from_base: Yup.number()
      .min(2, "Minimum base is 2")
      .max(26, "Maximum base is 26")

      .required("From base is required"),

    to_base: Yup.number()
      .min(2, "Minimum base is 2")
      .max(26, "Maximum base is 26")

      .required("To base is required"),
  });

  return (
    <div className="grid grid-cols-1  lg:grid-cols-2 h-full py-10 px-10 gap-10">
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          number1: "0",
          from_base: 10,
          to_base: 2,
        }}
        onSubmit={(values) => {
          getAnswer(values?.from_base, values?.number1, values?.to_base);
        }}>
        {({ handleChange, values, errors, touched }) => (
          <Form className="flex flex-col gap-5 w-full justify-center">
            <div className="text-red-900">{error}</div>

            <div className="flex items-center justify-center gap-5 w-full">
              <TextInput
                className="w-full"
                name="number1"
                onChange={(e) => {
                  handleChange(e);
                  setError("");
                }}
                placeholder="number"
                label="Number"
                value={values?.number1}
                error={errors.number1 ? errors.number1 : null}
              />
            </div>
            {/* <div className="flex items-center justify-center gap-5 w-full"> */}
            {/* <div>Base</div> */}
            <TextInput
              className="w-full"
              name="from_base"
              onChange={handleChange}
              placeholder="base"
              label="From base"
              type={"number"}
              value={values?.from_base}
              error={errors.from_base ? errors.from_base : null}
            />
            {/* <FaLongArrowAltRight size="30" color="black" /> */}

            <TextInput
              className="w-full"
              type={"number"}
              name="to_base"
              onChange={handleChange}
              placeholder="base"
              label="to base"
              value={values?.to_base}
              error={errors.to_base ? errors.to_base : null}
            />
            {/* </div> */}

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
