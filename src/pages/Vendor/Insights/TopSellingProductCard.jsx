/* eslint-disable react/prop-types */
export default function TopSellingProductCard({ data }) {
  return (
    <>
      <div className="flex gap-5 align-middle p-3 rounded-md bg-white my-4">
        <div
          className="rounded-lg pt-3 relative"
          style={{
            height: 100,
            width: 120,
            overflow: "hidden",
            backgroundColor: "#FFFFFF",
          }}
        >
          <img
            className="absolute"
            src={data.image}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            alt="no"
          />
        </div>
        <div>
          <div className="pt-3">
            <p className="text-md font-medium">{data.name}</p>
          </div>
          <div className="py-1">
            <p className="text-sm">{data.totalSold} sold</p>
          </div>
          <div className="">
            <p className="text-sm">{data.amount} remaining</p>
          </div>
        </div>
      </div>
    </>
  );
}
