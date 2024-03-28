import Previous from "./Previous";
import useStoreInLC from "./useStoreInLC";

function RecentConversions() {
  const { prev } = useStoreInLC();
  return (
    <div className="flex flex-col">
      {prev?.length > 0 && (
        <p className="font-semibold pb-5">Previous Conversions</p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 gap-y-5">
        {prev?.map((r: any, index: any) => (
          <div className="flex flex-wrap" key={index}>
            <Previous data={r} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentConversions;
