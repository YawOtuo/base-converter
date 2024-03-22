import TextInput from "./ui/input";
import { Form, Formik } from "formik";

import CustomButton from "./ui/Button";

function BaseConverter() {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-2 h-full py-10 px-10 gap-10">
      <Formik
        initialValues={{}}
        onSubmit={() => {
          console.log("first");
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
              <CustomButton label="Convert" variant="convert" />
            </div>
          </Form>
        )}
      </Formik>

      <div className="w-full h-full min-h-[40vh] bg-yellow2 flex text-center items-center justify-center rounded-md">
        <p className="text-xl font-semibold">100001</p>
      </div>
    </div>
  );
}

export default BaseConverter;
