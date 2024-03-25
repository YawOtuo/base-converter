import { Form, Formik } from "formik";
import TextInput from "../ui/input";
import CustomButton from "../ui/Button";
import useBaseCalculator from "./useBaseCalculator";
import BaseResultSquare from "../BaseResultSquare";
import * as Yup from "yup";
import CustomSelect from "../ui/Select";
import { useState } from "react";

function BaseCalculator() {
  const { generateResult, result, numberBase } = useBaseCalculator();
  const [operation, setOperation] = useState<string>("+");

  const validationSchema = Yup.object().shape({
    number1: Yup.number()
      .required("Number is required")
      .test(
        "valid-for-base",
        "Invalid number for selected base",
        function (value) {
          const base : number = this.resolve(Yup.ref("base"));
          const numberString = value?.toString();

          // Check if each digit is less than the base
          const isValidNumber = numberString
            .split("")
            .every((digit) => parseInt(digit, 10) < base);

          return isValidNumber;
        }
      ),

    number2: Yup.number()
      .required("Number is required")
      .test(
        "valid-for-base",
        "Invalid number for selected base",
        function (value) {
          const base : any = this.resolve(Yup.ref("base"));
          const numberString = value?.toString();

          // Check if each digit is less than the base
          const isValidNumber = numberString
            .split("")
            .every((digit) => parseInt(digit, 10) < base);

          return isValidNumber;
        }
      ),
    operation: Yup.string().required("Operation is required"),
    base: Yup.number()
      .min(2, "Minimum base is 2")
      .required("From base is required"),
  });
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-full py-10 px-10 gap-10">
      <Formik
        validationSchema={validationSchema}
        initialValues={{
          number1: 0,
          operation: "+",
          number2: 0,
          base: 10,
        }}
        onSubmit={(values) => {
          values.operation = operation
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
              type={"number"}
              name="number1"
              onChange={handleChange}
              placeholder="number"
              label="number"
              value={values?.number1}
              error={errors.number1 ? errors.number1 : null}
            />

            <CustomSelect
              onChange={(value : any) => {
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
              type={"number"}
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
