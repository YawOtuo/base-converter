import { Form, Formik } from "formik";
import TextInput from "../ui/input";
import CustomButton from "../ui/Button";
import useBaseCalculator from "./useBaseCalculator";
import BaseResultSquare from "../BaseResultSquare";

function BaseCalculator() {
  const { generateResult, result, numberBase } = useBaseCalculator();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-full py-10 px-10 gap-10">
      <Formik
        initialValues={{
          number1: 0,
          operation: "+",
          number2: 0,
          base: 10,
        }}
        onSubmit={(values) => {
          console.log("first");
          generateResult(
            values?.number1,
            values?.operation,
            values?.number2,
            values?.base
          );
        }}>
        {({ handleChange }) => (
          <Form className="flex flex-col gap-5 ">
            <TextInput
              type={"number"}
              name="base"
              onChange={handleChange}
              placeholder="base"
              label="base"
            />
            <TextInput
              type={"number"}
              name="number1"
              onChange={handleChange}
              placeholder="number"
              label="number"
            />

            <TextInput
              name="operation"
              onChange={handleChange}
              placeholder="operation"
              label="operation"
            />

            <TextInput
              type={"number"}
              name="number2"
              onChange={handleChange}
              placeholder="number"
              label="number"
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
