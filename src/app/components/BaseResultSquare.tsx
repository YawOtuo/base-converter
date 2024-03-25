type Props = {
  result?: string;
  numberBase?: number;
};

function BaseResultSquare({ result, numberBase }: Props) {
  return (
    <div className="w-full h-full min-h-[50vh] bg-yellow2 flex text-center items-center justify-center rounded-md cursor-pointer">
      <p className="text-4xl font-semibold">
        {result}
        <sub>{numberBase}</sub>
      </p>

      {!result && <p>No results yet</p> }
    </div>
  );
}

export default BaseResultSquare;
