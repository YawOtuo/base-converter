import React from "react";
import { Select, SelectItem } from "@nextui-org/react";

type Props = {
  data: any;
  label: string;
  onChange: any;
};
export default function CustomSelect({ data, label, onChange }: Props) {
  return (
    <div className="flex flex-col  w-full flex-wrap md:flex-nowrap gap-2">
      <p className="">{label}</p>
      <Select variant="bordered" onChange={(e) => onChange(e.target.value)} label="Select an operation" className="">
        {data.map((ele : any) => (
          <SelectItem variant="bordered" className="text-black" key={ele.value} value={ele.value}>
            {ele.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
