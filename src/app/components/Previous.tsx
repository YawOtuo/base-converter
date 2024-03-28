type Props = {
  data: any;
};

function Previous({ data }: Props) {
  return (
    <div className="w-full  px-5 py-5 border-yellow1 border-2 rounded-md">
        <div className="flex items-center justify-center gap-5">
          <p className="text-sm   font-semibold">
            {data?.number} 
            <sub>{data?.from_base}</sub>
          </p>
=
          <p className="text-sm  font-semibold">
            {data?.answer}
            <sub>{data?.to_base}</sub>
          </p>
        </div>
      
    </div>
  );
}

export default Previous;
