/* eslint-disable react/prop-types */
import AdminSidebar from "../AdminSidebar";

export default function PageContainer({ children }) {
  return (
    <>
      <AdminSidebar />
      <div
        className="w-full flex flex-col flex-grow bg-white text-gray-500"
        style={{ paddingLeft: "220px" }}
      >
        <div className="px-20">{children}</div>
      </div>
    </>
  );
}
