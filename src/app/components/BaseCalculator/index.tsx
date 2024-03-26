import { Form, Formik } from "formik";
import TextInput from "../ui/input";
import CustomButton from "../ui/Button";
import useBaseCalculator from "./useBaseCalculator";
import BaseResultSquare from "../BaseResultSquare";
import * as Yup from "yup";
import CustomSelect from "../ui/Select";
import { useState } from "react";

function BaseCalculator() {
  const { generateResult, result, numberBase, error, setError } =
    useBaseCalculator();
  const [operation, setOperation] = useState<string>("+");

  const validationSchema = Yup.object().shape({
    number1: Yup.string().required("Number is required"),
    number2: Yup.string().required("Number is required"),
    operation: Yup.string().required("Operation is required"),
    base: Yup.number()
      .min(2, "Minimum base is 2")
      .max(26, "Maximum base is 26")
      .required("From base is required"),
  });
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-full py-10 px-10 gap-10">
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          number1: "0",
          operation: "+",
          number2: "0",
          base: 10,
        }}
        onSubmit={(values) => {
          values.operation = operation;
          console.log("first");
          generateResult(
            values?.number1,
            values?.operation,
            values?.number2,
            values?.base
          );
        }}>
        {({ handleChange, values, errors }) => (
          <Form className="flex flex-col gap-5 ">
            <div className="text-red-900">{error}</div>

            <TextInput
              error={errors.base ? errors.base : null}
              type={"number"}
              name="base"
              onChange={handleChange}
              placeholder="base"
              value={values?.base}
              label="base"
            />
            <TextInput
              name="number1"
              onChange={handleChange}
              placeholder="number"
              label="number"
              value={values?.number1}
              error={errors.number1 ? errors.number1 : null}
            />

            <CustomSelect
              onChange={(value: any) => {
                setOperation(value);
              }}
              label="Operation"
              data={[
                {
                  label: "Addition(+)",
                  value: "+",
                },
                {
                  label: "Multiplication(*)",
                  value: "*",
                },
                {
                  label: "Subtraction(-)",
                  value: "-",
                },
                {
                  label: "Division(/)",
                  value: "/",
                },
              ]}
            />

            <TextInput
              name="number2"
              onChange={handleChange}
              placeholder="number"
              label="number"
              value={values?.number2}
              error={errors.number2 ? errors.number2 : null}
            />

            <div className="mt-4 w-full">
              <CustomButton
                type={"submit"}
                label="Calculate"
                variant="convert"
              />
            </div>
          </Form>
        )}
      </Formik>

      <BaseResultSquare result={result} numberBase={numberBase} />
    </div>
  );
}

export default BaseCalculator;
