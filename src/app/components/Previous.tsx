type Props = {
  data: any;
};

function Previous({ data }: Props) {
  return (
    <div className="w-full flex items-center justif-center px-5 py-5 border-yellow1 border-2 rounded-md">
        <div className="flex items-center justify-center gap-5 w-full">
          <p className="text-sm w-full  font-semibold break-all">
            {data?.number} 
            <sub>{data?.from_base}</sub>
          </p>
=
          <p className="text-sm w-full  font-semibold break-all">
            {data?.answer}
            <sub>{data?.to_base}</sub>
          </p>
        </div>
      
    </div>
  );
}

export default Previous;
